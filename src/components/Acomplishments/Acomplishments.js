import React from "react";

import {
	Section,
	SectionDivider,
	SectionTitle,
} from "../../styles/GlobalComponents";
import { Box, Boxes, BoxNum, BoxText } from "./AcomplishmentsStyles";

const data = [
	{ number: 600, text: "Followers On LinkedIn" },
	{ number: 800, text: "Subscribers on YouTube" },
	{ number: 1900, text: "Followers On TikTok" },
	{ number: "200K", text: "Social Media Video Views" },
	{ number: "30K", text: "Article Views On Medium" },
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
