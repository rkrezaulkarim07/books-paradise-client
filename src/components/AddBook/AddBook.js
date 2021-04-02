import { faCommentsDollar } from '@fortawesome/free-solid-svg-icons';
import axios from 'axios';
import { useState } from 'react';
import { useForm } from "react-hook-form";

const AddBook = () => {
    const { register, handleSubmit, watch, errors } = useForm();
    const [imageURL, setImageURL] = useState(null);


    const onSubmit = data => {
        const eventData = {
            name: data.name,
            price: data.price,
            author: data.author,
            imageURL : imageURL
        };
        const url = `https://peaceful-retreat-22992.herokuapp.com/add-books`

        fetch(url, {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(eventData)
        })
        .then(res => console.log('server side response', res)) 
    };

    const handleImageUpload = event => {
        console.log(event.target.files[0]);
        const imageData = new FormData();
        imageData.set('key', '846bb60896db3ec48a96cdd252051808')
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
            <form onSubmit={handleSubmit(onSubmit)} style={{border: '1px solid', textAlign: 'center', backgroundColor:'lightcoral'}}>
                <h3>Add book</h3>
                <h6>Book Name</h6>
                <input name="name" class="mb-3" defaultValue="New Book Name" ref={register}/>
                <br/>
                <h6>Add Price</h6>
                <input name="price" class="mb-3" defaultValue="New Book Price" ref={register} />{register({ required: true })}
                <h6>Author Name</h6>
                <input name="author" class="mb-3" defaultValue="New Author Name" ref={register}/>
                <br/>
                <h6>Add book Cover Photo</h6>
                <input name="exampleRequired" type="file" onChange={handleImageUpload}/>
                <br/>
                <input type="submit" class="btn btn-primary" name="save"/>
            </form>
        </div >
    );
};

export default AddBook;