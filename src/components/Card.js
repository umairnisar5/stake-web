import React, { useEffect, useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import Typography from "@material-ui/core/Typography";

import { Grid } from "@material-ui/core";
import { borderColor, textColor, secondaryColor } from "../utils/constants";
import "./Card.css";
import moment from "moment";
export default function SimpleCard(props) {
  let date = new Date().toISOString();
  const [remaningDays, setRemaningDays] = useState(null);
  const { accountDetails } = props;
  const classes = useStyles();
  useEffect(() => {
    console.log(accountDetails?.deposit_time);
    if (parseInt(accountDetails?.deposit_time) === 0) {
    }
  }, [accountDetails]);
  useEffect(() => {
    setInterval(function () {
      counter();
    }, 1000);
  }, []);
  var b = moment(moment(new Date("2020-12-17T18:07:41.827Z")).add(7, "days"))
    .toDate;
  var a = moment(new Date().toISOString());
  console.log(new Date().toISOString());
  const counter = () => {
    setRemaningDays(`${moment
      .duration(
        moment(
          moment(new Date("2020-12-17T18:07:41.827Z")).add(7, "days")
        ).diff(moment(new Date().toISOString()))
      )
      .days()}
        :${moment
          .duration(
            moment(
              moment(new Date("2020-12-17T18:07:41.827Z")).add(7, "days")
            ).diff(moment(new Date().toISOString()))
          )
          .hours()}
        :${moment
          .duration(
            moment(
              moment(new Date("2020-12-17T18:07:41.827Z")).add(7, "days")
            ).diff(moment(new Date().toISOString()))
          )
          .minutes()}
        :${moment
          .duration(
            moment(
              moment(new Date("2020-12-17T18:07:41.827Z")).add(7, "days")
            ).diff(moment(new Date().toISOString()))
          )
          .seconds()}`);
  };

  return (
    <Card
      className="ro"
      style={{
        background: secondaryColor,
        border: `1.5px solid ${borderColor}`,
      }}
    >
      <CardContent>
        <Grid container>
          <Grid item xs={12}>
            <Typography className={classes.pos} gutterBottom>
              Statistics
            </Typography>
          </Grid>
          <Grid item xs={12} style={{ margin: "20px 0px" }}>
            <Typography className={classes.title}>
              TVL: <span style={{ color: textColor }}>$10,000</span>
            </Typography>
          </Grid>
          <Grid item xs={12}>
            <Typography className={classes.title}>
              {
                <>
                  <span style={{ color: textColor }}></span>
                  {/* {counter()} days left */}
                  {props?.showTimer && remaningDays}
                </>
              }
            </Typography>
          </Grid>
        </Grid>
      </CardContent>
    </Card>
  );
}

const useStyles = makeStyles({
  bullet: {
    display: "inline-block",
    margin: "0 2px",
    transform: "scale(0.8)",
  },
  title: {
    fontFamily: "Libre Baskerville",
    fontStyle: "normal",
    fontWeight: "normal",
    fontSize: "18px",
    lineHeight: "22px",
    color: "#FFFFFF",
  },
  pos: {
    fontFamily: "Libre Baskerville",
    fontStyle: "normal",
    fontSize: "24px",
    lineHeight: "30px",
    color: "#FFFFFF",
    marginBottom: 12,
  },
});
