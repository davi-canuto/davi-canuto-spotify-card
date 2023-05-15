import axios from "axios";

export default async function recentlyPlayed(token) {
  const url = "https://api.spotify.com/v1/me/player/recently-played?limit=1";

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
