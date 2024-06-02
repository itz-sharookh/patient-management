import classes from "./Banner.module.css";
import doctorOne from "../../extras/doctor-one.png";

function Banner() {
  return (
    <>
      <div className={classes.header_body}>
        <div className={classes.header_body__text}>
          <p className={classes.header_body__one}>
            Welcome to Trinity Hospitals
          </p>
          <h1 className={classes.header_body__heading}>
            Nothing is more important than your body
          </h1>
          <p className={classes.header_body__two}>
            We will give you proper medical services within a reasonable cost
            via specialist doctor. Every Patient will be given individual
            priority that the patient deserves. <br />
            <br />
            We Will Follow the professional practices which are atmost important
            While performing a surgery success.
          </p>
          <button className={classes.header_button}>
            Search by Doctor or Diseases
            <p className={classes.header_button__icon}>&#8599;</p>
          </button>
        </div>
        <div className={classes.header_body__decoration}>
          <img
            src={doctorOne}
            alt="doctor-one"
            className={classes.header_body__image}
          />
          <div className={classes.header_body__clip}></div>
        </div>
      </div>
    </>
  );
}

export default Banner;
