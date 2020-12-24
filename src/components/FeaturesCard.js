import React, { useEffect, useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import Typography from "@material-ui/core/Typography";

import { Grid, Button } from "@material-ui/core";
import { borderColor, textColor, secondaryColor } from "../utils/constants";
import "./Card.css";
import moment from "moment";
import votingpower from "../asset/votingpower_white.svg";
import sellingVotes from "../asset/selling_votes_white.svg";
import yieldsWhite from "../asset/yieldswhite.svg";
import { primaryColor } from "../utils/constants";
export default function SimpleCard(props) {
  const [remaningDays, setRemaningDays] = useState(null);
  const [rewardReady, setRewardReady] = useState(false);
  const [accounts, setAccounts] = useState(null);
  const { accountDetails } = props;
  const classes = useStyles();
  useEffect(() => {
    if (parseInt(accountDetails?.deposit_time) === 0) {
    }
  }, [accountDetails]);

  // useEffect(() => {
  //   if (accountDetails?.deposit_time) {
  //     let abc = setInterval(function () {
  //       counter();
  //       counter2();
  //     }, 1000);
  //     setAccounts(abc);
  //   }

  //   // eslint-disable-next-line
  //   counter2();
  // }, [props]);
  useEffect(() => {
    clearInterval(accounts);
    if (accountDetails?.deposit_time) {
      let abc = setInterval(function () {
        counter();
        counter2();
      }, 1000);
      setAccounts(abc);
    }
    // eslint-disable-next-line
    counter2();
    counter();
    // eslint-disable-next-line
  }, [props?.account, props]);

  const counter = () => {
    accountDetails?.deposit_time &&
      setRemaningDays(`${moment
        .duration(
          moment(
            moment(
              new Date(accountDetails?.deposit_time * 1000).toISOString()
            ).add(7, "days")
          ).diff(moment(new Date().toISOString()))
        )
        .days()}
        : ${moment
          .duration(
            moment(
              moment(
                new Date(accountDetails?.deposit_time * 1000).toISOString()
              ).add(7, "days")
            ).diff(moment(new Date().toISOString()))
          )
          .hours()}
        : ${moment
          .duration(
            moment(
              moment(
                new Date(accountDetails?.deposit_time * 1000).toISOString()
              ).add(7, "days")
            ).diff(moment(new Date().toISOString()))
          )
          .minutes()}
        : ${moment
          .duration(
            moment(
              moment(
                new Date(accountDetails?.deposit_time * 1000).toISOString()
              ).add(7, "days")
            ).diff(moment(new Date().toISOString()))
          )
          .seconds()}`);
  };
  const counter2 = () => {
    accountDetails?.deposit_time &&
      setRewardReady(
        moment(
          moment(
            new Date(accountDetails?.deposit_time * 1000).toISOString()
          ).add(7, "days")
        ).diff(moment(new Date().toISOString())) === 0
          ? true
          : false
      );
  };

  return (
    <Card
      style={{
        width: "100%",
        background: "rgb(255,255,255,0.3)",
        border: `1.5px solid ${borderColor}`,
      }}
    >
      <CardContent>
        <Grid container style={{ display: "flex", justifyContent: "center" }}>
          <Grid xs={11}>
            <Grid
              container
              style={{ display: "flex", justifyContent: "center" }}
            >
              <Grid item xs={12}>
                <Typography className={classes.pos} gutterBottom>
                  zYF Advantages
                </Typography>
              </Grid>
              <Grid item sm={12} md={4} style={{ margin: "0px 0px 20px 0px" }}>
                <Grid
                  xs={12}
                  style={{
                    minHeight: "200px",
                    backgroundImage: `url(${votingpower})`,
                    backgroundRepeat: "no-repeat",
                    backgroundSize: "150% 150%",
                    backgroundPosition: "center",
                  }}
                ></Grid>
                <Grid xs={12}>
                  <Typography className={classes.title}>
                    Accumulate Voting Power{" "}
                  </Typography>
                  <Typography className={classes.subTitle}>
                    Quickly Accumulate Whale voting power.Flash loans for votes.
                  </Typography>
                </Grid>
              </Grid>
              <Grid item sm={12} md={4} style={{ margin: "0px 0px 20px 0px" }}>
                <Grid
                  xs={12}
                  style={{
                    minHeight: "200px",
                    backgroundImage: `url(${sellingVotes})`,
                    backgroundRepeat: "no-repeat",
                    backgroundSize: "60% 60%",
                    backgroundPosition: "center",
                  }}
                >
                  {/* <img
                src={sellingVotes}
                alt="sellingVotes"
                style={{ height: "300px", width: "300px" }}
              /> */}
                </Grid>
                <Grid xs={12}>
                  <Typography className={classes.title}>
                    Sell Your Votes
                  </Typography>
                  <Typography className={classes.subTitle}>
                    Don't care about a particular motion? Sell Your votes and
                    access new income.
                  </Typography>
                </Grid>
              </Grid>
              <Grid item sm={12} md={4}>
                <Grid
                  xs={12}
                  style={{
                    minHeight: "200px",
                    backgroundImage: `url(${yieldsWhite})`,
                    backgroundRepeat: "no-repeat",
                    backgroundSize: "60% 60%",
                    backgroundPosition: "center",
                  }}
                >
                  {/* <img
                src={yieldsWhite}
                alt="yieldsWhite"
                style={{ height: "300px", width: "300px" }}
              /> */}
                </Grid>
                <Grid xs={12}>
                  <Typography className={classes.title}>
                    Increase Stacking Yields
                  </Typography>
                  <Typography className={classes.subTitle}>
                    Increase Yield on governance tokens and access their
                    untapped value.
                  </Typography>
                </Grid>
              </Grid>
              <Grid item xs={12}>
                {" "}
                <Button variant="contained" className={classes.button}>
                  Lite Paper
                </Button>
              </Grid>
            </Grid>
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
  subTitle: {
    fontFamily: "Libre Baskerville",
    fontStyle: "normal",
    fontWeight: "normal",
    fontSize: "16px",
    lineHeight: "20px",
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
  button: {
    // background: primaryColor,
    borderRadius: "10px",
    fontStyle: "normal",
    fontFamily: "Libre Baskerville",
    fontWeight: "bold",
    fontSize: "16px",
    borderRadius: "59px",
    lineHeight: "20px",
    color: "#FFFFFF",
    textTransform: "none",
    maxHeight: "53px",
    minHeight: "30px",
    minWidth: "200px",
    border: "1px solid #FFFFFF",
    backgroundImage: "linear-gradient(to right, #338DDA, #57C8D0)",
    "&:hover": {
      backgroundColor: primaryColor,
    },
    "&:focus": {
      backgroundColor: primaryColor,
    },
  },
});
