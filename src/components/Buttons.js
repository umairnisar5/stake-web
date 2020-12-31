import React, { useEffect } from "react";
import { Grid, Button } from "@material-ui/core";
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
    minWidth: "150px",
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

const Header = () => {
  const classes = useStyles();

  useEffect(() => {
    // loadWeb3();
    // loadBlockchainData();
  }, []);
  // eslint-disable-next-line
  const loadBlockchainData = async () => {
    const web3 = window.web3;

    const accounts = await web3.eth.getAccounts();
    console.log("account", accounts);

    const networkId = await web3.eth.net.getId();
    console.log("networkId", networkId);
  };
  // eslint-disable-next-line
  const loadWeb3 = async () => {};
  const connectWithMetaMask = async () => {
    if (window.ethereum) {
      window.web3 = new Web3(window.ethereum);
      await window.ethereum.enable();
      const web3 = window.web3;

      const accounts = await web3.eth.getAccounts();
      console.log("account", accounts);

      const networkId = await web3.eth.net.getId();
      console.log("networkId", networkId);
      web3.eth.getBalance(accounts[0], (err, balance) => {
        console.log("balance:", balance);
        console.log(err);
      });
    } else if (window.web3) {
      window.web3 = new Web3(window.web3.currentProvider);
      const web3 = window.web3;

      const accounts = await web3.eth.getAccounts();
      console.log("account", accounts);
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
        <Grid item>
          <Button
            onClick={() => connectWithMetaMask()}
            variant="contained"
            className={classes.button}
          >
            About
          </Button>
        </Grid>
        <Grid item>
          <Button
            onClick={() => connectWithMetaMask()}
            variant="contained"
            className={classes.button}
            startIcon={<img alt="metamask" src={MetaMask} />}
          >
            Uniswap
          </Button>
        </Grid>

        <Grid item>
          <Button
            onClick={() => connectWithMetaMask()}
            variant="contained"
            className={classes.button}
          >
            Governance
          </Button>
        </Grid>
      </Grid>
    </div>
  );
};

export default Header;
