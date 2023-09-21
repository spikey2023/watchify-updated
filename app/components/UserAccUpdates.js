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

  //console.log("auth.user", auth.user);
  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    // console.log("********", auth.user);
    // console.log("!!!!!", name, value);
    // console.log("###", user);

    updateUser({
      ...auth.user,
      [name]: value,
    });
  };
  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log("USER", user); //works, but token is malformed
    try {
      dispatch(
        updateUserInfo({
          ...auth.user,
          id: user.id,
          username: user.username,
          email: user.email,
          password: user.password,
          token: auth.token, //fix this
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
