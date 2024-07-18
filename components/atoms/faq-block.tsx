import type getFAQData from '@app/data/faq-data';
import {Disclosure, DisclosureButton, DisclosurePanel} from '@headlessui/react';
import {ChevronDownIcon} from '@heroicons/react/20/solid';
import classNames from '@app/utils/class-names';

type FAQData = ReturnType<typeof getFAQData>;
type PanelBlock = FAQData['panels'][number]['blocks'][number];

const FAQBlock: React.FC<PanelBlock> = ({id, question, answer}) => {
	return (
		<Disclosure>
			{({open}) => (
				<div className="border-b">
					<DisclosureButton className="py-2 w-full flex flex-row items-center justify-between py-4 text-lg font-semibold cursor-pointer hover:text-black">
						{question}
						<ChevronDownIcon className={classNames('w-5 transition ease-in-out', open && 'rotate-180')}/>
					</DisclosureButton>
					<DisclosurePanel key={id} transition className="pb-4 transition duration-400 ease-in-out data-[closed]:opacity-0 data-[closed]:h-0">
						<p>
							{answer}
						</p>
					</DisclosurePanel>
				</div>
			)}
		</Disclosure>
	);
};

export default FAQBlock;
