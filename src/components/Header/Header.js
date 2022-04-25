import Link from "next/link";
import React from "react";
import {
	AiFillGithub,
	AiFillInstagram,
	AiFillLinkedin,
	AiFillYoutube,
	AiFillMediumSquare,
} from "react-icons/ai";
import { DiCssdeck } from "react-icons/di";

import {
	Container,
	Div1,
	Div2,
	Div3,
	NavLink,
	SocialIcons,
	Span,
} from "./HeaderStyles";

import { SiFiverr, SiTiktok } from "react-icons/si";

const Header = () => (
	<Container>
		<Div1>
			<Link href="/">
				<a
					style={{
						display: "flex",
						alignItems: "center",
						color: "white",
						marginBottom: "20px",
					}}
				>
					<DiCssdeck size="3rem" />
					<Span>DOGA OZGON</Span>
				</a>
			</Link>
		</Div1>
		<Div2>
			<li>
				<Link href="#projects">
					<NavLink>Projects</NavLink>
				</Link>
			</li>
			<li>
				<Link href="#tech">
					<NavLink>Technologies</NavLink>
				</Link>
			</li>
			<li>
				<Link href="#about">
					<NavLink>About</NavLink>
				</Link>
			</li>
		</Div2>
		<Div3>
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
		</Div3>
	</Container>
);

export default Header;
