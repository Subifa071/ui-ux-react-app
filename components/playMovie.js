import { Video } from "expo-av";
import VideoPlayer from "expo-video-player";
import * as React from "react";

export default function PlayMovie({ playMovie, setPlayMovie }) {
  const [inFullscreen, setInFullscreen] = React.useState(true);
  const refVideo = React.useRef(null);

  React.useEffect(() => {
    if (playMovie) {
      enterFullscreen();
    } else {
      exitFullscreen();
    }
  }, [playMovie, refVideo.current]);

  const enterFullscreen = () => {
    setInFullscreen(true);
    setPlayMovie(true);
    refVideo.current?.setStatusAsync({
      shouldPlay: true,
    });
  };

  const exitFullscreen = () => {
    setPlayMovie(false);
    setInFullscreen(false);
    refVideo.current?.setStatusAsync({
      shouldPlay: false,
    });
  };

  return (
    <VideoPlayer
      videoProps={{
        shouldPlay: playMovie,
        resizeMode: Video.RESIZE_MODE_CONTAIN,
        source: {
          uri: "http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4",
        },
        ref: refVideo,
        useNativeControls: true, // Optional: if you want to use native controls
      }}
      fullscreen={{
        inFullscreen,
        enterFullscreen,
        exitFullscreen,
      }}
      slider={{
        visible: true,
      }}
    />
  );
}
