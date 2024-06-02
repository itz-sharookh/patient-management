import {
  Form,
  Link,
  useActionData,
  useNavigation,
  useSearchParams,
} from "react-router-dom";

import classes from "./AuthForm.module.css";

function AuthForm() {
  const data = useActionData();
  const navigation = useNavigation();

  const [searchParams] = useSearchParams();
  const isLogin = searchParams.get("mode") === "login";
  const isSubmitting = navigation.state === "submitting";

  return (
    <>
      <Form method="post" className={classes.form}>
        <h1>
          {isLogin ? (
            <p className={classes.main_heading}>Login</p>
          ) : (
            <p className={classes.main_heading}>Register</p>
          )}
        </h1>
        {data && data.errors && (
          <ul>
            {Object.values(data.errors).map((err) => (
              <li key={err}>{err}</li>
            ))}
          </ul>
        )}

        {data && data.message && <p>{data.message}</p>}
        <p>
          <label htmlFor="email">Email</label>
          <input id="email" type="email" name="email" required />
        </p>
        <p>
          <label htmlFor="password">Password</label>
          <input id="password" type="password" name="password" required />
        </p>

        {!isLogin && (
          <div>
            <p>
              <label htmlFor="name">Name</label>
              <input id="name" type="text" name="text" required />
            </p>
            <p>
              <label htmlFor="date">Date Of Birth</label>
              <input id="date" type="date" name="date" required />
            </p>
          </div>
        )}

        <div className={classes.actions}>
          {!isLogin ? (
            <p className={classes.info}> Existing User</p>
          ) : (
            <p className={classes.info}> New User</p>
          )}
          <Link to={`?mode=${isLogin ? "signup" : "login"}`}>
            {isLogin ? (
              <h1 className={classes.heading}>Register</h1>
            ) : (
              <h1 className={classes.heading}>Login</h1>
            )}
          </Link>

          <button disabled={isSubmitting} className={classes.btn}>
            {isSubmitting ? "Submitting..." : "Save"}
          </button>
        </div>
      </Form>
    </>
  );
}

export default AuthForm;
