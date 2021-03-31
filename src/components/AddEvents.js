import axios from 'axios';
import React, { useState } from 'react';
import { useForm } from 'react-hook-form';

const AddEvents = () => {
    const { register, handleSubmit, errors } = useForm(); // initialize the hook
    const [imageURL, setImageURL] =useState(null);

    const onSubmit = (data) => {
        const newEvent = {
            name: data.name,
            imageURL : imageURL
        }
        
        const url = `http://localhost:5055/addEvents`;
        fetch(url, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(newEvent)
        })
        .then(res => console.log(res))
    };

    const handleImage = event => {

        const imageData = new FormData();
        imageData.set('key', 'd8bcaccb149b8e228209e2a29aa2da25');
        imageData.append('image', event.target.files[0])

        axios.post('https://api.imgbb.com/1/upload', imageData)
            .then(function (response) {
                setImageURL(response.data.data.display_url);
            })
            .catch(function (error) {
                console.log(error);
            });
    }

    return (
        <div>
            <form onSubmit={handleSubmit(onSubmit)}>
                <input name="name" defaultValue="new event" ref={register} />
                <br />
                <input name="exampleRequired" type="file" onChange={handleImage} />
                <br />

                <input type="submit" />
            </form>
        </div>
    );
};

export default AddEvents;