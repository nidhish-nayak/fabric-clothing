import { Link } from "react-router-dom";
import { TitleContainer, TitleOne, TitleTwo } from "./logo.styles";

const Logo = () => {
	return (
		<TitleContainer>
			<Link to="/">
				<TitleOne>FABRIC</TitleOne>
				<TitleTwo>CLOTHING</TitleTwo>
			</Link>
		</TitleContainer>
	);
};

export default Logo;
