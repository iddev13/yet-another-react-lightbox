import Link from 'next/link';

import { Section } from './section';
import { GalleryGrid } from './gallery-grid';
import { advancedSlides } from '@/constants';
import { Button } from '@/components/ui/button';

type GalleryComponentType = {
	homeTitle: string;
	homeSubtitle: string;
	homeLabel: string;
};

export const GalleryComponent = async ({
	homeTitle,
	homeSubtitle,
	homeLabel,
}: GalleryComponentType) => {
	return (
		<Section
			className="portfolio bg-primary-foreground"
			title={homeTitle}
			subtitle={homeSubtitle}
		>
			<div className="max-w-[1920px] mx-auto">
				<div className="mb-6">
					<GalleryGrid data={advancedSlides} />
				</div>
				<div className=" flex justify-center ">
					<Button asChild>
						<Link className="capitalize" href="/gallery">
							{homeLabel}
						</Link>
					</Button>
				</div>
			</div>
		</Section>
	);
};
