import { NavLink, redirect } from "react-router-dom";
import classes from "./MainNavigation.module.css";
// import { getAuthToken } from "../util/auth";
import { useSelector } from "react-redux";

function MainNavigation() {
  // const token = getAuthToken();
  const isLogin = useSelector((state) => state.auth.isLoggedIn);
  // console.log("isLogin" + " " + isLogin);
  const logoutHandler = () => {
    localStorage.removeItem("token");
    localStorage.removeItem("expiration");
    redirect("/");
  };

  return (
    <header className={classes.header}>
      <nav>
        <ul className={classes.list}>
          <li>
            <NavLink
              to="/"
              className={({ isActive }) =>
                isActive ? classes.active : undefined
              }
              end
            >
              <h1 className={classes.home}>Home </h1>
            </NavLink>
          </li>

          <li>
            <NavLink
              to="/appointment"
              className={({ isActive }) =>
                isActive ? classes.active : undefined
              }
              end
            >
              Appointments
            </NavLink>
          </li>

          {isLogin && (
            <li>
              <NavLink
                to="/dashboard"
                className={({ isActive }) =>
                  isActive ? classes.active : undefined
                }
                end
              >
                Dashboard
              </NavLink>
            </li>
          )}

          {!isLogin && (
            <li>
              <NavLink
                to="/auth"
                className={({ isActive }) =>
                  isActive ? classes.active : undefined
                }
                end
              >
                <p className={classes.auth}>Login</p>
              </NavLink>
            </li>
          )}

          {isLogin && (
            <li>
              <NavLink
                onClick={logoutHandler}
                className={({ isActive }) =>
                  isActive ? classes.active : undefined
                }
                end
              >
                <p className={classes.auth}>Logout</p>
              </NavLink>
            </li>
          )}
        </ul>
      </nav>
    </header>
  );
}

export default MainNavigation;
