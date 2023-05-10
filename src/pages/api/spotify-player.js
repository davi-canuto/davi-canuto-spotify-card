import React, { useState, useEffect } from "react";
import ReactDOMServer from "react-dom/server";

import SpotifyPlayer from "../../components/SpotifyPlayer";
import { fetchSpotifyData } from "../../services/spotify";

export default async (req, res) => {
  const data = await fetchSpotifyData();
  const spotifyPlayerSVGString = ReactDOMServer.renderToString(
    <SpotifyPlayer data={data} />
  );

  res.setHeader("Content-Type", "image/svg+xml");
  res.status(200).send(spotifyPlayerSVGString);
};
