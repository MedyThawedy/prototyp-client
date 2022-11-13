import React from 'react'
import { useState } from 'react'
import { useNavigate } from 'react-router-dom';
import { useEffect } from 'react';

const AddMusic = () => {
    const [title, setTitle] = useState('');
    const [file, setFile] = useState(null)
    const [songBase64, setSongbase64] = useState('');

    useEffect(() => {
        if (file) {
            console.log(file.size);
            const reader = new FileReader()
            reader.onload = handleReaderLoaded
            reader.readAsDataURL(file)
        }
    }, [file])

    const handleReaderLoaded = (event) => {
        setSongbase64(event.target.result)
    }

    const fnAddNewSong = async () => {
        const song = {
            title: title,
            audio_url: songBase64
        }

        const response = await fetch('http://localhost:9898/api/addmusic', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
                //'authentication': 'Bearer ' + localStorage.getItem('token')
            },
            body: JSON.stringify(song)
        })

        const data = await response.json()
        //  if (data.state) {
        setTitle('')
        setSongbase64('')
        //  }
        console.log(data)

    }

    return (
        <article>
            <h2>Add Song</h2>
            <input value={title} onChange={(e) => { setTitle(e.target.value) }} type="mail" placeholder="Title" /> <br />
            <input onChange={(e) => setFile(e.target.files[0])} type="file" /> <br />
            <button onClick={fnAddNewSong} >Add Song</button>
        </article>
    )
}

export default AddMusic