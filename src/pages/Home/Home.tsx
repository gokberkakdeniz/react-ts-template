import { Link } from "react-router-dom";

import classes from "./Home.module.css";

const Home = (): JSX.Element => (
  <div className={classes.root}>
    <Link to="/counter" className={classes.link}>
      counter
    </Link>
  </div>
);

export default Home;
