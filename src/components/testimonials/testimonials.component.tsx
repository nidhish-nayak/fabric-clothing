import {
	Author,
	AuthorName,
	AuthorWebsite,
	BlockFigure,
	BlockImage,
	BlockOne,
	BlockQuote,
	BlockTwo,
	TestimonialsContainer,
	TestimonialsTitle,
	TestimonialsWrapper,
} from "./testimonials.styles";

const Testimonials = () => {
	return (
		<TestimonialsWrapper>
			<TestimonialsTitle>Testimonials</TestimonialsTitle>
			<TestimonialsContainer>
				<BlockFigure>
					<BlockQuote>
						<BlockOne>&#34;</BlockOne>I am able to effortlessly find clothes
						tailored to my unique style and preferences. Also, shopping clothes
						online has never been this easy, enjoyable and satisfying for a very
						long time!
						<BlockTwo>&#34;</BlockTwo>
					</BlockQuote>
					<BlockImage src="https://i.ibb.co/cND0yBt/6.webp" alt="customer 1" />
					<Author>
						<AuthorName>Jane Smith</AuthorName>
						<AuthorWebsite>janesmithfashionblog.com</AuthorWebsite>
					</Author>
				</BlockFigure>
				<BlockFigure>
					<BlockQuote>
						<BlockOne>&#34;</BlockOne>
						This has revolutionized the way I shop. The intuitive interface and
						advanced filtering options make it easy to explore a vast collection
						of high-quality garments. I always find the perfect fit!
						<BlockTwo>&#34;</BlockTwo>
					</BlockQuote>
					<BlockImage src="https://i.ibb.co/M5MbYKK/1.webp" alt="customer 2" />
					<Author>
						<AuthorName>Mark Johnson</AuthorName>
						<AuthorWebsite>markjohnsonstyle.com</AuthorWebsite>
					</Author>
				</BlockFigure>
				<BlockFigure>
					<BlockQuote>
						<BlockOne>&#34;</BlockOne>I love the seamless online shopping
						experience and innovative features like virtual try-on. It's a
						delightful and innovative way to express my style that I always
						wanted to share.
						<BlockTwo>&#34;</BlockTwo>
					</BlockQuote>
					<BlockImage src="https://i.ibb.co/yqc3Cgs/2.webp" alt="customer 3" />
					<Author>
						<AuthorName>Sarah Davis</AuthorName>
						<AuthorWebsite>sarahdavisfashion.com</AuthorWebsite>
					</Author>
				</BlockFigure>
			</TestimonialsContainer>
		</TestimonialsWrapper>
	);
};

export default Testimonials;
