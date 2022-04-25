import React from "react";
import { DiFirebase, DiReact, DiApple, DiPython } from "react-icons/di";
import { SiArduino } from "react-icons/si";
import {
	Section,
	SectionDivider,
	SectionText,
	SectionTitle,
} from "../../styles/GlobalComponents";
import {
	List,
	ListContainer,
	ListItem,
	ListParagraph,
	ListTitle,
} from "./TechnologiesStyles";

const Technologies = () => (
	<Section id="tech">
		<SectionDivider />
		<br />
		<SectionTitle>Technologies</SectionTitle>
		<SectionText>
			Doga Ozgon has worked with a variety of technologies in web development,
			iOS app development, machine learning and robotics.
		</SectionText>
		<List>
			<ListItem>
				<DiReact size="3rem" />
				<ListContainer>
					<ListTitle>Front-End Web Development</ListTitle>
					<ListParagraph>
						Experience with <br />
						HTML, CSS <br />
						JavaScript <br />
						React.js
					</ListParagraph>
				</ListContainer>
			</ListItem>
			<ListItem>
				<DiFirebase size="3rem" />
				<ListContainer>
					<ListTitle>Back-End Web Development</ListTitle>
					<ListParagraph>
						Experience with <br />
						Node.js and Express <br />
						Firebase <br />
						AWS
					</ListParagraph>
				</ListContainer>
			</ListItem>
			<ListItem>
				<DiApple size="3rem" />
				<ListContainer>
					<ListTitle>iOS App Development</ListTitle>
					<ListParagraph>
						Experience with <br />
						Swift Programming Language <br />
						XCode, <br />
						Firebase
					</ListParagraph>
				</ListContainer>
			</ListItem>
			<ListItem>
				<DiPython size="3rem" />
				<ListContainer>
					<ListTitle>Machine Learning</ListTitle>
					<ListParagraph>
						Experience with <br />
						Python <br />
						TensorFlow <br />
						PyTorch <br />
					</ListParagraph>
				</ListContainer>
			</ListItem>
			<ListItem>
				<SiArduino size="3rem" />
				<ListContainer>
					<ListTitle>Robotics</ListTitle>
					<ListParagraph>
						Experience with <br />
						Arduino <br />
						3D Design and Manufacturing <br />
						C/C++
					</ListParagraph>
				</ListContainer>
			</ListItem>
		</List>
	</Section>
);

export default Technologies;
