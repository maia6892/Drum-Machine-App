import Drum from "./Drum";
import { useEffect, useState } from "react";
import "./DrumMachine.css";
import sounds from "../sounds/sounds";

function DrumMachine() {
    const [currentLabel, setCurrentLabel] = useState("");

    function playSound(id) {
        const player = document.getElementById(id);
        player.currentTime = 0;
        player.play();
        setCurrentLabel(player.parentElement.id);
    }

    useEffect(() => {
        sounds.forEach((item) => {
            document.addEventListener("keydown", (e) => {
                if (e.key === item.key) {
                    playSound(item.keyChar);
                }
            });
        });
    });

    return (
        <div className="container">
            <div id="drum-machine">
                <div className="drum-pad-container">
                    {sounds.map((item) => (
                        <Drum
                            key={item.keyChar}
                            sound={item}
                            playSound={playSound}
                        />
                    ))}
                </div>
                <div className="label">
                    <h1 id="display">{currentLabel}</h1>
                </div>
            </div>
        </div>
    );
}

export default DrumMachine;
