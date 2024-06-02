import GenericCard from "./dashboard/Card";
import patientLogo from "../extras/svg/patient.svg";
import calendarLogo from "../extras/svg/calendar.svg";
import doctorLogo from "../extras/svg/doctor.svg";
import classes from "./Dashboard.module.css";
import AppointmentDetail from "./dashboard/AppointmentDetails";
import testTwo from "../extras/test-2.jpg";
import ProfileCard from "./dashboard/ProfileCard";
import React, { useEffect } from "react";
import { getAuthToken } from "../util/auth";
import { authActions } from "./store/auth-slice";
import { useDispatch } from "react-redux";

const array = [
  {
    id: 1,
    count: 0,
    metric: "Total Visits",
    src: patientLogo,
    alt: "patient logo",
  },

  {
    id: 2,
    count: 0,
    metric: "Upcoming Visits",
    src: calendarLogo,
    alt: "calendar logo",
  },

  {
    id: 3,
    count: 0,
    metric: "Total Doctors",
    src: doctorLogo,
    alt: "doctor logo",
  },
];

const appointArray = [
  {
    id: 1,
    name: "Dr. John Doe",
    date: "08/09/2023 ",
    time: "12:13:15",
  },
  {
    id: 2,
    name: "Dr. Heisen Berg",
    date: "10/12/2023 ",
    time: "10:01:00",
  },
];
const profileArray = [
  {
    id: 4,
    name: "Shaik Sharookh",
    mail: "sharookhahmed12@gmail.com",
    patientId: "123456789",
    image: testTwo,
    alt: "profile-photo",
  },
];

function Dashboard() {
  const dispatch = useDispatch();

  useEffect(() => {
    const token = getAuthToken();

    setTimeout(() => {
      if (token === null || token === "EXPIRED") {
        dispatch(
          authActions.removeLogin({
            isLoggedIn: false,
          })
        );
      }
    }, 100);
  }, [dispatch]);

  useEffect(() => {
    const token = getAuthToken();
    setTimeout(() => {
      if (token !== null && token !== "EXPIRED" && token !== "") {
        dispatch(
          authActions.addLogin({
            isLoggedIn: true,
            token: token,
          })
        );
      }
    }, 100);
  }, [dispatch]);

  return (
    <>
      <ProfileCard key={profileArray[0].id} props={profileArray[0]} />
      <div className={classes.layout}>
        {array.map((card) => (
          <GenericCard key={card.id} props={card} />
        ))}
      </div>

      <div className={classes.appointment}>
        <div className={classes.appoint__header}>
          <h2 className={classes.appoint__heading}>Latest Appointments</h2>
          <button className={classes.appoint__button}>Book Appointment</button>
        </div>

        <div className={classes.details}>
          {appointArray.map((doc) => (
            <AppointmentDetail key={doc.id} props={doc} />
          ))}
        </div>
      </div>
    </>
  );
}

export default Dashboard;
