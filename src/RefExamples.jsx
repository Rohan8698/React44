import React, {useRef, useState } from 'react';
import VIDEO from "./VIDEO.mkv";

const RefExamples = () => {
    const [play, setPlay] = useState(true);
    const videoRef = useRef(null);

    const playORpause = () => {
        if (play) {
            videoRef.current.play();
            setPlay(false);
        } else {
            videoRef.current.pause();
            setPlay(true);
        }
    };

    return (
        <div>
            <video src={VIDEO} ref={videoRef} onClick={playORpause}>
                Video not supported
            </video>
        </div>
    );
};

export default RefExamples;
