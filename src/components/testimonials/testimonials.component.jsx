import React from "react";
import './testimonials.styles.scss';

const Testimonials = () => {
  return (
    <div className="wrapper">
      <h1>Testimonials</h1>
      <div className="test">
        <figure className="snip1157">
          <blockquote>
            I am able to effortlessly find clothes tailored to my unique style and preferences. Shopping online has never been this enjoyable and satisfying for a long time!
            <div className="arrow"></div>
          </blockquote>
          <img src="https://i.ibb.co/cND0yBt/6.webp" alt="customer 1" />
          <div className="author">
            <h5>Jane Smith</h5>
            <span>janesmithfashionblog.com</span>
          </div>
        </figure>
        <figure className="snip1157 hover">
          <blockquote>
            This has revolutionized the way I shop. The intuitive interface and advanced filtering options make it easy to explore a vast collection of high-quality garments. I always find the perfect fit!
            <div className="arrow"></div>
          </blockquote>
          <img src="https://i.ibb.co/M5MbYKK/1.webp" alt="customer 2" />
          <div className="author">
            <h5>Mark Johnson</h5>
            <span>markjohnsonstyle.com</span>
          </div>
        </figure>
        <figure className="snip1157">
          <blockquote>
            I love the seamless online shopping experience and innovative features like virtual try-on. It's a delightful and innovative way to express my style that I always wanted to share.
            <div className="arrow"></div>
          </blockquote>
          <img src="https://i.ibb.co/yqc3Cgs/2.webp" alt="customer 3" />
          <div className="author">
            <h5>Sarah Davis</h5>
            <span>sarahdavisfashion.com</span>
          </div>
        </figure>
      </div>
    </div>
  );
}

export default Testimonials;