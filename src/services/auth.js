import axios from "axios";

function getAuthorization() {
  const authString = `${process.env.SPOTIFY_CLIENT_ID}:${process.env.SPOTIFY_CLIENT_SECRET}`;
  return Buffer.from(authString).toString("base64");
}

export default async function authorize() {
  const grant = getAuthorization();
  const url = "https://accounts.spotify.com/api/token";

  const headers = {
    Authorization: `Basic ${grant}`,
    "Content-Type": "application/x-www-form-urlencoded",
  };

  const data = `grant_type=refresh_token&refresh_token=${process.env.SPOTIFY_REFRESH_TOKEN}`;

  try {
    const response = await axios.post(url, data, { headers });
    return response.data["access_token"];
  } catch (error) {
    console.log(error);
    return null;
  }
}
