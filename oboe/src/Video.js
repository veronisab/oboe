import React from "react";
import YoutubeEmbed from "./YoutubeEmbed";

export default function Video() {
  return (
    <div className="tc">
      <h1>Youtube</h1>
      <YoutubeEmbed embedId="8WaVzA6dxdw" />
      <YoutubeEmbed embedId="K7rsEcYtlTs" />
      <YoutubeEmbed embedId="BXDT2jw1Jxw" />
      <YoutubeEmbed embedId="y6cbYZ8_IaI" />
      <YoutubeEmbed embedId="videoseries?list=PLZb528n0jlYaDOYuJbLh09LSeynVJGVDU" />
    </div>
  );
}