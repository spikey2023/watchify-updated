// import axios from "axios";
// // require('dotenv').config()

// const BASE_URL = "https://api.themoviedb.org/3"
// // const TMDB_TOKEN = process.env.TMDB_API_TOKEN
// const TMDB_TOKEN = `eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI3YzFhMDJkYTc1YjI1ZDQ4YzEwZWRjZjJlMzI4OTZi
// MiIsInN1YiI6IjY0ZjEzNjdmM2E5OTM3MDBlMmY3ZjczYiIsInNjb3
// BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.Dw07bPO2ySeXG
// 0Pm_1wfuJrBBVvC8ry4P8VVEXauUw4`

// const headers = {
//     Authorization: "bearer " + TMDB_TOKEN,
// };

// export const fetchApiData = async (url, params) => {
//     try {
//         const { data } = await axios.get(BASE_URL + url, {
//             headers,
//             params,
//         });
//         return data;
//     } catch (err) {
//         console.log(err);
//         return err;
//     }
// };