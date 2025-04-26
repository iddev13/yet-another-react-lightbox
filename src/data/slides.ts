import { type Slide } from 'yet-another-react-lightbox';

const breakpoints = [3840, 1920, 1080, 640, 384, 256, 128];

function imageLink(asset: string, size: number) {
	return `https://images.yet-another-react-lightbox.com/${asset}.${size}w.jpg`;
}

export const slides = [
	{ asset: 'image01.0800ee93.3840x5760' },
	{ asset: 'image02.645bc7e4.3840x5070' },
	{ asset: 'image03.13c5eeb7.3840x5120' },
	{ asset: 'image04.2d71a97f.3840x2546' },
	{ asset: 'image05.c6ce32ab.3840x5760' },
	{ asset: 'image06.74d5e191.3840x2553' },
	{ asset: 'image07.1602015b.3840x2553' },
	{ asset: 'image08.33e60453.3840x5760' },
	{ asset: 'image09.1d093bea.3840x5760' },
	{ asset: 'image10.e7aa266c.3840x2560' },
	{ asset: 'image11.6ed25a69.3840x5760' },
	{ asset: 'image12.488257a7.3840x5124' },
	{ asset: 'image13.0fc79d13.3840x5643' },
	{ asset: 'image14.6bc8c696.3840x5781' },
	{ asset: 'image15.fb53298e.3840x4800' },
	{ asset: 'image16.77c07118.3840x5760' },
	{ asset: 'image17.58ea6291.3840x2560' },
	{ asset: 'image18.a9406288.3840x6834' },
	{ asset: 'image19.e6ab64a0.3840x5771' },
	{ asset: 'image20.9ed3d306.3840x5735' },
	{ asset: 'image21.1623efe7.3840x2560' },
	{ asset: 'image22.f31106df.3840x5124' },
	{ asset: 'image23.34aef8b0.3840x4800' },
	{ asset: 'image24.b3755f37.3840x2560' },
	{ asset: 'image25.58b30d95.3840x5760' },
	{ asset: 'image26.dec9345c.3840x4654' },
	{ asset: 'image27.a206ba29.3840x2553' },
	{ asset: 'image28.59adc517.3840x6837' },
	{ asset: 'image29.a214f3ff.3840x2272' },
	{ asset: 'image30.277ffefc.3840x5120' },
	{ asset: 'image31.58452198.3840x5760' },
	{ asset: 'image32.b13d36c3.3840x5120' },
	{ asset: 'image33.64b5399a.3840x4800' },
	{ asset: 'image34.d880c284.3840x6827' },
	{ asset: 'image35.0c73b373.3840x5120' },
	{ asset: 'image36.c4b0f6e6.3840x2880' },
	{ asset: 'image37.46f6cccd.3840x3072' },
	{ asset: 'image38.ea4a8d38.3840x2560' },
	{ asset: 'image39.6f4ade23.3840x5756' },
	{ asset: 'image40.9c67a759.3840x5760' },
	{ asset: 'image41.f95d1ab1.3840x2158' },
	{ asset: 'image42.2f191aff.3840x4800' },
	{ asset: 'image43.f85e1091.3840x5120' },
	{ asset: 'image44.624d86dc.3840x4800' },
	{ asset: 'image45.9630abf7.3840x4800' },
	{ asset: 'image46.9f1803af.3840x5760' },
	{ asset: 'image47.8800ae70.3840x7844' },
	{ asset: 'image48.7dfee306.3840x5760' },
	{ asset: 'image49.76bd7f09.3840x2560' },
	{ asset: 'image50.ca342ccd.3840x5760' },
	{ asset: 'image51.06c02a19.3840x2560' },
].map(({ asset, ...rest }) => {
	const matcher = asset.match(/\.(\d+)x(\d+)$/)!;
	const width = Number.parseInt(matcher[1], 10);
	const height = Number.parseInt(matcher[2], 10);

	return {
		src: imageLink(asset, width),
		width,
		height,
		srcSet: breakpoints.map((breakpoint) => ({
			src: imageLink(asset, breakpoint),
			width: breakpoint,
			height: Math.round((height / width) * breakpoint),
		})),
		...rest,
	};
});

export const advancedSlides: Slide[] = [
	{ ...slides[0], title: 'Puppy in sunglasses', description: 'Mollie Sivaram' },
	{
		...slides[1],
		title: 'Miami Beach',
		description:
			'Clark Van Der Beken\n\nSouth Beach, Miami Beach, Florida, United States',
	},
	{
		...slides[2],
		title: 'Flamingo',
		description: 'Vicko Mozara\n\nVeliki zali, Dubravica, Croatia',
	},
	{
		type: 'video' as const,
		title: 'Big Buck Bunny',
		description:
			'The Peach Open Movie Project\n\nBlender Institute, Netherlands',
		width: 1280,
		height: 720,
		poster: '/assets/image/poster.jpg',
		sources: [
			{
				src: 'https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4',
				type: 'video/mp4',
			},
		],
	},
	{
		...slides[3],
		title: 'Starfish on a sand beach',
		description: 'Pedro Lastra\n\nKey West, Florida, United States',
	},
	{
		...slides[6],
		title:
			'The last night of a two week stay on the North Shore of Oahu, Hawaii',
		description: 'Sean Oulashin\n\nNorth Shore, Waialua, Hawaii, United States',
	},
	{
		...slides[7],
		title: 'Sunset on Kauai',
		description: 'Cristofer Maximilian\n\nKauai, Hawaii, United States',
	},
	{
		...slides[9],
		title: 'RayBan sunglasses',
		description: 'Ethan Robertson\n\nSanta Monica, California, United States',
	},
	{
		...slides[11],
		title: 'Find the time',
		description: 'Alex Perez\n\nNaples, Florida, United States',
	},
];

export default slides;
