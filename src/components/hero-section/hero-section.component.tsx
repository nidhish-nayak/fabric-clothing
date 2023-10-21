import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { Balancer } from "react-wrap-balancer";
import "./hero-section.styles.css";

import {
	DeliveredClothes,
	DeliveredImages,
	DeliveredText,
	Hero,
	HeroButtonLeft,
	HeroButtonRight,
	HeroCircuit,
	HeroDescription,
	HeroFingerprint,
	HeroImage,
	HeroImageContainer,
	HeroSectionContainer,
	HeroTextBox,
	HeroTitle,
} from "./hero-section.styles";

export const HeroSection = () => {
	const navigate = useNavigate();
	const handleShopNow = () => {
		navigate("/shop");
	};
	const handleSignUp = () => {
		navigate("/auth");
	};

	// Lazy Loading hero image
	useEffect(() => {
		const blurDivs = document.querySelectorAll(".blur-load");

		blurDivs.forEach((div) => {
			function loaded() {
				// Show image
				div.classList.add("loaded");
			}

			const img = div.querySelector("img");
			if (img?.complete) {
				loaded();
			} else {
				img?.addEventListener("load", loaded);
			}
		});
	}, []);

	return (
		<HeroSectionContainer>
			<HeroCircuit
				src={require("../../assets/hero-circuit.webp")}
				alt="hero circuit"
			/>
			<Hero>
				<HeroTextBox>
					<HeroTitle>Unleash your style</HeroTitle>
					<HeroTitle>with fabric clothing</HeroTitle>
					<HeroDescription>
						<Balancer>
							We enable you to effortlessly purchase
							<br />
							clothes online, tailored to your
							<br />
							style and preferences.
							<br />
						</Balancer>
					</HeroDescription>
					<HeroButtonLeft onClick={handleShopNow}>SHOP NOW</HeroButtonLeft>
					<HeroButtonRight onClick={handleSignUp}>
						SIGN UP
						<span>
							<HeroFingerprint
								src="https://ik.imagekit.io/fabric01/svg-icons/fingerprint.svg"
								alt="Fingerprint"
								width={15}
								height={15}
								decoding="async"
							/>
						</span>
					</HeroButtonRight>
				</HeroTextBox>
				<HeroImageContainer>
					<div className="blur-load">
						<HeroImage
							src="https://ik.imagekit.io/fabric01/heroImage.webp?updatedAt=1697876255923"
							alt="Hero"
							loading="lazy"
							decoding="async"
							width={509}
							height={434}
						/>
					</div>
				</HeroImageContainer>
				<DeliveredClothes>
					<DeliveredImages>
						<img
							src={require("../../assets/1.webp")}
							alt="Customerphoto"
							decoding="async"
						/>
						<img
							src={require("../../assets/2.webp")}
							alt="Customerphoto"
							decoding="async"
						/>
						<img
							src={require("../../assets/3.webp")}
							alt="Customerphoto"
							decoding="async"
						/>
						<img
							src={require("../../assets/3.webp")}
							alt="Customerphoto"
							decoding="async"
						/>
						<img
							src={require("../../assets/4.webp")}
							alt="Customerphoto"
							decoding="async"
						/>
						<img
							src={require("../../assets/5.webp")}
							alt="Customerphoto"
							decoding="async"
						/>
					</DeliveredImages>
					<DeliveredText>
						<span>250,000+ </span>
						clothes delivered last year!
					</DeliveredText>
				</DeliveredClothes>
			</Hero>
		</HeroSectionContainer>
	);
};

export default HeroSection;
