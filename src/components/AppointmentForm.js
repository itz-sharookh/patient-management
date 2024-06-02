import classes from "./AppointmentForm.module.css";
import NewForm from "../components/appointment components/Form";
import facecbook from "../extras/svg/facebook.svg";
import instaLogo from "../extras/svg/instagram.svg";
import twitterLogo from "../extras/svg/twitter.svg";
import whatsappLogo from "../extras/svg/whatsapp.svg";
import AppointmentInfo from "../components/appointment components/AppointmentInfo";
import NewsLetter from "./home_components/NewsLetter";

function AppointmentForm() {
  return (
    <>
      <div className={classes.heading_container}>
        <h2 className={classes.main_heading}>Request an Appointment</h2>
        <div className={classes.logo_contianer}>
          <img className={classes.logo} src={facecbook} alt="facebook Logo" />
          <img className={classes.logo} src={instaLogo} alt="instagram Logo" />
          <img className={classes.logo} src={twitterLogo} alt="twitter Logo" />
          <img
            className={classes.logo}
            src={whatsappLogo}
            alt="whatsapp Logo"
          />
        </div>
      </div>
      <AppointmentInfo />
      <NewForm />
      <NewsLetter />  
    </>
  );
}

export default AppointmentForm;

// export async function action({ request, params }) {
//   const method = request.method;
//   const data = await request.formData();
// }
