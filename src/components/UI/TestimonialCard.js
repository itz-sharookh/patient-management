import classes from "./TestimonialCard.module.css";
import testOne from "../../extras/test-1.jpg";
import testTwo from "../../extras/test-2.jpg";
import testThree from "../../extras/test-3.jpg";
import { useState } from "react";
const array = [
  {
    id: 1,
    imageUrl: testOne,
    name: "Rodriguez Milo",
    place: " Purto Lobos, Mexico",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Deleniti nisi asperiores architecto nesciunt.Maiores officiis quisquam ab nobis",
  },
  {
    id: 2,
    imageUrl: testTwo,
    name: "Francias Sanchez",
    place: "Texas, U.S",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Deleniti nisi asperiores architecto nesciunt.Maiores officiis quisquam ab nobis.",
  },
  {
    id: 3,
    imageUrl: testThree,
    name: "Heisenberg",
    place: "Texas, U.S",
    description:
      " Lorem ipsum dolor sit amet consectetur adipisicing elit. Deleniti nisi asperiores architecto nesciunt.Maiores officiis quisquam ab nobis.",
  },
];

function Card() {
  const [counter, setCounter] = useState(0);
  const [incIsDisabled, setIncDisabled] = useState(false);
  const [decIsDisabled, setdecIsDisabled] = useState(true);

  const incHandler = () => {
    if (counter < 3) {
      setCounter(counter + 1);
      setdecIsDisabled(false);
      setIncDisabled(false);
    }

    if (counter === 1) {
      setIncDisabled(true);
    }
  };

  const decHandler = () => {
    if (counter > 0) {
      setCounter(counter - 1);
      setIncDisabled(false);
    }

    if (counter === 0) {
      setdecIsDisabled(true);
    }
  };
  return (
    <>
      <div className={classes.wrapping_card}>
        <button
          onClick={() => decHandler()}
          className={classes.btn}
          disabled={decIsDisabled}
        >
          &#x2190;
        </button>

        <div key={array[counter].id} className={classes.card}>
          <img
            src={array[counter].imageUrl}
            alt="testimonial"
            className={classes.testimonials__image}
          />
          <h3 className={classes.testimonial_heading}>{array[counter].name}</h3>
          <h4 className={classes.testimonial_native}>{array[counter].place}</h4>
          <p className={classes.testimonial_text}>
            {array[counter].description}
          </p>
        </div>
        {console.log(counter)}

        <button
          onClick={() => incHandler()}
          className={classes.btn}
          disabled={incIsDisabled}
        >
          &rarr;
        </button>
      </div>
    </>
  );
}

export default Card;
