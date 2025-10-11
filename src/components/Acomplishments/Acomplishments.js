import React from "react";

import {
	Section,
	SectionDivider,
	SectionTitle,
} from "../../styles/GlobalComponents";
import { Box, Boxes, BoxNum, BoxText } from "./AcomplishmentsStyles";

const data = [
	{ number: 1200, text: "Followers On LinkedIn" },
	{ number: 4000, text: "Subscribers on YouTube" },
	{ number: 1800, text: "Followers On TikTok" },
	{ number: "600K", text: "Social Media Video Views" },
	{ number: "60K", text: "Article Views On Medium" },
];

const Acomplishments = () => (
	<Section>
		<SectionTitle>Personal Accomplishments</SectionTitle>
		<Boxes>
			{data.map((card, index) => (
				<Box key={index}>
					<BoxNum>{card.number}+</BoxNum>
					<BoxText>{card.text}</BoxText>
				</Box>
			))}
		</Boxes>
	</Section>
);

export default Acomplishments;
