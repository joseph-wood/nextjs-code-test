'use client';
import React, {useState} from 'react';
import type getFAQData from '@app/data/faq-data';
import {RadioGroup} from '@headlessui/react';
import {FAQBlock, FAQBlockGrid, FAQRadioButton, PageHeading} from '@app/components/atoms';

type FAQData = ReturnType<typeof getFAQData>;
type PanelId = FAQData['panels'][number]['id'];
type PanelItem = FAQData['panels'][number];

const FAQSection = ({data}: { data: FAQData }): React.ReactElement => {
	const [activePanelId, onActivePanelId] = useState<PanelId>(data.panels[0]?.id);
	const activePanel = data.panels.find(x => x.id === activePanelId);

	return (
		<React.Fragment>
			<section className="flex flex-col items-center mt-16">
				<PageHeading label="Learn more about"/>
				<RadioGroup
					value={activePanelId}
					aria-label="Server size"
					className="flex space-x-4"
					onChange={onActivePanelId}
				>
					{data.panels.map((panel: PanelItem) => (
						<FAQRadioButton key={panel.id} {...panel}/>
					))}
				</RadioGroup>
			</section>
			<FAQBlockGrid>
				<div>
					{activePanel?.blocks.filter((_, index) => index % 2 == 1).map(block => <FAQBlock key={`${activePanel.id}-${block.id}`} {...block}/>)}
				</div>
				<div>
					{activePanel?.blocks.filter((_, index) => index % 2 == 0).map(block => <FAQBlock key={`${activePanel.id}-${block.id}`} {...block}/>)}
				</div>
			</FAQBlockGrid>
		</React.Fragment>
	);
};

export default FAQSection;
