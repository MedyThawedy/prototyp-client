
import { useNavigate } from 'react-router-dom';
import { useEffect } from 'react';
import { useState } from 'react';
import { Link } from 'react-router-dom';
import { useParams } from 'react-router-dom';


const GetOneSong = () => {
    const [song, setSong] = useState([]);
    const params = useParams();
    const navigateBackToAllSongs = useNavigate();

    const fnNavigateBack = () => {
        navigateBackToAllSongs('/getmusiclist');
    }

    useEffect(
        () => {
            fetch('http://localhost:9898/api/getonesong/' + params.id)
                .then(response => response.json())
                .then(data => setSong(data))
        }, [])
    return (
        <div>
            <div>
                <p>{song._id}</p>
                <p>{song.title}</p>
                <audio controls src={song.audio_url}></audio>
                <button onClick={fnNavigateBack}>Back</button>
            </div>

        </div>
    )

}

export default GetOneSong;