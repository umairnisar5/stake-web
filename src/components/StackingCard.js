import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
import { Grid } from "@material-ui/core";
import Logo from "../asset/tile2.png";
import {
  primaryColor,
  secondaryColor,
  borderColor,
  textColor,
} from "../utils/constants";

const useStyles = makeStyles({
  root: {
    minWidth: 280,
    maxWidth: 370,
    background: secondaryColor,
    borderRadius: "10px",
    border: `1.5px solid ${borderColor}`,
  },
  bullet: {
    display: "inline-block",
    margin: "0 2px",
    transform: "scale(0.8)",
  },
  title: {
    fontFamily: " Arial, Helvetica, sans-serif",
    fontStyle: "normal",
    fontWeight: "normal",
    fontSize: "18px",
    lineHeight: "22px",
    color: "#FFFFFF",
  },
  pos: {
    fontFamily: " Arial, Helvetica, sans-serif",
    fontStyle: "normal",
    fontWeight: "bold",
    fontSize: "24px",
    lineHeight: "30px",
    color: "#FFFFFF",
    marginBottom: 12,
  },
  button: {
    background: primaryColor,
    borderRadius: "10px",
    fontStyle: "normal",
    fontFamily: " Arial, Helvetica, sans-serif",
    fontWeight: "bold",
    fontSize: "16px",
    lineHeight: "20px",
    color: "#FFFFFF",
    textTransform: "none",
    maxHeight: "53px",
    minHeight: "50px",
    minWidth: "105px",
    "&:hover": {
      backgroundColor: primaryColor,
    },
    "&:focus": {
      backgroundColor: primaryColor,
    },
  },
});

export default function SimpleCard(props) {
  const classes = useStyles();

  return (
    <Card className={classes.root}>
      <CardContent>
        <Grid
          container
          style={{
            margin: "10px 0px 5px 0px",
            display: "flex",
            justifyContent: "center",
          }}
        >
          <Grid item>
            <Typography className={classes.pos} gutterBottom>
              <img
                alt="not found"
                src={Logo}
                style={{ width: "60px", height: "60px", borderRadius: "50%" }}
              ></img>
            </Typography>
          </Grid>
        </Grid>
        <Grid container>
          <Grid item xs={12} style={{ margin: "0px 0px" }}>
            <Typography className={classes.pos} style={{ color: textColor }}>
              {props?.mainAccountStake
                ? props?.mainAccountStake?.toString() === "0.000"
                  ? 0
                  : props?.mainAccountStake
                : 0}
              {/* user stake which was 0 */}
            </Typography>
          </Grid>
        </Grid>
        <Grid container style={{ margin: "0px 0px 10px 0px" }}>
          <Grid item xs={12}>
            <Typography className={classes.title}>Staked ETH</Typography>
          </Grid>
        </Grid>
        <Grid container>
          <Grid item xs={6}>
            <Button
              variant="contained"
              className={classes.button}
              onClick={props.stake}
            >
              Stake
            </Button>
          </Grid>
          <Grid item xs={6}>
            <Button
              variant="contained"
              className={classes.button}
              onClick={props?.unStake}
            >
              UnStake
            </Button>
          </Grid>
        </Grid>
      </CardContent>
    </Card>
  );
}
