import React from "react";
import { Grid, Button, Typography } from "@material-ui/core";
import ZinIcon from "../asset/zin-icon.png";
import LinkOutline from "../asset/link-outline.png";

import { makeStyles } from "@material-ui/core/styles";
const useStyles = makeStyles((theme) => ({
  verifyButton: {
    background: "#109E92",
    border: "1px solid #FFFFFF",
    boxSizing: "border-box",
    borderRadius: "10px",
    fontStyle: "normal",
    fontFamily: " Arial, Helvetica, sans-serif",
    fontWeight: "bold",
    fontSize: "14px",
    lineHeight: "24px",
    color: "#FFFFFF",
    textTransform: "none",
    maxHeight: "53px",
    minWidth: "283px",
    minHeight: "54px",
    "&:hover": {
      backgroundColor: "#109E92",
    },
    "&:focus": {
      backgroundColor: "#109E92",
    },
  },

  button: {
    background: "#1C3B53",
    borderRadius: "10px",
    fontStyle: "normal",
    fontFamily: " Arial, Helvetica, sans-serif",
    fontWeight: "bold",
    fontSize: "16px",
    lineHeight: "20px",
    color: "#FFFFFF",
    textTransform: "none",
    maxHeight: "53px",
    minWidth: "283px",
    minHeight: "54px",
    "&:hover": {
      backgroundColor: "#1C3B53",
    },
    "&:focus": {
      backgroundColor: "#1C3B53",
    },
  },
  headerBorderWeb: {
    minHeight: "115px",
    alignItems: "center",
    justifyContent: "space-around",
  },
  headerBorderMob: {
    minHeight: "115px",
    alignItems: "center",
    justifyContent: "space-around",
  },
  title: {
    fontFamily: " Arial, Helvetica, sans-serif",
    fontStyle: "normal",
    fontWeight: "bold",
    fontSize: "34px",
    lineHeight: "42px",
    color: "#1C3B53",
  },
  body: {
    fontFamily: " Arial, Helvetica, sans-serif",
    fontStyle: "normal",
    fontWeight: "normal",
    fontSize: "16px",
    lineHeight: "25px",
    color: "#1C3B53",
  },
}));

const Introduction = () => {
  const classes = useStyles();
  return (
    <div>
      <Grid container className={classes.headerBorderWeb}>
        <Grid item xs={6} justify="center">
          <Grid container style={{ display: "flex", justifyContent: "center" }}>
            <Typography className={classes.title}>Zin Staking</Typography>
          </Grid>
          <Grid container style={{ display: "flex", justifyContent: "center" }}>
            <Typography className={classes.body}>
              Manage your current holdings and stake to earn more Zin
            </Typography>
          </Grid>

          <Grid container style={{ display: "flex", justifyContent: "center" }}>
            <Button
              variant="contained"
              className={classes.button}
              startIcon={<img src={ZinIcon} alt=" icon" />}
            >
              1 Zin = $0.028
            </Button>
          </Grid>
        </Grid>
        <Grid item xs={6} style={{ display: "flex", justifyContent: "center" }}>
          <Button
            variant="contained"
            className={classes.verifyButton}
            startIcon={<img src={LinkOutline} alt=" stake" />}
          >
            Verified Zin Contract
          </Button>
        </Grid>
      </Grid>
    </div>
  );
};

export default Introduction;
