import React from "react";
import ReactDOMServer from "react-dom/server";

import SpotifyPlayer from "../../components/SpotifyPlayer";

export default (req, res) => {
  const spotifyPlayerSVGString = ReactDOMServer.renderToString(
    <SpotifyPlayer />
  );

  res.setHeader("Content-Type", "image/svg+xml");
  res.status(200).send(spotifyPlayerSVGString);
};
