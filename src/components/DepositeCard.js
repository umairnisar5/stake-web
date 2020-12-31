import React, { useEffect } from "react";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
import { Grid } from "@material-ui/core";
import Logo from "../asset/tile1.png";

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
    minWidth: "210px",
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
  // eslint-disable-next-line
  const [reward, setReward] = React.useState(props?.rewards);
  useEffect(() => {
    setReward(props?.rewards);
    // eslint-disable-next-line
  }, [props?.rewards]);
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
            <Typography className={classes.title} gutterBottom>
              <img
                alt="logo"
                src={Logo}
                style={{ width: "60px", height: "60px", borderRadius: "50%" }}
              ></img>
            </Typography>
          </Grid>
        </Grid>
        <Grid container>
          <Grid item xs={12} style={{ margin: "0px 0px" }}>
            <Typography className={classes.pos} style={{ color: textColor }}>
              {reward ? (reward?.toString() === "0.000" ? 0 : reward) : 0}
            </Typography>
          </Grid>
        </Grid>
        <Grid container style={{ margin: "0px 0px 10px 0px" }}>
          <Grid item xs={12}>
            <Typography className={classes.title}>Earned zYF</Typography>
          </Grid>
        </Grid>

        <Grid
          container
          style={{
            display: "flex",
            justifyContent: "center",
          }}
        >
          <Grid item xs={12}>
            <Button
              variant="contained"
              className={classes.button}
              onClick={props?.withdraw}
            >
              Harvest
            </Button>
          </Grid>
        </Grid>
      </CardContent>
    </Card>
  );
}
