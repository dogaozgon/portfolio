import React from "react";

import {
	Section,
	SectionText,
	SectionTitle,
} from "../../styles/GlobalComponents";
import Button from "../../styles/GlobalComponents/Button";
import { LeftSection } from "./HeroStyles";

const Hero = () => (
	<Section row nopadding>
		<LeftSection>
			<SectionTitle main center>
				Welcome To <br />
				Doga Ozgon's Portfolio
			</SectionTitle>
			<SectionText>
				Doga Ozgon has helped thosands of developers get better at what they do,
				covering topics such as python, machine learning, artificial
				intelligence, web development and general programming fundamentals.
			</SectionText>
			<Button onClick={() => (window.location = "#about")}>Learn More</Button>
		</LeftSection>
	</Section>
);

export default Hero;
