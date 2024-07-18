type PageHeadingProps = {
	label: string;
};

const PageHeading: React.FC<PageHeadingProps> = ({label}) => {
	return (
		<h2 className="mb-4 text-xl font-semibold">{label}</h2>
	);
};

export default PageHeading;
