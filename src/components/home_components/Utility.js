import classes from "./Utility.module.css";
import doctorOne from "../../extras/svg/doctor.svg";
import calendar from "../../extras/svg/calendar.svg";
import emailIcon from "../../extras/svg/mail.svg";
import doctorGroup from "../../extras/doctor-group.PNG";
import doctorIcon from "../../extras/doctor-icon-2.png";
import clockIcon from "../../extras/clock-icon.png";
import dollarIcon from "../../extras/dollar-icon.png";

function Utility() {
  return (
    <>
      <div className={classes.utility}>
        <div className={classes.basic_heading}>How we Work</div>
        <div className={classes.bold_heading}>
          Quick solutions <br />
          for best treatment
        </div>
        <ul className={classes.utility_features}>
          <li className={classes.utility_features__list}>
            <img
              src={doctorOne}
              alt="doctor-one"
              className={classes.utility_features__image}
            />
            <h2 className={classes.utility_features__heading}>
              Find Best Doctor
            </h2>
            <p className={classes.utility_features_text}>
              We always provide the best doctor for you
            </p>
            <p className={classes.utility_features__icon}>&#8599;</p>
          </li>
          <li className={classes.utility_features__list}>
            <img
              src={calendar}
              alt="appointment"
              className={classes.utility_features__image}
            />
            <h2 className={classes.utility_features__heading}>
              Make an appointment
            </h2>
            <p className={classes.utility_features_text}>
              Schedule your time with your doctor
            </p>
            <p className={classes.utility_features__icon}>&#8599;</p>
          </li>
          <li className={classes.utility_features__list}>
            <img
              src={emailIcon}
              alt="doctor-one"
              className={classes.utility_features__image}
            />
            <h2 className={classes.utility_features__heading}>
              Take prescription
            </h2>
            <p className={classes.utility_features_text}>
              Take your prescription which your doctor gave
            </p>
            <p className={classes.utility_features__icon}>&#8599;</p>
          </li>
        </ul>
      </div>
      {/* <!-- ADVERTISEMENT SECTION--> */}
      <div className={classes.advert}>
        <p className={classes.basic_heading}>Why Choose Us</p>
        <h2 className={classes.bold_heading}>
          Consultation with our <br />
          experienced doctors
        </h2>
        <img
          src={doctorGroup}
          alt="doctor-group"
          className={classes.advert_features__backimage}
        />
        <ul className={classes.advert_features}>
          <li className={classes.advert_features__list}>
            <img
              src={doctorIcon}
              alt="doctor icon"
              className={classes.advert_features__image}
            />

            <h2 className={classes.advert_features__heading}>
              Specialized Doctor
            </h2>
            <p className={classes.advert_features_text}>
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry
            </p>
          </li>
          <li className={classes.advert_features__list}>
            <img
              src={clockIcon}
              alt="clock icon"
              className={classes.advert_features__image}
            />
            <h2 className={classes.advert_features__heading}>
              24/7 Emergency Service
            </h2>
            <p className={classes.advert_features_text}>
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry
            </p>
          </li>
          <li className={classes.advert_features__list}>
            <img
              src={dollarIcon}
              alt="dollar icon"
              className={classes.advert_features__image}
            />
            <h2 className={classes.advert_features__heading}>Affordable</h2>
            <p className={classes.advert_features_text}>
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry
            </p>
          </li>
        </ul>
      </div>
    </>
  );
}

export default Utility;
