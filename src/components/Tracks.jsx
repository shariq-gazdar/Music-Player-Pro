import cinemaAudio from "../musics/mixkit-cinematic-transition-swoosh-heartbeat-trailer-488.wav";
import gameAudio from "../musics/mixkit-game-show-suspense-waiting-667.wav";
import guitarAudio from "../musics/relaxing-guitar-loop-v5-245859.mp3";

const musicFiles = [cinemaAudio, gameAudio, guitarAudio];

export default function MusicList() {
  return (
    <div>
      {musicFiles.map((file, index) => (
        <div
          key={index}
          className="bg-neutral-600 ml-5 my-5 p-3 w-fit rounded-3xl hover:bg-neutral-500"
        >
          {file.replace("/src/musics/", "")}
        </div>
      ))}
    </div>
  );
}
