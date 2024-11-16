import React, { useState, useEffect } from "react";
import moduleName from "../";

function Player(props) {
  // State to track playback and volume
  const [isPlaying, setIsPlaying] = useState(false);
  const [volume, setVolume] = useState(1);
  const [currentTime, setCurrentTime] = useState(0);
  const [duration, setDuration] = useState(0);

  // Function to toggle audio playback
  function toggleAudio() {
    const audio = document.getElementById("audio");
    if (audio.paused) {
      audio.play();
      setIsPlaying(true);
    } else {
      audio.pause();
      setIsPlaying(false);
    }
  }

  // Function to adjust volume
  function adjustVolume(e) {
    const audio = document.getElementById("audio");
    const newVolume = e.target.value;
    audio.volume = newVolume;
    setVolume(newVolume);
  }

  // Function to handle slider change to seek audio
  function handleSeek(e) {
    const audio = document.getElementById("audio");
    const newTime = e.target.value;
    audio.currentTime = newTime;
    setCurrentTime(newTime);
  }

  // Update the current time as the audio plays
  useEffect(() => {
    const audio = document.getElementById("audio");

    const updateCurrentTime = () => {
      setCurrentTime(audio.currentTime);
    };

    audio.addEventListener("timeupdate", updateCurrentTime);

    // Set the duration once the metadata is loaded
    const handleLoadedMetadata = () => {
      setDuration(audio.duration);
    };

    audio.addEventListener("loadedmetadata", handleLoadedMetadata);

    return () => {
      audio.removeEventListener("timeupdate", updateCurrentTime);
      audio.removeEventListener("loadedmetadata", handleLoadedMetadata);
    };
  }, []);

  return (
    <div className="playerContainer flex flex-col h-[59vh] relative">
      <div className="mainPlayer absolute h-24 w-full bg-neutral-700 bottom-0 flex items-center px-5 justify-between">
        <span>{props.music || "Player other elements"}</span>

        <div className="centerControls flex justify-center flex-col gap-y-5">
          <button
            onClick={toggleAudio}
            className="bg-blue-500 text-white p-2 rounded-lg"
          >
            {isPlaying ? "Pause" : "Play"}
          </button>

          <input
            id="durationSlider"
            type="range"
            min="0"
            max={duration || 1}
            step="0.01"
            value={currentTime}
            className="w-64 h-2 bg-gray-300 rounded-full"
            onChange={handleSeek}
          />
        </div>
        <div className="flex items-center space-x-4">
          {/* Audio element */}
          <audio id="audio" className="hidden" src={props.music}></audio>

          <input
            id="volumeSlider"
            type="range"
            min="0"
            max="1"
            step="0.01"
            value={volume}
            className="w-32 h-2 bg-gray-300 rounded-full"
            onChange={adjustVolume}
          />
        </div>
      </div>
    </div>
  );
}

export default Player;
