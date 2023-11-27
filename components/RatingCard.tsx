// components/Card.js
import Image from "next/image";
import { Card as BootstrapCard } from "react-bootstrap";
import styles from "./RatingCard.module.css"; // Import custom styles
import image1 from "../public/images/star.png";
const RatingCard = ({ name, occupation, image, heading, paragraph }) => {
  return (
    <BootstrapCard className="card-body lg:w-50 md:w-50 sm:w-75 ml-auto mr-auto ratings">
      <div className="bg-white p-6 rounded-md shadow-md">
        <div className="card-header bg-gray-200">
          <h5 className="text-xl">{heading}</h5>
          <p>{paragraph}</p>
        </div>

        <div className="float-left">
          <Image src={image} alt={name} width={100} height={100} />
        </div>
        <div className="float-left ml-3">
          <h5 className="text-xl">{name}</h5>
          <p>{occupation}</p>
          <div className={`star-rating flex flex-row gap-1 ${styles.rating}`}>
            <Image src={image1} alt="star" width={15} height={15} />
            <Image src={image1} alt="star" width={15} height={15} />
            <Image src={image1} alt="star" width={15} height={15} />
            <Image src={image1} alt="star" width={15} height={15} />
            <Image src={image1} alt="star" width={15} height={15} />
          </div>
        </div>
      </div>
    </BootstrapCard>
  );
};

export default RatingCard;
