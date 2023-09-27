import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import FormHelperText from "@mui/material/FormHelperText";
import FormControl from "@mui/material/FormControl";
import Button from "@mui/material/Button";
import { Box } from "@mui/material";
import { getUserGenrePrefs } from "../features/userSlice";
import { updateUserGenrePrefs } from "../features/userSlice";
import CopyGenreCheckboxes from "./CopyGenreCheckboxes";

const genres = [
  { name: "Action", genreTmdbId: 28, checked: false },
  { name: "Adventure", genreTmdbId: 12, checked: false },
  { name: "Animation", genreTmdbId: 16, checked: false },
  { name: "Comedy", genreTmdbId: 35, checked: false },
  { name: "Crime", genreTmdbId: 80, checked: false },
  { name: "Documentary", genreTmdbId: 99, checked: false },
  { name: "Drama", genreTmdbId: 18, checked: false },
  { name: "Family", genreTmdbId: 10751, checked: false },
  { name: "Fantasy", genreTmdbId: 14, checked: false },
  { name: "History", genreTmdbId: 36, checked: false },
  { name: "Horror", genreTmdbId: 27, checked: false },
  { name: "Music", genreTmdbId: 10402, checked: false },
  { name: "Mystery", genreTmdbId: 9648, checked: false },
  { name: "Romance", genreTmdbId: 10749, checked: false },
  { name: "Science Fiction", genreTmdbId: 878, checked: false },
  { name: "TV Movie", genreTmdbId: 10770, checked: false },
  { name: "Thriller", genreTmdbId: 53, checked: false },
  { name: "War", genreTmdbId: 10752, checked: false },
  { name: "Western", genreTmdbId: 37, checked: false },
];

export default function UserUpdateGenrePref() {
  const auth = useSelector((state) => state.auth);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(
      getUserGenrePrefs({
        id: auth.user.id,
        token: auth.token,
      })
    );
  }, []);

  useEffect(() => {
    populateCheckboxes();
  }, [auth.userGenrePrefs]);

  const [checked, setCheckedState] = React.useState({});

  const [data, setData] = React.useState([]);

  const userGenres = auth.userGenrePrefs;

  //loop through genres if genre.name === genreTmdbId.name make genre.checked : true
  const populateCheckboxes = () => {
    if (userGenres?.length > 0 && !checked.length) {
      for (let i = 0; i < genres.length; i++) {
        for (let y = 0; y < userGenres.length; y++) {
          if (genres[i].genreTmdbId === userGenres[y].genreTmdbId) {
            setData({ ...(genres[i].checked = true) });
          }
          setData(genres[i]);
          // setData((prevProps) => {
          //   return { ...prevProps, [genre.genreTmdbId]: true };
          // });
        }
        return data;
      }
      console.log("DATA in populate CheckBoxes", data);
    }

    // {id: true}
    const handleChange = (e) => {
      setCheckedState((prevState) => ({
        ...prevState,
        [e.target.value]: e.target.checked,
      }));
      //console.log("checked", checked, "e.target.value", e.target.value);
    };

    const handleSubmit = async (e) => {
      e.preventDefault();
      //filter through data and push genreTmdbId's into an array,
      //then call updateUserGenrePrefs(userinfo, this array)
      // }
      // if (above array.length < 2) {
      //   window.alert("please check at least 2 genres");
      // }
      //console.log("data in submit", data);
    };
    return (
      <div className="usergenrepref-container-margin">
        <p className="p-heading">UPDATE YOUR GENRE PREFERENCES:</p>
        <p>Please select at least 2 genres you enjoy!</p>
        <Box component="form" onSubmit={handleSubmit} sx={{ display: "flex" }}>
          <FormControl sx={{ marginBottom: "1rem" }}>
            <CopyGenreCheckboxes
              selectedGenres={data}
              handleChange={handleChange}
            ></CopyGenreCheckboxes>
            {/* <FormHelperText
            // error={genreError}
            sx={{ marginLeft: "2rem", marginTop: "-0.5rem" }}
          >
            Please select at least 2 genres you enjoy!
          </FormHelperText> */}
          </FormControl>
          <Button variant="contained" color="success" type="submit">
            update
          </Button>
        </Box>
      </div>
    );
  };
}
// export default function UserUpdateGenrePref() {
//   const auth = useSelector((state) => state.auth);

//   const dispatch = useDispatch();

//   useEffect(() => {
//     dispatch(
//       getUserGenrePrefs({
//         id: auth.user.id,
//         token: auth.token,
//       })
//     );
//   }, []);

//   useEffect(() => {
//     populateCheckboxes();
//   }, [auth.userGenrePrefs]);

//   const [checked, setCheckedState] = React.useState({});
//   //const [data, setData] = React.useState([]);
//   const [data, setData] = React.useState([]);

//   const userGenres = auth.userGenrePrefs;

//   const populateCheckboxes = () => {
//     if (userGenres?.length > 0 && !checked.length) {
//       userGenres?.filter((genre) => {
//         setData((prevProps) => {
//           return { ...prevProps, [genre.genreTmdbId]: true };
//         });
//       });
//     }
//   };

//   // {id: true}
//   const handleChange = (e) => {
//     setCheckedState(() => ({
//       ...data,
//       [e.target.value]: e.target.checked,
//     }));
//     console.log("checked", checked, "e.target.value", e.target.value);
//   };

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     for (let key in checked) {
//       setData(parseInt(key));
//     }
//     if (data.length < 2) {
//       window.alert("please check at least 2 genres");
//     }
//     console.log("data in submit", data);
//   };
//   return (
//     <div className="usergenrepref-container-margin">
//       <p className="p-heading">UPDATE YOUR GENRE PREFERENCES:</p>
//       <p>Please select at least 2 genres you enjoy!</p>
//       <Box component="form" onSubmit={handleSubmit} sx={{ display: "flex" }}>
//         <FormControl sx={{ marginBottom: "1rem" }}>
//           <CopyGenreCheckboxes
//             selectedGenres={data}
//             handleChange={handleChange}
//           ></CopyGenreCheckboxes>
//           {/* <FormHelperText
//             // error={genreError}
//             sx={{ marginLeft: "2rem", marginTop: "-0.5rem" }}
//           >
//             Please select at least 2 genres you enjoy!
//           </FormHelperText> */}
//         </FormControl>
//         <Button variant="contained" color="success" type="submit">
//           update
//         </Button>
//       </Box>
//     </div>
//   );
//}
