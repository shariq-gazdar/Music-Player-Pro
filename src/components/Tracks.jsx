import { useState } from "react";
import cinemaAudio from "../musics/mixkit-cinematic-transition-swoosh-heartbeat-trailer-488.wav";
import gameAudio from "../musics/mixkit-game-show-suspense-waiting-667.wav";
import guitarAudio from "../musics/relaxing-guitar-loop-v5-245859.mp3";
import LastOfUs from "../musics/The-Last-Of-us-Theme-Song.mp3";
import Player from "./Player";
const musicFiles = [cinemaAudio, gameAudio, guitarAudio, LastOfUs];

export default function MusicList() {
  const [music, setMusic] = useState("");
  return (
    <div className=" h-fit">
      {musicFiles.map((file, index) => (
        <div
          key={index}
          className="bg-neutral-600 ml-5 my-5 p-3 w-fit rounded-3xl hover:bg-neutral-500 hover:p-4 cursor-pointer"
          onClick={(e) => {
            setMusic(`/src/musics/${e.target.innerText}`);
          }}
        >
          {file.replace("/src/musics/", "")}
        </div>
      ))}
      <Player music={music} />
    </div>
  );
}
