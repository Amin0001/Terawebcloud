// components/Carousel.js
import { Carousel } from "react-bootstrap";
import RatingCard from "./RatingCard";
import casualImage from "../public/images/casual.jpg";
import ankaraImage from "../public/images/ankara.webp";
import styles from "./MyCarousel.module.css"; // Import custom styles

const MyCarousel = () => {
  return (
    <Carousel className={`mx-auto ${styles.center}`}>
      <Carousel.Item>
        <RatingCard
          name="Jenny Williams"
          occupation="Web Developer"
          image={casualImage}
          heading="Web Development"
          paragraph="I was amazed by TerraWeb's web development team theyy turned my vision into a stunning user friendly website. Their attention to detail and commitment to delivering on time exceeded my expectations. Highly recommended! "
          rating={5}
        />
      </Carousel.Item>
      <Carousel.Item>
        <RatingCard
          name="Andy Desmond"
          occupation="Freelancer"
          image={ankaraImage}
          heading="Customer Support"
          paragraph="The Customer Support at TerraWeb is Exceptional. Whenever I faced an issue or had a question, their support team was quick to respond and resolve my concerns. It's reassuring to use a platform that really cares! "
          rating={5}
        />
      </Carousel.Item>
      <Carousel.Item>
        <RatingCard
          name="John Doe"
          occupation="Online Tutor"
          image={casualImage}
          heading="Fast Services"
          paragraph="The support team at TerraWeb is truly exceptional. Whenever I encountered an issue or had a question, their customer support responded promptly and resolved my concerns with care. It's reassuring to use a platform that values its users and goes the extra mile to ensure a positive experience. Thank you, TerraWeb, for your outstanding support!"
          rating={5}
        />
      </Carousel.Item>
    </Carousel>
  );
};

export default MyCarousel;
