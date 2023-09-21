import * as React from "react";
import { useSelector, useDispatch } from "react-redux";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogTitle from "@mui/material/DialogTitle";

export default function UserAccUpdates() {
  const dispatch = useDispatch();

  const [open, setOpen] = React.useState(false);
  const [email, setEmail] = React.useState("");

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const handleClick = (e) => {
    setEmail({ [e.target.name]: e.target.value });
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    //   dispatch(updateUserEmail(user.credentials));
  };
  return (
    <div>
      <Button variant="text" onClick={handleClickOpen}>
        edit
      </Button>
      <Dialog open={open} onClose={handleClose}>
        <DialogTitle>update email:</DialogTitle>
        <DialogContent>
          <form onSubmit={handleSubmit}>
            <input
              className="email-input"
              placeholder="new email address"
              value={email}
              name="email"
              onChange={handleClick}
            />
          </form>
          {/* <TextField
            autoFocus
            margin="dense"
            id="email"
            label="Email Address"
            type="email"
            fullWidth
            variant="standard"
          /> */}
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose}>cancel</Button>
          <Button onClick={handleClose}>update</Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}
