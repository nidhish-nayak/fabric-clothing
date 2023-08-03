import Footer from "../footer/footer.component";
import { PolicyContainer, PolicyDesc, PolicyTitle } from "./policy.styles";

const Policy = () => {
	return (
		<>
			<PolicyContainer>
				<PolicyTitle>Disclaimer</PolicyTitle>
				<PolicyDesc>
					<li>
						This shopping app has been created solely for educational purposes
						and does not operate as a commercial business. The content available
						within this app, including product descriptions, images, and other
						related materials, may be sourced from various websites and could
						potentially be copyrighted by their respective owners.
					</li>
					<li>
						Please note that the app does not intend to infringe upon any
						copyrights or intellectual property rights. The use of such content
						is strictly for educational purposes, demonstrating functionality,
						and providing a learning experience.
					</li>
					<li>
						No revenue or profits are generated through this app, and it is not
						intended for commercial use or to facilitate any illegal activities.
						Any similarities or resemblances to other websites or products are
						purely coincidental and not intended to mislead or misrepresent.
					</li>
					<li>
						We strongly encourage users to respect intellectual property rights
						and refrain from any unauthorized use, reproduction, or distribution
						of copyrighted materials obtained through this app. The creators of
						this app do not assume any liability or responsibility for the
						misuse or inappropriate use of content by users.
					</li>
					<li>
						Please be aware that while we strive to provide accurate and
						up-to-date information, we cannot guarantee the accuracy,
						completeness, or reliability of the content within this app. Users
						are advised to independently verify any information before making
						any decisions or taking any actions based on the content provided.
					</li>
				</PolicyDesc>
			</PolicyContainer>
			<Footer />
		</>
	);
};

export default Policy;
