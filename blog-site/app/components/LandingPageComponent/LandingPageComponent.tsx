"use client";
/* Core */
import { useEffect, useState } from "react";

/* Instruments */
import { selectCount, useDispatch, useSelector } from "@/lib/redux";
import Link from "next/link";
import { CircularProgress } from "@material-ui/core";
import Button from "@mui/material/Button";

export const LandingPageComponent = () => {
  const dispatch = useDispatch();
  const count = useSelector(selectCount);
  const [incrementAmount, setIncrementAmount] = useState(2);
  const [timerProp, setTimerProp] = useState("1");

  function timeout(delay: number) {
    return new Promise((res) => setTimeout(res, delay));
  }

  useEffect(() => {
    timeout(2000).then(() => setTimerProp("23"));
  }, []);

  function BodyComponent() {
    if (timerProp === "1") {
      return (
        <div>
          <div>
            <p>Please give the styles a moment to load...</p>
          </div>
          <div style={{ alignContent: "center" }}>
            <CircularProgress></CircularProgress>
          </div>
        </div>
      );
    } else {
      return (
        <div>
          <p>Welcome!</p>
          <Link href="/home">
            <Button>Continue</Button>
          </Link>
        </div>
      );
    }
  }

  const [mystr, setMyStr] = useState("1");

  return (
    <div style={{ marginTop: "80px" }}>
      <BodyComponent></BodyComponent>
    </div>
  );
};
