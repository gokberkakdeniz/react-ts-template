import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { decrease, increase } from "../../store/counter";

import classes from "./Counter.module.css";

const Counter = (): JSX.Element => {
  const counter = useSelector((state) => state.counter);
  const dispatch = useDispatch();

  return (
    <div className={classes.root}>
      <div>
        <button
          type="button"
          onClick={() => dispatch(decrease())}
          className={classes.button}
        >
          decrease
        </button>
        <span className={classes.counter}>{counter}</span>
        <button
          type="button"
          onClick={() => dispatch(increase())}
          className={classes.button}
        >
          increase
        </button>
      </div>
      <div>
        <Link to="/" className={classes.link}>
          home
        </Link>
      </div>
    </div>
  );
};

export default Counter;
