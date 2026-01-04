"use client";

import { useRef, useState } from "react";

export default function MusicPlayer() {
  const audioRef = useRef(null);
  const [playing, setPlaying] = useState(false);

  const toggleMusic = () => {
    if (!audioRef.current) return;

    if (playing) {
      audioRef.current.pause();
    } else {
      audioRef.current.play();
    }
    setPlaying(!playing);
  };

  return (
    <>
      <audio ref={audioRef} loop>
        <source src="/music/music.mp3" type="audio/mpeg" />
      </audio>

      <button
        onClick={toggleMusic}
        style={{
          position: "fixed",
          bottom: "20px",
          right: "20px",
          background: "#ff4d8d",
          color: "white",
          border: "none",
          padding: "10px 16px",
          borderRadius: "20px",
          cursor: "pointer",
          zIndex: 9999,
        }}
      >
        {playing ? "🔊 Music Off" : "🎵 Music On"}
      </button>
    </>
  );
}