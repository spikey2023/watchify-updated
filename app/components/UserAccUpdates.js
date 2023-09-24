import * as React from "react";
import { useSelector, useDispatch } from "react-redux";
import Button from "@mui/material/Button";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogTitle from "@mui/material/DialogTitle";
import { updateUserInfo } from "../features/userSlice";

export default function UserAccUpdates(props) {
  const key = Object.keys(props).toString();

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
    updateUser((prevState) => ({
      ...prevState,
      [e.target.name]: e.target.value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      dispatch(
        updateUserInfo({
          ...auth.user,
          username: user.username || auth.user.username,
          email: user.email || auth.user.email,
          password: user.password || auth.user.password,
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
        <form className="update-form" onSubmit={handleSubmit}>
          <DialogTitle>update {key}:</DialogTitle>
          <DialogContent>
            <input
              className="form-input"
              value={user.value}
              name={key}
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
