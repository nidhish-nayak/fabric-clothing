import { useNavigate } from "react-router-dom";
import { Balancer } from "react-wrap-balancer";

import {
	DeliveredClothes,
	DeliveredImages,
	DeliveredText,
	Hero,
	HeroButtonLeft,
	HeroButtonRight,
	HeroCircuit,
	HeroDescription,
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

	return (
		<HeroSectionContainer>
			<HeroCircuit
				src="https://ik.imagekit.io/fabric01/hero-circuit.webp"
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
							<img
								src="https://ik.imagekit.io/fabric01/svg-icons/fingerprint.svg"
								alt="Fingerprint"
							/>
						</span>
					</HeroButtonRight>
				</HeroTextBox>
				<HeroImageContainer>
					<img
						// src={require("../../assets/frame.webp")}
						src="https://ik.imagekit.io/fabric01/frame02.webp"
						alt="Hero"
						style={{ width: "100%" }}
					/>
				</HeroImageContainer>
				<DeliveredClothes>
					<DeliveredImages>
						<img
							src="https://ik.imagekit.io/fabric01/1.webp"
							alt="Customerphoto"
						/>
						<img
							src="https://ik.imagekit.io/fabric01/2.webp"
							alt="Customerphoto"
						/>
						<img
							src="https://ik.imagekit.io/fabric01/3.webp"
							alt="Customerphoto"
						/>
						<img
							src="https://ik.imagekit.io/fabric01/4.webp"
							alt="Customerphoto"
						/>
						<img
							src="https://ik.imagekit.io/fabric01/5.webp"
							alt="Customerphoto"
						/>
						<img
							src="https://ik.imagekit.io/fabric01/6.webp"
							alt="Customerphoto"
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
