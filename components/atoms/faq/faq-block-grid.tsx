import type {ReactNode} from 'react';

type FAQBlockGridProps = {
	children: ReactNode;
};

const FAQBlockGrid: React.FC<FAQBlockGridProps> = ({children}) => {
	return (
		<section className="grid w-full grid-cols-1 gap-x-32 mt-16 md:grid-cols-2 h-full">
			{children}
		</section>
	);
};

export default FAQBlockGrid;
