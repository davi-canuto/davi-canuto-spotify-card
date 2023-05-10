import axios from "axios";

export const fetchSpotifyData = async () => {
  const response = await axios.get(process.env.SPOTIFY_URL);
  const data = await response.data;
  return data;
};
