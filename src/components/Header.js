import React, { useEffect, useState } from "react";
import { Grid, Button } from "@material-ui/core";
import Logo from "../asset/logo.svg";
import MetaMask from "../asset/meta-mask.png";
import { makeStyles } from "@material-ui/core/styles";

import Web3 from "web3";
import { primaryColor } from "../utils/constants";

const useStyles = makeStyles((theme) => ({
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
    minHeight: "48px",
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
            style={{ height: "100px", width: "200px", cursor: "pointer" }}
            onClick={() => props?.redirectToIntro()}
          ></img>
        </Grid>
        <Grid item>
          <h2 style={{ color: "#fff" }}>Dashboard</h2>
        </Grid>

        <Grid item>
          <Button
            onClick={() => props?.loadWeb3()}
            variant="contained"
            className={classes.button}
            startIcon={<img src={MetaMask} alt="metmask" />}
          >
            {props?.account === null
              ? "Connect Wallet"
              : props?.account?.substring(0, 11) + "..."}
          </Button>
        </Grid>
      </Grid>
    </div>
  );
};

export default Header;
