import Banner from "./home_components/Banner";
import Utility from "./home_components/Utility";
import Testimonials from "./home_components/Testimonials";
import NewsLetter from "./home_components/NewsLetter";

import classes from "./Home.module.css";

function HomeComponent() {
  return (
    <>
      <div className={classes.main}>
        <header>
          <Banner />
        </header>
        <section>
          <Utility />
          <Testimonials />
        </section>
        <footer>
          <NewsLetter />
        </footer>
      </div>
    </>
  );
}

export default HomeComponent;
