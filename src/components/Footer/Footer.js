import React from "react";
import {
	AiFillGithub,
	AiFillInstagram,
	AiFillLinkedin,
	AiFillYoutube,
	AiFillMediumSquare,
} from "react-icons/ai";

import { SocialIcons } from "../Header/HeaderStyles";
import {
	CompanyContainer,
	FooterWrapper,
	LinkColumn,
	LinkItem,
	LinkList,
	LinkTitle,
	Slogan,
	SocialContainer,
	SocialIconsContainer,
} from "./FooterStyles";

import { SiFiverr, SiTiktok } from "react-icons/si";

const Footer = () => {
	return (
		<FooterWrapper>
			<LinkList>
				<LinkColumn>
					<LinkTitle>Email</LinkTitle>
					<LinkItem href="mailto:techwithdoga@gmail.com">
						techwithdoga@gmail.com
					</LinkItem>
				</LinkColumn>
			</LinkList>
			<SocialIconsContainer>
				<CompanyContainer>
					<Slogan>Innovating one project at a time.</Slogan>
				</CompanyContainer>
				<SocialContainer>
					<SocialIcons href="https://github.com/dogaozgon">
						<AiFillGithub size="3rem" />
					</SocialIcons>
					<SocialIcons href="https://www.linkedin.com/in/dogaozgon/">
						<AiFillLinkedin size="3rem" />
					</SocialIcons>
					<SocialIcons href="https://www.youtube.com/c/CodewithDogaOzgon">
						<AiFillYoutube size="3rem" />
					</SocialIcons>
					<SocialIcons href="https://medium.com/@dogaozgon">
						<AiFillMediumSquare size="3rem" />
					</SocialIcons>
					<SocialIcons href="https://www.tiktok.com/@dogaozgon">
						<SiTiktok size="2rem" />
					</SocialIcons>
					<SocialIcons href="https://www.fiverr.com/dogaozgon">
						<SiFiverr size="3rem" />
					</SocialIcons>
					<SocialIcons href="https://www.instagram.com/dogaozgon/?hl=en">
						<AiFillInstagram size="3rem" />
					</SocialIcons>
				</SocialContainer>
			</SocialIconsContainer>
		</FooterWrapper>
	);
};

export default Footer;
