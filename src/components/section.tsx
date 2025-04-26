import { cn } from '@/lib/utils';

type SectionType = {
	className?: string;
	title?: string;
	subtitle?: string;
	children: React.ReactNode;
};

export const Section = ({
	className,
	title,
	subtitle,
	children,
}: SectionType) => {
	return (
		<section className={cn('py-5 md:py-10 overflow-hidden', className)}>
			<div className="mb-2 md:mb-5">
				<div className="max-w-5xl w-full mx-auto">
					<h3 className="relative text-3xl capitalize text-center pt-3 pb-1 after:block after:content-[''] after:absolute after:top-0 after:left-1/2 after:-translate-x-1/2 after:w-20 after:h-0.5 after:rounded-md after:bg-rose-700">
						{title}
					</h3>
					<h4 className="text-2xl font-bold capitalize text-center">{subtitle}</h4>
				</div>
			</div>
			<div>{children}</div>
		</section>
	);
};
