import classes from "./Card.module.css";

function GenericCard({ props }) {
  return (
    <div className={classes.card}>
      <div className={classes.logo_container}>
        <p className={classes.count}>{props.count}</p>
        <img src={props.src} alt={props.alt} className={classes.logo} />
      </div>

      <p className={classes.metric}>{props.metric}</p>
    </div>
  );
}

export default GenericCard;
