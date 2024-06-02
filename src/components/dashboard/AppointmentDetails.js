import classes from "./AppointmentDetails.module.css";

function AppointmentDetail({ props }) {
  return (
    <>
      <div className={classes.container}>
        <div className={classes.doc_details}>
          <h2 className={classes.name}>{props.name}</h2>
          <h3 className={classes.date}>Appointment Date : {props.date}</h3>
          <p className={classes.time}>Time: {props.time}</p>
        </div>
        <button className={classes.btn}>Cancel</button>
      </div>
    </>
  );
}

export default AppointmentDetail;
