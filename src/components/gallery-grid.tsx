'use client';

import Image from 'next/image';
import dynamic from 'next/dynamic';
import React, { useEffect, useState } from 'react';
import Masonry, { ResponsiveMasonry } from 'react-responsive-masonry';
import 'yet-another-react-lightbox/styles.css';
import 'yet-another-react-lightbox/plugins/captions.css';
import 'yet-another-react-lightbox/plugins/thumbnails.css';

import { type Slide } from 'yet-another-react-lightbox';
import { Loader2 } from 'lucide-react';

const Lightbox = dynamic(() => import('@/components/lightbox'));

type GalleryGridType = {
	data: Slide[];
};

export const GalleryGrid = ({ data }: GalleryGridType) => {
	const [isMounted, setIsMounted] = useState<boolean>(false);
	const [index, setIndex] = useState<number>(-1);

	// console.log(data);

	const handleClickImage = (index: number) => {
		setIndex(index);
	};

	useEffect(() => {
		setIsMounted(true);
	}, [isMounted]);

	if (!isMounted) {
		return (
			<div className="flex items-center justify-center gap-1 text-xl py-4">
				<Loader2 className="size-4 animate-spin" />
				<span>Loading...</span>
			</div>
		);
	}

	return (
		<>
			<ResponsiveMasonry
				columnsCountBreakPoints={{ 350: 1, 750: 2, 900: 3, 1200: 4 }}
			>
				<Masonry gutter="0.5rem">
					{data.map((slide, index) => (
						<div onClick={() => handleClickImage(index)} key={index}>
							{
								<Image
									style={{ marginRight: 100 }}
									width={slide.width}
									height={slide.height}
									// eslint-disable-next-line @typescript-eslint/ban-ts-comment
									// @ts-expect-error
									src={slide.type ? slide.poster : slide.src}
									alt={slide.title as string}
								/>
							}
						</div>
					))}
				</Masonry>
			</ResponsiveMasonry>
			<Lightbox
				captions={{
					showToggle: true,
					descriptionTextAlign: 'end',
				}}
				index={index}
				open={index >= 0}
				close={() => setIndex(-1)}
				slides={data}
			/>
		</>
	);
};
