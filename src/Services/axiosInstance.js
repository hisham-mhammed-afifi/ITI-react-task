import axios from "axios";

export const axiosInstance = axios.create({
  baseURL: "https://fakestoreapi.com",
});

// https://api.themoviedb.org/3/movie/popular?api_key=19bded5488fa21f4e91959b20273d9fa
