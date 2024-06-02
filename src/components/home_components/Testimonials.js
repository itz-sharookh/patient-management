import classes from "./Testimonials.module.css";
import docOne from "../../extras/doc-1.PNG";
import docTwo from "../../extras/doc-2.PNG";
import docThree from "../../extras/doc-3.PNG";
import TestimonialCard from "../UI/TestimonialCard";

function Testimonials() {
  return (
    <>
      <div className={classes.testimonials}>
        <p className={classes.basic_heading}>Testimonials</p>
        <h2 className={classes.bold_heading}> What our Clientele says</h2>
        <TestimonialCard />
      </div>

      <div className={classes.teams}>
        <p className={classes.basic_heading}>Our Team</p>
        <h2 className={classes.bold_heading}>Our Specialized Doctor</h2>
        <ul className={classes.teams_doctors}>
          <li className={classes.teams_doctors__list}>
            <img
              src={docOne}
              alt="doctor"
              className={classes.teams_doctors__image}
            />
            <h2 className={classes.teams_doctors__heading}> Guy Hawkins </h2>
            <h4 className={classes.teams_doctors__role}>Gastroentrologist</h4>
            <button className={classes.teams_doctors__button}>Book Now</button>
          </li>

          <li className={classes.teams_doctors__list}>
            <img
              src={docTwo}
              alt="doctor"
              className={classes.teams_doctors__image}
            />
            <h2 className={classes.teams_doctors__heading}>Albert Flores</h2>
            <h4 className={classes.teams_doctors__role}>Pulmonologist</h4>
            <button className={classes.teams_doctors__button}>Book Now</button>
          </li>
          <li className={classes.teams_doctors__list}>
            <img
              src={docThree}
              alt="doctor"
              className={classes.teams_doctors__image}
            />
            <h2 className={classes.teams_doctors__heading}>Floyd Miles</h2>
            <h4 className={classes.teams_doctors__role}>Emergency Medicine</h4>
            <button className={classes.teams_doctors__button}>Book Now</button>
          </li>
        </ul>
      </div>
    </>
  );
}

export default Testimonials;
