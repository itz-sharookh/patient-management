import classes from "./ProfileCard.module.css";

function ProfileCard({ props }) {
  return (
    <>
      <div className={classes.profile}>
        <img
          src={props.image}
          alt={props.alt}
          className={classes.profile__image}
        />
        <h1 className={classes.profile__name}>{props.name}</h1>
        <h2 className={classes.profile__mail}>{props.mail}</h2>
        <h2 className={classes.profile__id}>
          <span className={classes.profile__span}> Patient Id: </span>
          {props.patientId}
        </h2>
      </div>
    </>
  );
}

export default ProfileCard;
