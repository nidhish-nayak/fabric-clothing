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

	return (
		<HeroSectionContainer>
			<HeroCircuit
				src="https://ik.imagekit.io/fabric01/hero-circuit.webp?updatedAt=1694866588842"
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
						<HeroImage
							src="https://ik.imagekit.io/fabric01/frame02.webp?updatedAt=1694888104042"
							alt="Hero"
							decoding="async"
							width={509}
							height={434}
						/>
				</HeroImageContainer>
				<DeliveredClothes>
					<DeliveredImages>
						<img
							src="https://ik.imagekit.io/fabric01/1.webp?updatedAt=1694865303778"
							alt="Customerphoto"
							decoding="async"
						/>
						<img
							src="https://ik.imagekit.io/fabric01/2.webp?updatedAt=1694865303781"
							alt="Customerphoto"
							decoding="async"
						/>
						<img
							src="https://ik.imagekit.io/fabric01/3.webp?updatedAt=1694865303832"
							alt="Customerphoto"
							decoding="async"
						/>
						<img
							src="https://ik.imagekit.io/fabric01/4.webp?updatedAt=1694865303875"
							alt="Customerphoto"
							decoding="async"
						/>
						<img
							src="https://ik.imagekit.io/fabric01/5.webp?updatedAt=1694865303822"
							alt="Customerphoto"
							decoding="async"
						/>
						<img
							src="https://ik.imagekit.io/fabric01/6.webp?updatedAt=1694865303937"
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
