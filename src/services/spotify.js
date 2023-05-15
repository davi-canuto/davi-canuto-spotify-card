import authorize from "./auth";
import currentPlay from "./currentPlay";
import recentlyPlayed from "./recentlyPlayed";
import makeAttrs from "./makeAttrs";

export const fetchSpotifyData = async () => {
  const token = await authorize();
  const currentPlayRes = await currentPlay(token);
  const recentlyPlayedRes = await recentlyPlayed(token);

  if (currentPlayRes) {
    const attrs = makeAttrs({
      data: currentPlayRes,
      action: "currentPlay",
    });
    return attrs;
  } else {
    const attrs = makeAttrs({
      data: recentlyPlayedRes,
      action: "recentlyPlayed",
    });
    return attrs;
  }
};
