import React, { useState, useRef, useEffect } from "react";

import {
	CarouselButton,
	CarouselButtonDot,
	CarouselButtons,
	CarouselContainer,
	CarouselItem,
	CarouselItemImg,
	CarouselItemText,
	CarouselItemTitle,
	CarouselMobileScrollNode,
} from "./TimeLineStyles";
import {
	Section,
	SectionDivider,
	SectionText,
	SectionTitle,
} from "../../styles/GlobalComponents";
import { TimeLineData } from "../../constants/constants";

const TOTAL_CAROUSEL_COUNT = TimeLineData.length;

const Timeline = () => {
	const [activeItem, setActiveItem] = useState(0);
	const carouselRef = useRef();

	const scroll = (node, left) => {
		return node.scrollTo({ left, behavior: "smooth" });
	};

	const handleClick = (e, i) => {
		e.preventDefault();

		if (carouselRef.current) {
			const scrollLeft = Math.floor(
				carouselRef.current.scrollWidth * 0.7 * (i / TimeLineData.length)
			);

			scroll(carouselRef.current, scrollLeft);
		}
	};

	const handleScroll = () => {
		if (carouselRef.current) {
			const index = Math.round(
				(carouselRef.current.scrollLeft /
					(carouselRef.current.scrollWidth * 0.7)) *
					TimeLineData.length
			);

			setActiveItem(index);
		}
	};

	// snap back to beginning of scroll when window is resized
	// avoids a bug where content is covered up if coming from smaller screen
	useEffect(() => {
		const handleResize = () => {
			scroll(carouselRef.current, 0);
		};

		window.addEventListener("resize", handleResize);
	}, []);

	return (
		<Section id="about">
			<SectionTitle>About Doga Ozgon</SectionTitle>
			<SectionText>
				Doga Ozgon started his programming journey in 2015 and has worked with
				multiple programming languages in a variety of settings. He first
				started with a MATLAB Course at his university and quickly moved to
				coding and building electronics with Arduino using C/C++. Around those
				times he also introduced himself to Python as well as Web Development
				using HTML/CSS and JavaScript. In 2018, he started building his own iOS
				Applications after finishing a comprehensive online course. In 2019, he
				started getting a deeper dive into Python and Machine Learning. After
				spending many months mastering TensorFlow, in 2020 he started a YouTube
				channel and relevant social media accounts such as TikTok, Instagram,
				Facebook, Medium and started sharing his experience on multiple topics
				including Python, Machine Learning and Artificial Intelligence. In 2021,
				he also started helping people and companies directly through private
				lessons and beginner to advanced courses in JavaScript, Python and
				Artificial Intelligence. He has worked with clients worldwide including
				US, Canada, Australia and Europe. In 2021, Doga also joined a Canadian
				healthcare start up team (pre-incorporation) as a software developer.
				Doga never stops learning and implementing solutions. He is a natural
				problem solver and he will learn any technology or a new way of thinking
				to solve the problem at hand.
			</SectionText>
			<CarouselContainer ref={carouselRef} onScroll={handleScroll}>
				<>
					{TimeLineData.map((item, index) => (
						<CarouselMobileScrollNode
							key={index}
							final={index === TOTAL_CAROUSEL_COUNT - 1}
						>
							<CarouselItem
								index={index}
								id={`carousel__item-${index}`}
								active={activeItem}
								onClick={(e) => handleClick(e, index)}
							>
								<CarouselItemTitle>
									{item.year}
									<CarouselItemImg
										width="208"
										height="6"
										viewBox="0 0 208 6"
										fill="none"
										xmlns="http://www.w3.org/2000/svg"
									>
										<path
											fill-rule="evenodd"
											clip-rule="evenodd"
											d="M2.5 5.5C3.88071 5.5 5 4.38071 5 3V3.5L208 3.50002V2.50002L5 2.5V3C5 1.61929 3.88071 0.5 2.5 0.5C1.11929 0.5 0 1.61929 0 3C0 4.38071 1.11929 5.5 2.5 5.5Z"
											fill="url(#paint0_linear)"
											fill-opacity="0.33"
										/>
										<defs>
											<linearGradient
												id="paint0_linear"
												x1="-4.30412e-10"
												y1="0.5"
												x2="208"
												y2="0.500295"
												gradientUnits="userSpaceOnUse"
											>
												<stop stop-color="white" />
												<stop
													offset="0.79478"
													stop-color="white"
													stop-opacity="0"
												/>
											</linearGradient>
										</defs>
									</CarouselItemImg>
								</CarouselItemTitle>
								<CarouselItemText>{item.text}</CarouselItemText>
							</CarouselItem>
						</CarouselMobileScrollNode>
					))}
				</>
			</CarouselContainer>
			<CarouselButtons>
				{TimeLineData.map((item, index) => (
					<CarouselButton
						key={index}
						index={index}
						active={activeItem}
						onClick={(e) => handleClick(e, index)}
						type="button"
					>
						<CarouselButtonDot active={activeItem} />
					</CarouselButton>
				))}
			</CarouselButtons>
			<SectionDivider />
		</Section>
	);
};

export default Timeline;
