import { FaFingerprint } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
import { Balancer } from "react-wrap-balancer";

import {
	DeliveredClothes,
	DeliveredImages,
	DeliveredText,
	Glass,
	Hero,
	HeroButtonLeft,
	HeroButtonRight,
	HeroDescription,
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

	return (
		<Glass>
			<HeroSectionContainer>
				<Hero>
					<HeroTextBox>
						<HeroTitle>Unleash your style with fabric clothing</HeroTitle>
						<HeroDescription>
							<Balancer>
								We enable you to effortlessly purchase clothes online, tailored
								to your style and preferences.
							</Balancer>
						</HeroDescription>
						<HeroButtonLeft onClick={handleShopNow}>SHOP NOW</HeroButtonLeft>
						<HeroButtonRight onClick={handleSignUp}>
							SIGN UP
							<span>
								<FaFingerprint />
							</span>
						</HeroButtonRight>
					</HeroTextBox>
					<HeroImageContainer>
						<HeroImage
							src="https://i.ibb.co/Kb976Lb/Frame-1.webp"
							alt="Woman enjoying food, meals in storage container, and food bowls on a table"
						/>
					</HeroImageContainer>
					<DeliveredClothes>
						<DeliveredImages>
							<img src="https://i.ibb.co/M5MbYKK/1.webp" alt="Customerphoto" />
							<img src="https://i.ibb.co/yqc3Cgs/2.webp" alt="Customerphoto" />
							<img src="https://i.ibb.co/jWWPHWq/3.webp" alt="Customerphoto" />
							<img src="https://i.ibb.co/7RvYSBp/4.webp" alt="Customerphoto" />
							<img src="https://i.ibb.co/wC3Cbcg/5.webp" alt="Customerphoto" />
							<img src="https://i.ibb.co/cND0yBt/6.webp" alt="Customerphoto" />
						</DeliveredImages>
						<DeliveredText>
							<span>250,000+ </span>
							clothes delivered last year!
						</DeliveredText>
					</DeliveredClothes>
				</Hero>
			</HeroSectionContainer>
		</Glass>
	);
};

export default HeroSection;