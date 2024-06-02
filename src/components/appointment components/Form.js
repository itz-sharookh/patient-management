import classes from "./Form.module.css";

import { useActionData, useNavigation, Form } from "react-router-dom";

function NewForm({ method, event }) {
  const data = useActionData();
  // const navigate = useNavigate();
  const navigation = useNavigation();
  // let format = "text";
  const isSubmitting = navigation.state === "submitting";

  // function cancelHandler() {
  //   navigate("..");
  // }
  return (
    <>
      <div className={classes.form_table}>
        <h2 className={classes.form_heading}>Patient Information</h2>
        <Form method={method} className={classes.form}>
          {data && data.errors && (
            <ul>
              {Object.values(data.errors).map((err) => (
                <li key={err}>{err}</li>
              ))}
            </ul>
          )}

          <p>
            <input
              id="firstname"
              type="text"
              name="firstname"
              required
              placeholder="First Name"
              defaultValue={event ? event.name : ""}
            />
          </p>

          <p>
            <input
              id="lastname"
              type="text"
              name="lastname"
              required
              placeholder="Last Name"
              defaultValue={event ? event.name : ""}
            />
          </p>
          <p>
            <input
              id="Address1"
              type="text"
              name="Address 1 "
              required
              placeholder="Address 1"
              defaultValue={event ? event.name : ""}
            />
          </p>
          <p>
            <input
              id="Address2"
              type="text"
              name="Address 2"
              required
              placeholder="Address 2"
              defaultValue={event ? event.name : ""}
            />
          </p>

          <p>
            <input
              id="city"
              type="text"
              name="city"
              required
              placeholder="City"
              defaultValue={event ? event.name : ""}
            />
          </p>

          <p>
            <input
              id="date"
              type="date"
              name="Date Of Birth"
              placeholder="DD-MM-YYYY"
              defaultValue={event ? event.date : ""}
            />
          </p>
          <p>
            <input
              id="phone"
              type="text"
              name="phone"
              required
              placeholder="Mobile number"
              defaultValue={event ? event.name : ""}
            />
          </p>
          <p>
            <input
              id="Email"
              type="email"
              name="email"
              required
              placeholder="Email"
              defaultValue={event ? event.description : ""}
            />
          </p>

          <button disabled={isSubmitting}>
            {isSubmitting ? "Submitting..." : "Save"}
          </button>
          {/* <button onClick={cancelHandler}>Cancel</button> */}
        </Form>
      </div>
    </>
  );
}

export default NewForm;
