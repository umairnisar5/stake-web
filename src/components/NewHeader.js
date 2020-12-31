import React, { useEffect, useState } from "react";
import { Grid, Button } from "@material-ui/core";
import Logo from "../asset/logo.svg";
import MetaMask from "../asset/meta-mask.png";
import { makeStyles } from "@material-ui/core/styles";
import ChatIcon from "@material-ui/icons/Chat";
import TelegramIcon from "@material-ui/icons/Telegram";
import TwitterIcon from "@material-ui/icons/Twitter";
import Msg from "../asset/discord.png";

import Web3 from "web3";
import { primaryColor } from "../utils/constants";

const useStyles = makeStyles((theme) => ({
  button: {
    // background: primaryColor,
    borderRadius: "10px",
    fontStyle: "normal",
    fontFamily: " Arial, Helvetica, sans-serif",
    fontWeight: "bold",
    fontSize: "16px",
    borderRadius: "59px",
    lineHeight: "20px",
    color: "#FFFFFF",
    textTransform: "none",
    maxHeight: "53px",
    minHeight: "30px",
    border: "1px solid #FFFFFF",
    backgroundImage: "linear-gradient(to right, #338DDA, #57C8D0)",
    "&:hover": {
      backgroundColor: primaryColor,
    },
    "&:focus": {
      backgroundColor: primaryColor,
    },
  },
  headerBorderWeb: {
    // borderBottom: "1px solid #EFF2FB",
    minHeight: "115px",
    alignItems: "center",
    justifyContent: "space-around",
  },
  headerBorderMob: {
    borderBottom: "1px solid #EFF2FB",
    minHeight: "115px",
    alignItems: "center",
    justifyContent: "space-around",
  },
}));

const Header = (props) => {
  const classes = useStyles();
  return (
    <div>
      <Grid container className={classes.headerBorderWeb}>
        <Grid item style={{ display: "flex", alignItems: "center" }}>
          <img
            alt="logo"
            src={Logo}
            style={{ height: "100px", width: "200px" }}
          ></img>
        </Grid>
        <Grid item>
          <Grid
            container
            spacing={2}
            style={{ display: "flex", justifyContent: "space-between" }}
          >
            <Grid item xs={4} md={1}>
              <a href="https://www.telegram.com" target="_blank">
                <TelegramIcon style={{ color: "#ffff", fontSize: "28px" }} />
              </a>
            </Grid>

            <Grid item xs={4} md={1}>
              <a href="https://www.facebook.com" target="_blank">
                {/* <ChatIcon style={{ color: "#ffff", fontSize: "28px" }} /> */}
                <img src={Msg} style={{ height: "28px", width: "28px" }} />
              </a>
            </Grid>
            <Grid item xs={4} md={1}>
              <a href="https://www.twitter.com" target="_blank">
                <TwitterIcon style={{ color: "#ffff", fontSize: "28px" }} />
              </a>
            </Grid>
          </Grid>
        </Grid>

        <Grid item>
          <Button
            onClick={() => props?.redirectToHome()}
            variant="contained"
            className={classes.button}
          >
            Staking Dashboard
          </Button>
        </Grid>
      </Grid>
    </div>
  );
};

export default Header;
