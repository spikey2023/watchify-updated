import * as React from "react";
import { useSelector, useDispatch } from "react-redux";
import Button from "@mui/material/Button";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogTitle from "@mui/material/DialogTitle";
import { updateUserInfo } from "../features/userSlice";

export default function UserAccUpdates() {
  const auth = useSelector((state) => state.auth);
  const dispatch = useDispatch();

  const [open, setOpen] = React.useState(false);
  const [user, updateUser] = React.useState({
    username: "",
    email: "",
    password: "",
  });

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const handleChange = (e) => {
    const { name, value } = e.target;

    updateUser({
      ...auth.user,
      [name]: value,
    });
  };
  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      dispatch(
        updateUserInfo({
          ...auth.user,
          id: user.id,
          username: user.username,
          email: user.email,
          password: user.password,
          token: auth.token,
        })
      );
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
              value={user.email}
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
