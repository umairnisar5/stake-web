import React, { useState } from "react";
import Button from "@material-ui/core/Button";
import Dialog from "@material-ui/core/Dialog";
import DialogActions from "@material-ui/core/DialogActions";
import DialogContent from "@material-ui/core/DialogContent";
import DialogContentText from "@material-ui/core/DialogContentText";
import DialogTitle from "@material-ui/core/DialogTitle";
import { makeStyles } from "@material-ui/core/styles";
import OutlinedInput from "@material-ui/core/OutlinedInput";
import InputLabel from "@material-ui/core/InputLabel";
import FormControl from "@material-ui/core/FormControl";

export default function AlertDialog(props) {
  const classes = useStyles();
  const [amount, setAmount] = useState(0);
  const handleClose = () => {
    props?.handleClose(false);
  };
  const handleChange = (e) => {
    setAmount(e.target.value);
    console.log(e.target.value);
  };
  const handleConfirm = (e) => {
    props?.setEnteredAmount(amount);
    props?.confirm(amount);
  };

  return (
    <div>
      <Dialog
        open={props?.open}
        onClose={handleClose}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
      >
        <DialogTitle id="alert-dialog-title">
          {"Enter Stake Amount"}
        </DialogTitle>
        <DialogContent>
          <DialogContentText id="alert-dialog-description">
            <FormControl
              fullWidth
              className={classes.margin}
              variant="outlined"
            >
              <InputLabel
                htmlFor="outlined-adornment-amount"
                style={{ fontFamily: " Arial, Helvetica, sans-serif" }}
              >
                Amount
              </InputLabel>
              <OutlinedInput
                id="outlined-adornment-amount"
                value={props?.amount}
                onChange={handleChange}
                labelWidth={60}
                type="number"
              />
            </FormControl>
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button
            onClick={handleClose}
            color="primary"
            style={{
              fontFamily: " Arial, Helvetica, sans-serif",
            }}
          >
            Cancel
          </Button>
          <Button
            onClick={handleConfirm}
            color="primary"
            autoFocus
            style={{ fontFamily: " Arial, Helvetica, sans-serif" }}
          >
            Confirm
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}

const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
    flexWrap: "wrap",
  },
  margin: {
    margin: theme.spacing(1),
  },
  withoutLabel: {
    marginTop: theme.spacing(3),
  },
  textField: {
    width: "25ch",
  },
}));
