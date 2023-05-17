import { FaStar, FaStarHalfAlt } from "react-icons/fa";
import { AiOutlineStar } from "react-icons/ai";
import "./Star.css";

const Star = ({ star }) => {
  //console.log(star);
  const ratingStar = Array.from({ length: 5 }, (elem, index) => {
    let number = index + 0.5;
    debugger;
    return (
      <span key={index}>
        {star >= index + 1 ? (
          <FaStar className="icon" />
        ) : star >= number ? (
          <FaStarHalfAlt className="icon" />
        ) : (
          <AiOutlineStar className="icon" />
        )}
      </span>
    );
  });

  return (
    <div>
      <div className="icon-style">
        {ratingStar}
      </div>
    </div>
  );
};

export default Star;