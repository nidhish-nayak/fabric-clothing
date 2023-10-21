import {
	CircuitImage,
	Description,
	FeaturesSection,
	Grid,
	Icon,
	ShippingContainer,
	Title,
} from "./shipping.styles";

const Shipping = () => {
	return (
		<ShippingContainer>
			<CircuitImage
				src="https://ik.imagekit.io/fabric01/circuit.webp?updatedAt=1694866588754"
				alt="circuit"
			/>
			<Title>WE OFFER</Title>
			<FeaturesSection id="features">
				<Grid className="hidden">
					<Icon>
						<img
							src="https://ik.imagekit.io/fabric01/svg-icons/fire.svg"
							alt="Fire"
						/>
					</Icon>
					<Description>
						<h2>Premium Materials</h2>
						<p>
							Our clothing is made from the finest quality fabrics, ensuring
							comfort and durability for every wear.
						</p>
					</Description>
				</Grid>
				<Grid className="hidden">
					<Icon>
						<img
							src="https://ik.imagekit.io/fabric01/svg-icons/shirt.svg"
							alt="Shirt"
						/>
					</Icon>
					<Description>
						<h2>Unique Style</h2>
						<p>
							Discover our collection of clothing that's designed with unique
							styles and fashion-forward trends.
						</p>
					</Description>
				</Grid>
				<Grid className="hidden">
					<Icon>
						<img
							src="https://ik.imagekit.io/fabric01/svg-icons/truck.svg"
							alt="Truck"
						/>
					</Icon>
					<Description>
						<h2>Fast Shipping</h2>
						<p>
							We offer fast and reliable shipping, so you can enjoy your new
							clothing as soon as possible. Free returns.
						</p>
					</Description>
				</Grid>
				<Grid className="hidden">
					<Icon>
						<img
							src="https://ik.imagekit.io/fabric01/svg-icons/book2.svg"
							alt="Book"
						/>
					</Icon>
					<Description>
						<h2>Quality Assurance</h2>
						<p>
							We meticulously inspect every garment to ensure it meets our high
							quality standards as top priority.
						</p>
					</Description>
				</Grid>
			</FeaturesSection>
		</ShippingContainer>
	);
};

export default Shipping;
