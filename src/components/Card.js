import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";

import { Grid } from "@material-ui/core";
import { borderColor, textColor, secondaryColor } from "../utils/constants";
import "./Card.css";
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

export default function SimpleCard() {
  const classes = useStyles();
  const bull = <span className={classes.bullet}>•</span>;

  return (
    <Card
      className="ro"
      id="roots"
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
              APR: <span style={{ color: textColor }}>10,049.79%</span>
            </Typography>
          </Grid>
        </Grid>
      </CardContent>
    </Card>
  );
}
