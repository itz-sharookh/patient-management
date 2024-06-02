import classes from "./NewsLetter.module.css";
import { Form } from "react-router-dom";

function NewsLetter() {
  return (
    <>
      <div className={classes.news_letter}>
        <p className={classes.basic_heading}>NewsLetter</p>
        <h2 className={classes.bold_heading}>Get Our Latest News</h2>
        <div className={classes.news_letter__image}>
          <Form method="post" action="#">
            <input
              type="text"
              className={classes.news_letter__form__field}
              placeholder="First Name"
            />

            <input
              type="text"
              className={classes.news_letter__form__field}
              placeholder="Last Name"
            />
            <input
              type="email"
              className={classes.news_letter__form__field}
              placeholder="Personal Email"
            />
            <button
              type="submit"
              className={classes.news_letter__image__button}
            >
              GET
            </button>
          </Form>
        </div>
      </div>
    </>
  );
}

export default NewsLetter;
