import { useEffect } from "react";
import "./shipping.styles.scss";

const Shipping = () => {
	useEffect(() => {
		// Animate on scroll
		const observer = new IntersectionObserver((entries) => {
			entries.forEach((entry) => {
				if (entry.isIntersecting) {
					entry.target.classList.add("show");
				} else {
					entry.target.classList.remove("show");
				}
			});
		});

		const hiddenElements = document.querySelectorAll(".hidden");
		hiddenElements.forEach((el) => observer.observe(el));
	}, []);

	return (
		<div className="offer">
			<img
				className="circuit-img"
				src="https://ik.imagekit.io/fabric01/circuit.webp"
				alt="circuit"
			/>
			<h1 className="title">WE OFFER</h1>
			<section id="features">
				<div className="grid hidden">
					<div className="icon">
						<img
							src="https://ik.imagekit.io/fabric01/svg-icons/fire.svg"
							alt="Fire"
						/>
					</div>
					<div className="desc">
						<h2>Premium Materials</h2>
						<p>
							Our clothing is made from the finest quality fabrics, ensuring
							comfort and durability for every wear.
						</p>
					</div>
				</div>
				<div className="grid hidden">
					<div className="icon">
						<img
							src="https://ik.imagekit.io/fabric01/svg-icons/shirt.svg"
							alt="Shirt"
						/>
					</div>
					<div className="desc">
						<h2>Unique Style</h2>
						<p>
							Discover our collection of clothing that's designed with unique
							styles and fashion-forward trends.
						</p>
					</div>
				</div>
				<div className="grid hidden">
					<div className="icon">
						<img
							src="https://ik.imagekit.io/fabric01/svg-icons/truck.svg"
							alt="Truck"
						/>
					</div>
					<div className="desc">
						<h2>Fast Shipping</h2>
						<p>
							We offer fast and reliable shipping, so you can enjoy your new
							clothing as soon as possible. Free returns.
						</p>
					</div>
				</div>
				<div className="grid hidden">
					<div className="icon">
						<img
							src="https://ik.imagekit.io/fabric01/svg-icons/book2.svg"
							alt="Book"
						/>
					</div>
					<div className="desc">
						<h2>Quality Assurance</h2>
						<p>
							We meticulously inspect every garment to ensure it meets our high
							quality standards as top priority.
						</p>
					</div>
				</div>
			</section>
		</div>
	);
};

export default Shipping;
