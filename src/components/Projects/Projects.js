import React from "react";

import {
	BlogCard,
	CardInfo,
	GridContainer,
	HeaderThree,
	Hr,
	Tag,
	TagList,
	TitleContent,
	Img,
} from "./ProjectsStyles";
import {
	Section,
	SectionDivider,
	SectionTitle,
} from "../../styles/GlobalComponents";
import { projects } from "../../constants/constants";

const Projects = () => (
	<Section nopadding id="projects">
		<SectionDivider />
		<SectionTitle main>Projects And Experiences</SectionTitle>
		<GridContainer>
			{projects.map(({ id, image, title, description, tags }) => (
				<BlogCard key={id}>
					<Img src={image} />
					<TitleContent>
						<HeaderThree title>{title}</HeaderThree>
						<Hr />
					</TitleContent>
					<CardInfo>{description}</CardInfo>
					<div>
						<br />
						<TitleContent>Main Skills</TitleContent>
						<TagList>
							{tags.map((tag, i) => (
								<Tag key={i}>{tag}</Tag>
							))}
						</TagList>
					</div>
				</BlogCard>
			))}
		</GridContainer>
	</Section>
);

export default Projects;
