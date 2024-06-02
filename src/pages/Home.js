import HomeComponent from "../components/Home";
import { useDispatch } from "react-redux";
import React, { useEffect } from "react";
import { getAuthToken } from "../util/auth";
import { authActions } from "../components/store/auth-slice";

function HomePage() {
  const dispatch = useDispatch();

  useEffect(() => {
    const token = getAuthToken();
    if (token === null || token === "EXPIRED") {
      dispatch(
        authActions.removeLogin({
          isLoggedIn: false,
        })
      );
    }
  }, [dispatch]);

  return (
    <>
      <HomeComponent />
    </>
  );
}

export default HomePage;
