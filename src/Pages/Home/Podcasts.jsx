import data from "../../data/index.json";
import "./Podcasts.css";
import React, { useRef, useState, useEffect } from "react";
import { usePodcast } from "./PodcastContext";

export default function MySkills() {
  return (
    <section className="skills--section" id="Podcasts">
      <div className="portfolio--container">
        <h1>Featured Podcasts</h1>
        <h2 className="skills--section--heading">
          With some of the leading tech recruiters
        </h2>
      </div>
      <div className="skills--section--container">
        {data?.skills?.map((item, index) => (
          <div key={index} className="skills--section--card">
            <div className="skills--section--card--content">
              <h3 className="skills--section--title">{item.title}</h3>
              <p className="skills--section--description">{item.description}</p>

              <section>
                <PodcastPlayer id={item.id} title={item.title} src={item.src} />
              </section>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

const PodcastPlayer = ({ title, src, id }) => {
  const audioRef = useRef(null);
  const { activePodcast, setActivePodcast } = usePodcast();
  const [isPlaying, setIsPlaying] = useState(false);
  const [progress, setProgress] = useState(0);

  const togglePlay = () => {
    const audio = audioRef.current;

    if (activePodcast && activePodcast !== title) {
      // Stop the currently playing podcast
      activePodcast.audio.pause();
      activePodcast.audio.currentTime = 0; // Reset current time
      setIsPlaying(false);
    }

    if (isPlaying) {
      audio.pause();
    } else {
      audio.play();
      setActivePodcast({ title, audio, id }); // Set this podcast as active
    }

    setIsPlaying(!isPlaying);
  };

  const handleTimeUpdate = () => {
    const audio = audioRef.current;
    if (audio && audio.duration) {
      setProgress((audio.currentTime / audio.duration) * 100);
    }
  };

  useEffect(() => {
    const audio = audioRef.current;
    audio.addEventListener("timeupdate", handleTimeUpdate);

    // Cleanup the event listener
    return () => {
      audio.removeEventListener("timeupdate", handleTimeUpdate);
    };
  }, []);

  console.log({ id, activePodcast });

  return (
    <div className="podcast-player">
      <audio ref={audioRef} src={src} preload="metadata" />

      <div className="controls">
        <button
          className="play-pause-btn"
          onClick={togglePlay}
          style={{
            backgroundColor:
              isPlaying && activePodcast.id === id ? "red" : "#007bff",
          }}
        >
          {isPlaying ? "Stop" : "Start"}
        </button>
        <div className="progress-container">
          <div className="progress-bar" style={{ width: `${progress}%` }}></div>
        </div>
      </div>
    </div>
  );
};
