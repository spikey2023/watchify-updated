import * as React from "react";
import { useSelector, useDispatch } from "react-redux";
import GenreCheckboxes from "./GenreCheckboxes";

export default function UserUpdateGenrePref() {
  const auth = useSelector((state) => state.auth);
  const dispatch = useDispatch();

  const [userGenre, updateUserGenre] = React.useState(auth.user.genre);

  return (
    <div className="acc-genrepref-container">
      <h1>Update your saved preferences:</h1>
      <div>
        <GenreCheckboxes />
      </div>
    </div>
  );
}
