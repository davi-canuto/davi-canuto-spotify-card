import axios from "axios";

const loadImageBase64 = async (imageUrl) => {
  try {
    const image = await axios.get(imageUrl, {
      responseType: "arraybuffer",
    });
    return Buffer.from(image.data).toString("base64");
  } catch (error) {
    console.log(error);
    return null;
  }
};

export default async function makeAttrs(data) {
  let item;
  let image;
  if (data["action"] == "currentPlay") {
    item = data["data"]["item"];
  } else {
    item = data["data"]["items"][0]["track"];
  }
  const _artist_name = item["artists"][0]["name"];
  const _song_name = item["name"];
  const _url = item["external_urls"]["spotify"];
  const imageUrl = item["album"]["images"][1]["url"];
  try {
    image = await loadImageBase64(imageUrl);
  } catch (error) {
    console.error(error);
  }
  return {
    artist_name: _artist_name,
    song_name: _song_name,
    url: _url,
    image: image,
    item: item,
  };
}
