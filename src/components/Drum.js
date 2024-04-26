import "./Drum.css";

function Drum(props) {
    return (
        <div>
            <button
                className="drum-pad"
                id={props.sound.id}
                onClick={() => props.playSound(props.sound.keyChar)}
            >
                {props.sound.keyChar}
                <audio
                    id={props.sound.keyChar}
                    className="clip"
                    src={props.sound.url}
                ></audio>
            </button>
        </div>
    );
}

export default Drum;