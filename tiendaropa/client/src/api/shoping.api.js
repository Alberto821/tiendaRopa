import axios from "axios";

export const shoping = async (value) =>
  await axios.get("http://localhost:4000/shoping", value);

