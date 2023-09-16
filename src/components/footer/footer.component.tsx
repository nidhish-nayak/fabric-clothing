import { useEffect } from "react";
import { Link } from "react-router-dom";

import { Balancer } from "react-wrap-balancer";

import Logo from "../logo/logo.component";
import SubscribeForm from "../subscribe-form/subscribe-form.component";
import {
	Divider,
	FooterWrapper,
	IconContainer,
	IconWrapper,
	List,
	LogoWrapper,
	SubscribeContainer,
	SubscribeTitle,
} from "./footer.styles";

const Footer = () => {
	// Mobile view - The scroll stays at same position on routes hence scroll to top on render
	useEffect(() => {
		window.scrollTo(0, 0);
	}, []);

	return (
		<FooterWrapper>
			<LogoWrapper>
				<Logo />
			</LogoWrapper>
			<List>
				<li>Resources</li>
				<li>
					<Link to="/policy">Docs</Link>
				</li>
				<li>
					<Link to="/policy">Learn</Link>
				</li>
				<li>
					<Link to="/policy">Previews</Link>
				</li>
			</List>
			<List>
				<li>Explore</li>
				<li>
					<Link to="/policy">Commerce</Link>
				</li>
				<li>
					<Link to="/policy">Github</Link>
				</li>
				<li>
					<Link to="/policy">Releases</Link>
				</li>
				<li>
					<Link to="/policy">Contact Sales</Link>
				</li>
			</List>
			<List>
				<li>Legal</li>
				<li>
					<Link to="/policy">Privacy Policy</Link>
				</li>
				<li>
					<Link to="/policy">Cookie Preferences</Link>
				</li>
			</List>
			<IconContainer>
				<p>© 2023 Fabric, Inc.</p>
				<IconWrapper>
					<a
						href="https://github.com/Nidhish-D-Nayak/fabric-clothing"
						target="_blank"
						rel="noreferrer noopener"
						aria-label="Github link"
					>
						<img
							src="https://ik.imagekit.io/fabric01/svg-icons/github.svg"
							alt="Github"
						/>
					</a>
					<Divider>|</Divider>
					<a
						href="https://react.dev"
						target="_blank"
						rel="noreferrer noopener"
						aria-label="React Docs"
					>
						<img
							src="https://ik.imagekit.io/fabric01/svg-icons/react.svg"
							alt="React"
						/>
					</a>
				</IconWrapper>
			</IconContainer>
			<SubscribeContainer>
				<SubscribeTitle>Sign up for newsletter</SubscribeTitle>
				<p>
					<Balancer>
						Stay updated on new releases and features, guides, and case studies.
					</Balancer>
				</p>
				<SubscribeForm />
			</SubscribeContainer>
		</FooterWrapper>
	);
};

export default Footer;
