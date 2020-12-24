import React, { useEffect, useState } from "react";
import { Grid, Button } from "@material-ui/core";
import Logo from "../asset/logo.svg";
import MetaMask from "../asset/meta-mask.png";
import { makeStyles } from "@material-ui/core/styles";
import ChatIcon from "@material-ui/icons/Chat";
import TelegramIcon from "@material-ui/icons/Telegram";
import TwitterIcon from "@material-ui/icons/Twitter";

import Web3 from "web3";
import { primaryColor } from "../utils/constants";

const useStyles = makeStyles((theme) => ({
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
  const [account, setAccount] = useState(null);
  useEffect(() => {
    // loadWeb3();
    // loadBlockchainData();
  }, []);
  // eslint-disable-next-line
  const loadBlockchainData = async () => {
    const web3 = window.web3;

    const accounts = await web3.eth.getAccounts();
    setAccount(account && accounts[0]);
    // eslint-disable-next-line
    const networkId = await web3.eth.net.getId();
  };
  // eslint-disable-next-line
  const loadWeb3 = async () => {};
  // eslint-disable-next-line
  const connectWithMetaMask = async () => {
    if (window.ethereum) {
      window.web3 = new Web3(window.ethereum);
      await window.ethereum.enable();
      const web3 = window.web3;

      const accounts = await web3.eth.getAccounts();
      console.log("account", accounts);
      setAccount(accounts[0]);

      const networkId = await web3.eth.net.getId();
      console.log("networkId", networkId);
      web3.eth.getBalance(accounts[0], (err, balance) => {});
    } else if (window.web3) {
      window.web3 = new Web3(window.web3.currentProvider);
      const web3 = window.web3;

      const accounts = await web3.eth.getAccounts();
      setAccount(accounts[0]);
      web3.eth.getBalance(accounts[0], (err, balance) => {
        console.log("balance:", balance);
        console.log(err);
      });
      const networkId = await web3.eth.net.getId();
      console.log("networkId", networkId);
    } else {
      window.alert(
        "Non-Ethereum browser detected. You should consider trying MetaMask!"
      );
    }
  };
  // stakeTokens = (amount) => {
  //   this.setState({ loading: true });
  //   this.state.daiToken.methods
  //     .approve(this.state.tokenFarm._address, amount)
  //     .send({ from: this.state.account })
  //     .on("transactionHash", (hash) => {
  //       this.state.tokenFarm.methods
  //         .stakeTokens(amount)
  //         .send({ from: this.state.account })
  //         .on("transactionHash", (hash) => {
  //           this.setState({ loading: false });
  //         });
  //     });
  // };

  // unstakeTokens = (amount) => {
  //   this.setState({ loading: true });
  //   this.state.tokenFarm.methods
  //     .unstakeTokens()
  //     .send({ from: this.state.account })
  //     .on("transactionHash", (hash) => {
  //       this.setState({ loading: false });
  //     });
  // };
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
            style={{ display: "flex", justifyContent: "space-between" }}
          >
            <Grid item xs={12} md={1}>
              <TelegramIcon style={{ color: "#ffff", fontSize: "28px" }} />
            </Grid>

            <Grid item xs={12} md={1}>
              <ChatIcon style={{ color: "#ffff", fontSize: "28px" }} />
            </Grid>
            <Grid item xs={12} md={1}>
              <TwitterIcon style={{ color: "#ffff", fontSize: "28px" }} />
            </Grid>
          </Grid>
        </Grid>

        <Grid item>
          <Button
            onClick={() => props?.loadWeb3()}
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
