
import { useNavigate } from 'react-router-dom';
import { useEffect } from 'react';
import { useState } from 'react';
import { Link } from 'react-router-dom';


const GetMusicList = () => {
    const [songs, setSongs] = useState([]);
    useEffect(
        () => {
            fetch('http://localhost:9898/api/getallmusic')
                .then(response => response.json())
                .then(data => setSongs(data))
        }, [])
    return (
        <div>
            {
                songs.map(
                    (item) => {
                        return (
                            <div>
                                <p>{item._id}</p>
                                <Link className='clsButton' to={'/getonesong/' + item._id}><p>{item.title}</p></Link>
                                <audio controls src={item.audio_url}></audio>
                            </div>
                        )
                    }
                )
            }
        </div>
    )

}

export default GetMusicList;