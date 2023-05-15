import axios from "axios";

export default async function currentPlay(token) {
  const url = "https://api.spotify.com/v1/me/player/currently-playing";

  const headers = {
    Authorization: `Bearer ${token}`,
  };

  try {
    const response = await axios.get(url, { headers });
    return response.data;
  } catch (error) {
    console.log(error);
    return null;
  }
}
