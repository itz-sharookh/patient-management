import classes from "./AppointmentInfo.module.css";

function AppointmentInfo() {
  return (
    <>
      <div className={classes.container}>
        <div className={classes.info_container}>
          <p className={classes.info_text}>Please use this form only if:</p>
          <ul className={classes.info_list}>
            <li className={classes.info_sublist}>
              You have never been a patient at Mass General, OR
            </li>
            <li className={classes.info_sublist}>
              You have been a patient at Mass General but are seeking an
              appointment <br />
              with a new clinical area or doctor
            </li>
          </ul>
          <br />
          <p className={classes.info_summary}>
            After you submit the form, a representative will call you back with
            the information <br /> you’ll need to make an appointment. You may
            also speak with a representative directly <br />
            Monday–Friday, 8:30 am to 5:00 pm EST by calling
            <span className={classes.info_number}>617-726-2000.</span>
            <br /> <br />
            Important note: Some questions on this form may appear or disappear
            <br />
            based on your responses.
          </p>
        </div>

        <div className={classes.signin_container}>
          <h3 className={classes.signin_heading}>Existing Patients </h3>

          <p className={classes.signin_info}>
            Request appointments and communicate with your Patient Gateway.
          </p>
          <button className={classes.signin_button}>
            Patient Sign-in &rarr;
          </button>
        </div>
      </div>
    </>
  );
}

export default AppointmentInfo;
