import * as React from "react";
import { useSelector, useDispatch } from "react-redux";
import Button from "@mui/material/Button";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogTitle from "@mui/material/DialogTitle";
import updateUser from "../features/userSlice";

export default function UserAccUpdates() {
  const auth = useSelector((state) => state.auth);
  const dispatch = useDispatch();

  const [open, setOpen] = React.useState(false);
  const [email, setEmail] = React.useState("");

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const handleChange = (e) => {
    setEmail(e.target.value);
  };
  const handleSubmit = async (e) => {
    e.preventDefault();

    console.log("e.target.value", e.target.value); //undefined
    console.log("email", email); //works
    try {
      dispatch(updateUser(email));
      setOpen(false);
    } catch (err) {
      console.log(err);
    }
  };
  return (
    <div>
      <Button variant="text" onClick={handleClickOpen}>
        edit
      </Button>
      <Dialog open={open} onClose={handleClose}>
        <form onSubmit={handleSubmit}>
          <DialogTitle>update email:</DialogTitle>
          <DialogContent>
            <input
              className="email-input"
              value={email}
              name="email"
              onChange={handleChange}
            />
          </DialogContent>
          <DialogActions>
            <Button onClick={handleClose}>cancel</Button>
            <Button type="submit">update</Button>
          </DialogActions>
        </form>
      </Dialog>
    </div>
  );
}
