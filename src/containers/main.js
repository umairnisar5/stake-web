// import React, { useState, useEffect } from "react";
// import Web3 from "web3";

// const Main = () => {
//   const [state, setState] = useState({
//     mainAccount: null,
//     totalZinTokens: null,
//     rewards: null,
//     stakeOf: null,
//   });

//   // contractAddress = "0xd224Cd7CBA3A4Ad3A0fF5386711Dc08556b236E4";
//   contractAddress = "0x1A6Ad65CE77888DD1Fe7720543378c42318a7AF3";
//   tokenAddress = "0x12B3D6AFF67FCbeb7F4f7121aA1eaa2dBC4FE638";

//   abi = [
//     {
//       inputs: [
//         {
//           internalType: "contract ZinFinance",
//           name: "_token",
//           type: "address",
//         },
//         { internalType: "address", name: "_burnWallet", type: "address" },
//       ],
//       stateMutability: "nonpayable",
//       type: "constructor",
//     },
//     {
//       inputs: [
//         { internalType: "address", name: "_stakeholder", type: "address" },
//       ],
//       name: "calculateDividend",
//       outputs: [{ internalType: "uint256", name: "", type: "uint256" }],
//       stateMutability: "view",
//       type: "function",
//     },
//     {
//       inputs: [],
//       name: "contractAddress",
//       outputs: [{ internalType: "address", name: "", type: "address" }],
//       stateMutability: "view",
//       type: "function",
//     },
//     {
//       inputs: [{ internalType: "address", name: "", type: "address" }],
//       name: "deposit_time",
//       outputs: [{ internalType: "uint256", name: "", type: "uint256" }],
//       stateMutability: "view",
//       type: "function",
//     },
//     {
//       inputs: [],
//       name: "destroy",
//       outputs: [],
//       stateMutability: "nonpayable",
//       type: "function",
//     },
//     {
//       inputs: [{ internalType: "address", name: "_address", type: "address" }],
//       name: "isStakeholder",
//       outputs: [
//         { internalType: "bool", name: "", type: "bool" },
//         { internalType: "uint256", name: "", type: "uint256" },
//       ],
//       stateMutability: "view",
//       type: "function",
//     },
//     {
//       inputs: [],
//       name: "percentage",
//       outputs: [{ internalType: "uint256", name: "", type: "uint256" }],
//       stateMutability: "view",
//       type: "function",
//     },
//     {
//       inputs: [],
//       name: "reinvest",
//       outputs: [],
//       stateMutability: "nonpayable",
//       type: "function",
//     },
//     {
//       inputs: [{ internalType: "address", name: "", type: "address" }],
//       name: "reinvested",
//       outputs: [{ internalType: "uint256", name: "", type: "uint256" }],
//       stateMutability: "view",
//       type: "function",
//     },
//     {
//       inputs: [
//         { internalType: "address", name: "_stakeholder", type: "address" },
//       ],
//       name: "rewardOfEachUser",
//       outputs: [{ internalType: "uint256", name: "", type: "uint256" }],
//       stateMutability: "view",
//       type: "function",
//     },
//     {
//       inputs: [{ internalType: "address", name: "", type: "address" }],
//       name: "rewardsGiven",
//       outputs: [{ internalType: "uint256", name: "", type: "uint256" }],
//       stateMutability: "view",
//       type: "function",
//     },
//     {
//       inputs: [
//         { internalType: "uint256", name: "_percentage", type: "uint256" },
//       ],
//       name: "setBurnPercentage",
//       outputs: [],
//       stateMutability: "nonpayable",
//       type: "function",
//     },
//     {
//       inputs: [
//         { internalType: "address", name: "_stakeholder", type: "address" },
//       ],
//       name: "stakeOf",
//       outputs: [{ internalType: "uint256", name: "", type: "uint256" }],
//       stateMutability: "view",
//       type: "function",
//     },
//     {
//       inputs: [{ internalType: "uint256", name: "_stake", type: "uint256" }],
//       name: "stakeZin",
//       outputs: [],
//       stateMutability: "nonpayable",
//       type: "function",
//     },
//     {
//       inputs: [{ internalType: "uint256", name: "", type: "uint256" }],
//       name: "stakeholders",
//       outputs: [{ internalType: "address", name: "", type: "address" }],
//       stateMutability: "view",
//       type: "function",
//     },
//     {
//       inputs: [{ internalType: "address", name: "", type: "address" }],
//       name: "stakes",
//       outputs: [{ internalType: "uint256", name: "", type: "uint256" }],
//       stateMutability: "view",
//       type: "function",
//     },
//     {
//       inputs: [],
//       name: "token",
//       outputs: [
//         { internalType: "contract ZinFinance", name: "", type: "address" },
//       ],
//       stateMutability: "view",
//       type: "function",
//     },
//     {
//       inputs: [],
//       name: "totalStakes",
//       outputs: [{ internalType: "uint256", name: "", type: "uint256" }],
//       stateMutability: "view",
//       type: "function",
//     },
//     {
//       inputs: [{ internalType: "uint256", name: "_amount", type: "uint256" }],
//       name: "unStakeZin",
//       outputs: [],
//       stateMutability: "nonpayable",
//       type: "function",
//     },
//     {
//       inputs: [],
//       name: "withdrawReward",
//       outputs: [],
//       stateMutability: "nonpayable",
//       type: "function",
//     },
//   ];
//   tokenabi = [
//     {
//       inputs: [],
//       stateMutability: "nonpayable",
//       type: "constructor",
//     },
//     {
//       anonymous: false,
//       inputs: [
//         {
//           indexed: true,
//           internalType: "address",
//           name: "owner",
//           type: "address",
//         },
//         {
//           indexed: true,
//           internalType: "address",
//           name: "spender",
//           type: "address",
//         },
//         {
//           indexed: false,
//           internalType: "uint256",
//           name: "value",
//           type: "uint256",
//         },
//       ],
//       name: "Approval",
//       type: "event",
//     },
//     {
//       anonymous: false,
//       inputs: [
//         {
//           indexed: true,
//           internalType: "address",
//           name: "from",
//           type: "address",
//         },
//         {
//           indexed: true,
//           internalType: "address",
//           name: "to",
//           type: "address",
//         },
//         {
//           indexed: false,
//           internalType: "uint256",
//           name: "value",
//           type: "uint256",
//         },
//       ],
//       name: "Transfer",
//       type: "event",
//     },
//     {
//       inputs: [
//         {
//           internalType: "address",
//           name: "owner",
//           type: "address",
//         },
//         {
//           internalType: "address",
//           name: "spender",
//           type: "address",
//         },
//       ],
//       name: "allowance",
//       outputs: [
//         {
//           internalType: "uint256",
//           name: "",
//           type: "uint256",
//         },
//       ],
//       stateMutability: "view",
//       type: "function",
//     },
//     {
//       inputs: [
//         {
//           internalType: "address",
//           name: "spender",
//           type: "address",
//         },
//         {
//           internalType: "uint256",
//           name: "amount",
//           type: "uint256",
//         },
//       ],
//       name: "approve",
//       outputs: [
//         {
//           internalType: "bool",
//           name: "",
//           type: "bool",
//         },
//       ],
//       stateMutability: "nonpayable",
//       type: "function",
//     },
//     {
//       inputs: [
//         {
//           internalType: "address",
//           name: "account",
//           type: "address",
//         },
//       ],
//       name: "balanceOf",
//       outputs: [
//         {
//           internalType: "uint256",
//           name: "",
//           type: "uint256",
//         },
//       ],
//       stateMutability: "view",
//       type: "function",
//     },
//     {
//       inputs: [],
//       name: "decimals",
//       outputs: [
//         {
//           internalType: "uint8",
//           name: "",
//           type: "uint8",
//         },
//       ],
//       stateMutability: "view",
//       type: "function",
//     },
//     {
//       inputs: [
//         {
//           internalType: "address",
//           name: "spender",
//           type: "address",
//         },
//         {
//           internalType: "uint256",
//           name: "subtractedValue",
//           type: "uint256",
//         },
//       ],
//       name: "decreaseAllowance",
//       outputs: [
//         {
//           internalType: "bool",
//           name: "",
//           type: "bool",
//         },
//       ],
//       stateMutability: "nonpayable",
//       type: "function",
//     },
//     {
//       inputs: [
//         {
//           internalType: "address",
//           name: "spender",
//           type: "address",
//         },
//         {
//           internalType: "uint256",
//           name: "addedValue",
//           type: "uint256",
//         },
//       ],
//       name: "increaseAllowance",
//       outputs: [
//         {
//           internalType: "bool",
//           name: "",
//           type: "bool",
//         },
//       ],
//       stateMutability: "nonpayable",
//       type: "function",
//     },
//     {
//       inputs: [],
//       name: "name",
//       outputs: [
//         {
//           internalType: "string",
//           name: "",
//           type: "string",
//         },
//       ],
//       stateMutability: "view",
//       type: "function",
//     },
//     {
//       inputs: [],
//       name: "symbol",
//       outputs: [
//         {
//           internalType: "string",
//           name: "",
//           type: "string",
//         },
//       ],
//       stateMutability: "view",
//       type: "function",
//     },
//     {
//       inputs: [],
//       name: "totalSupply",
//       outputs: [
//         {
//           internalType: "uint256",
//           name: "",
//           type: "uint256",
//         },
//       ],
//       stateMutability: "view",
//       type: "function",
//     },
//     {
//       inputs: [
//         {
//           internalType: "address",
//           name: "recipient",
//           type: "address",
//         },
//         {
//           internalType: "uint256",
//           name: "amount",
//           type: "uint256",
//         },
//       ],
//       name: "transfer",
//       outputs: [
//         {
//           internalType: "bool",
//           name: "",
//           type: "bool",
//         },
//       ],
//       stateMutability: "nonpayable",
//       type: "function",
//     },
//     {
//       inputs: [
//         {
//           internalType: "address",
//           name: "sender",
//           type: "address",
//         },
//         {
//           internalType: "address",
//           name: "recipient",
//           type: "address",
//         },
//         {
//           internalType: "uint256",
//           name: "amount",
//           type: "uint256",
//         },
//       ],
//       name: "transferFrom",
//       outputs: [
//         {
//           internalType: "bool",
//           name: "",
//           type: "bool",
//         },
//       ],
//       stateMutability: "nonpayable",
//       type: "function",
//     },
//   ];

//   const loadWeb3 = async () => {
//     let isConnected = false;
//     try {
//       if (window.ethereum) {
//         window.web3 = new Web3(window.ethereum);
//         await window.ethereum.enable();

//         isConnected = true;
//       } else if (window.web3) {
//         window.web3 = new Web3(window.web3.currentProvider);
//         isConnected = true;
//       } else {
//         isConnected = false;
//         // this.showAlert(
//         //   "Whoops...",
//         //   "<p className='txtAlert'>Metamask is not installed, please install it on your browser to connect.</p><a target='_blank' href='https://chrome.google.com/webstore/detail/metamask/nkbihfbeogaeaoehlefnkodbefgpgknn?hl=en'>https://chrome.google.com/webstore/detail/metamask/nkbihfbeogaeaoehlefnkodbefgpgknn?hl=en</a>"
//         // );
//       }
//       if (isConnected === true) {
//         const web3 = window.web3;
//         let contract = new web3.eth.Contract(abi, contractAddress);
//         let accounts = await getAccounts();
//         let tokens = await getZinTokens(accounts[0]);
//         let stakeOf = await getStakeOf(contract, accounts[0]);
//         let totalStakes = await getTotalStake(contract);
//         let percentOfTotalStake =
//           (parseInt(web3.utils.fromWei(stakeOf, "ether")) /
//             parseInt(web3.utils.fromWei(totalStakes, "ether"))) *
//           100;
//         console.log(
//           "Total STakes: ",
//           parseInt(web3.utils.fromWei(totalStakes, "ether"))
//         );
//         console.log(
//           "Stake Of: ",
//           parseInt(web3.utils.fromWei(stakeOf, "ether"))
//         );
//         // this.setState({
//         //   mainAccount: accounts[0],
//         //   totalZinTokens: parseInt(web3.utils.fromWei(tokens, "ether")),
//         //   stakeOf: parseInt(web3.utils.fromWei(stakeOf, "ether")),
//         //   totalStakes: parseInt(web3.utils.fromWei(totalStakes, "ether")),
//         //   percentOfTotalStake: parseInt(percentOfTotalStake),
//         // });
//         await getRewardOnInterval(contract, accounts[0]);
//       }
//     } catch (error) {
//       console.log(error);
//       console.log("Error while connecting metamask");
//     }
//   };

//   const getAccounts = async () => {
//     const web3 = window.web3;
//     try {
//       let accounts = await web3.eth.getAccounts();
//       console.log(accounts);
//       return accounts;
//     } catch (error) {
//       console.log("Error while fetching acounts: ", error);
//       return null;
//     }
//   };

//   const isLockedAccount = async () => {
//     try {
//       let accounts = await getAccounts();
//       if (accounts.length > 0) {
//         console.log("Metamask is unlocked");
//       } else {
//         console.log("Metamask is locked");
//       }
//     } catch (error) {
//       alert("Error while checking locked account");
//     }
//   };

//   const getBalanceOfAccount = async () => {
//     const mainAccount = await this.getAccounts();
//     const web3 = window.web3;
//     web3.eth.getBalance(mainAccount[0], function (err, res) {
//       console.log("Resp: ", res);
//     });
//   };

//   const getZinTokens = async (address) => {
//     console.log("Account: ", address);
//     const web3 = window.web3;
//     let tokenContract = new web3.eth.Contract(this.tokenabi, this.tokenAddress);
//     let tokens = await tokenContract.methods.balanceOf(address).call();
//     return tokens;
//   };

//   const getStakeOf = async (contract, address) => {
//     try {
//       let stake = await contract.methods.stakeOf(address).call();
//       return stake;
//     } catch (error) {
//       return null;
//     }
//   };

//   const stakeZin = async (amount) => {
//     if (this.state.mainAccount === null) {
//       this.showAlert("Whoops...", "Metamask is not connected.");
//     } else {
//       const web3 = window.web3;
//       let totalTokens = await this.getZinTokens(this.state.mainAccount);
//       let _amount = amount.toString();
//       totalTokens = parseInt(
//         web3.utils.fromWei(totalTokens.toString(), "ether")
//       );

//       if (totalTokens >= parseInt(_amount)) {
//         let contract = new web3.eth.Contract(this.abi, this.contractAddress);
//         let tokenContract = new web3.eth.Contract(
//           this.tokenabi,
//           this.tokenAddress
//         );
//         if (JSON.parse(localStorage.getItem("isApproved")) === true) {
//           console.log("Not Approving");
//           contract.methods
//             .stakeZin(web3.utils.toWei(_amount, "ether"))
//             .send({ from: this.state.mainAccount })
//             .on("receipt", async (receipt) => {
//               console.log("Stake Receipt: ", receipt);
//               let tokens = await this.getZinTokens(this.state.mainAccount);
//               let stakeOf = await this.getStakeOf(
//                 contract,
//                 this.state.mainAccount
//               );
//               let totalStakes = await this.getTotalStake(contract);
//               let percentOfTotalStake =
//                 (parseInt(web3.utils.fromWei(stakeOf, "ether")) /
//                   parseInt(web3.utils.fromWei(totalStakes, "ether"))) *
//                 100;
//               this.setState({
//                 totalZinTokens: parseInt(web3.utils.fromWei(tokens, "ether")),
//                 stakeOf: parseInt(web3.utils.fromWei(stakeOf, "ether")),
//                 percentOfTotalStake: percentOfTotalStake,
//               });
//             })
//             .on("transactionHash", async (hash) => {
//               console.log("transactionHash: ", hash);
//             });
//           localStorage.setItem("isApproved", "true");
//         } else {
//           console.log("Main Account: ", this.state.mainAccount);
//           console.log("Approving");
//           let approveAmount = 10000000;
//           tokenContract.methods
//             .approve(
//               this.contractAddress,
//               web3.utils.toWei(approveAmount.toString(), "ether")
//             )
//             .send({ from: this.state.mainAccount })
//             .on("transactionHash", (trxHash) => {
//               console.log("Trx Hash: ", trxHash);
//               this.showAlert(
//                 "",
//                 `Please wait while your wallet gets approved <a target='_blank' href=${
//                   "https://ropsten.etherscan.io/tx/" + trxHash
//                 }>https://ropsten.etherscan.io/tx/</a>`
//               );
//             })
//             .on("receipt", async (receipt) => {
//               console.log("Receipt: ", receipt);
//               contract.methods
//                 .stakeZin(web3.utils.toWei(_amount, "ether"))
//                 .send({ from: this.state.mainAccount })
//                 .on("receipt", async (receipt) => {
//                   let tokens = await this.getZinTokens(this.state.mainAccount);
//                   let stakeOf = await this.getStakeOf(
//                     contract,
//                     this.state.mainAccount
//                   );
//                   let totalStakes = await this.getTotalStake(contract);
//                   let percentOfTotalStake =
//                     (parseInt(web3.utils.fromWei(stakeOf, "ether")) /
//                       parseInt(web3.utils.fromWei(totalStakes, "ether"))) *
//                     100;
//                   this.setState({
//                     totalZinTokens: parseInt(
//                       web3.utils.fromWei(tokens, "ether")
//                     ),
//                     stakeOf: parseInt(web3.utils.fromWei(stakeOf, "ether")),
//                     percentOfTotalStake: percentOfTotalStake,
//                   });
//                 })
//                 .on("transactionHash", async (hash) => {
//                   console.log("transactionHash: ", hash);
//                 });
//               localStorage.setItem("isApproved", "true");
//             });
//         }
//       } else {
//         this.showAlert("Whoops...", "You don't have enough balance.");
//       }
//     }
//   };

//   const checkAllowance = async () => {
//     const web3 = window.web3;
//     let tokenContract = new web3.eth.Contract(this.tokenabi, this.tokenAddress);
//     let allowance = await tokenContract.methods
//       .allowance(this.state.mainAccount, this.contractAddress)
//       .call();
//     return allowance;
//   };

//   const unStakeZin = async (amount) => {
//     let _amount = amount.toString();
//     if (this.state.mainAccount === null) {
//       this.showAlert("Whoops...", "Metamask is not connected.");
//     } else {
//       const web3 = window.web3;
//       let contract = new web3.eth.Contract(this.abi, this.contractAddress);
//       contract.methods
//         .unStakeZin(web3.utils.toWei(_amount, "ether"))
//         .send({ from: this.state.mainAccount })
//         .on("receipt", async (receipt) => {
//           console.log("Unstake Reciept: ", receipt);
//           let tokens = await this.getZinTokens(this.state.mainAccount);
//           let stakeOf = await this.getStakeOf(contract, this.state.mainAccount);
//           let totalStakes = await this.getTotalStake(contract);
//           let percentOfTotalStake =
//             (parseInt(web3.utils.fromWei(stakeOf, "ether")) /
//               parseInt(web3.utils.fromWei(totalStakes, "ether"))) *
//             100;
//           this.setState({
//             totalZinTokens: parseInt(web3.utils.fromWei(tokens, "ether")),
//             stakeOf: parseInt(web3.utils.fromWei(stakeOf, "ether")),
//             percentOfTotalStake: percentOfTotalStake,
//           });
//         })
//         .on("transactionHash", async (hash) => {
//           console.log("Unstake Transaction Hash: ", hash);
//         });
//     }
//   };

//   const withdrawZinTokens = async () => {
//     if (this.state.mainAccount === null) {
//       this.showAlert("Whoops...", "Metamask is not connected.");
//     } else {
//       try {
//         const web3 = window.web3;
//         let contract = new web3.eth.Contract(this.abi, this.contractAddress);
//         let rewards = await contract.methods
//           .withdrawReward()
//           .send({
//             from: this.state.mainAccount,
//           })
//           .on("receipt", async (receipt) => {
//             let tokens = await this.getZinTokens(this.state.mainAccount);
//             let stakeOf = await this.getStakeOf(
//               contract,
//               this.state.mainAccount
//             );
//             let totalStakes = await this.getTotalStake(contract);
//             let percentOfTotalStake =
//               (parseInt(web3.utils.fromWei(stakeOf, "ether")) /
//                 parseInt(web3.utils.fromWei(totalStakes, "ether"))) *
//               100;
//             this.setState({
//               totalZinTokens: parseInt(web3.utils.fromWei(tokens, "ether")),
//               stakeOf: parseInt(web3.utils.fromWei(stakeOf, "ether")),
//               percentOfTotalStake: percentOfTotalStake,
//             });
//           })
//           .on("transactionHash", (hash) => {
//             console.log("Withdraw Hash: ", hash);
//           });
//       } catch (error) {
//         console.log("Error in Withdraw: ", error);
//       }
//     }
//   };

//   const reInvestZinTokens = async () => {
//     if (this.state.mainAccount === null) {
//       this.showAlert("Whoops...", "Metamask is not connected.");
//     } else {
//       try {
//         const web3 = window.web3;
//         let contract = new web3.eth.Contract(this.abi, this.contractAddress);
//         let reinvest = await contract.methods
//           .reinvest()
//           .send({
//             from: this.state.mainAccount,
//           })
//           .on("receipt", async (receipt) => {
//             let tokens = await this.getZinTokens(this.state.mainAccount);
//             let stakeOf = await this.getStakeOf(
//               contract,
//               this.state.mainAccount
//             );
//             let totalStakes = await this.getTotalStake(contract);
//             let percentOfTotalStake =
//               (parseInt(web3.utils.fromWei(stakeOf, "ether")) /
//                 parseInt(web3.utils.fromWei(totalStakes, "ether"))) *
//               100;
//             this.setState({
//               totalZinTokens: parseInt(web3.utils.fromWei(tokens, "ether")),
//               stakeOf: parseInt(web3.utils.fromWei(stakeOf, "ether")),
//               percentOfTotalStake: percentOfTotalStake,
//             });
//           })
//           .on("transactionHash", (hash) => {
//             console.log("Reinvest Hash: ", hash);
//           });
//       } catch (error) {
//         console.log("Error in reinvest: ", error);
//       }
//     }
//   };

//   const getRewardOnInterval = async (contract, address) => {
//     if (address !== null || address !== undefined) {
//       try {
//         const web3 = window.web3;
//         let reward = await contract.methods.rewardOfEachUser(address).call();
//         console.log("Fetched reward: ", reward);
//         this.setState({
//           rewards: parseInt(web3.utils.fromWei(reward, "ether")),
//         });
//         setInterval(async () => {
//           let reward = await contract.methods.rewardOfEachUser(address).call();
//           console.log("Fetched reward: ", reward);
//           this.setState({
//             rewards: parseInt(web3.utils.fromWei(reward, "ether")),
//           });
//         }, 8000);
//       } catch (error) {
//         console.log("Error while fetching rewards: ", error);
//       }
//     }
//   };

//   const getTotalStake = async (contract) => {
//     let totalStakes = await contract.methods.totalStakes().call();
//     return totalStakes;
//   };

//   return (
//     <div>
//       {/* <div className="content"> */}
//       <div className="container">
//         <div className="row">
//           <div className="col-lg-12">
//             <Header
//               connectMetamask={this.loadWeb3}
//               btnText={
//                 this.state.mainAccount === null
//                   ? this.state.btnText
//                   : this.state.mainAccount.substr(0, 25) + "..."
//               }
//             ></Header>
//           </div>
//         </div>

//         <div className="row">
//           <div className="col-lg-12">
//             <SubHeader></SubHeader>
//           </div>
//         </div>
//         <div className="row">
//           <div className="col-lg-12">
//             <SupplyStats></SupplyStats>
//           </div>
//         </div>
//         <div className="row">
//           <div className="col-lg-12">
//             <StakingTabs
//               stakeZin={this.stakeZin}
//               unStake={this.unStakeZin}
//               totalZinTokens={this.state.totalZinTokens}
//               reward={this.state.rewards == null ? 0 : this.state.rewards}
//               withdrawZinTokens={this.withdrawZinTokens}
//               reInvestZinTokens={this.reInvestZinTokens}
//               stakeOf={this.state.stakeOf}
//               percentOfTotalStake={this.state.percentOfTotalStake}
//             ></StakingTabs>
//           </div>
//         </div>
//       </div>
//       {/* </div> */}
//       <div className="container-fluid">
//         <Footer></Footer>
//       </div>
//     </div>
//   );
// };

// export default Main;
