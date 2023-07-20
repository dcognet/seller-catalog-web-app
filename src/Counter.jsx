import { Button } from "@mui/material";
import { number } from "prop-types";
import useCounter from "./hooks/useCounter";

export default function Counter({ initValue = 0, step = 1 }) {
  const [counter, { increment, decrement }] = useCounter(initValue, step);

  return (
    <>
      <h4>{counter}</h4>
      <Button variant="contained" onClick={decrement}>
        -{step}
      </Button>
      <Button variant="contained" onClick={increment}>
        +{step}
      </Button>
    </>
  );
}

Counter.propTypes = {
  initValue: number,
  step: number,
};
