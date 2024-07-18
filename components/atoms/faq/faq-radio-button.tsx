import type getFAQData from '@app/data/faq-data';
import {Radio} from '@headlessui/react';

type FAQData = ReturnType<typeof getFAQData>;
type PanelItem = FAQData['panels'][number];

const FAQRadioButton: React.FC<PanelItem> = ({id, label}) => {
	return (
		<Radio
			key={id}
			value={id}
			className="group relative flex cursor-pointer rounded-full bg-black/5 py-3 font-semibold px-8 text-black shadow-md transition hover:bg-black/30 focus:outline-none data-[checked]:font-normal data-[focus]:outline-1 data-[focus]:outline-white data-[checked]:bg-black data-[checked]:text-white"
		>
			{label}
		</Radio>
	);
};

export default FAQRadioButton;
