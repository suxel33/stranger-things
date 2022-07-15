import React, { useState } from 'react';
// import { Input } from '@chakra-ui/react';


const AddPost = ({token}) => {
const [data, setData] = useState({title: "", description: "", price: ""})
  function handle(e) {
    const newInfo = { ...data };
    newInfo[e.target.id] = e.target.value;
    setData(newInfo);
  }
  async function handleSubmit(e) {
    e.preventDefault();
    await fetch(
      "https://strangers-things.herokuapp.com/api/2202-FTB-PT-WEB-PT/posts",
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
        body: JSON.stringify({
          post: {
            title: data.title,
            price: data.price,
            description: data.description,
          },
        }),
      }
    )
      .then((response) => response.json())
      .then((result) => {
        console.log(result);
      })
      .catch(console.error);
  }
  
    return(
        <div>
        <h3>
            Create a Post
        </h3>
        <form onSubmit={(e) => handleSubmit(e)}>
          <input onChange={(e) => handle(e)} placeholder="title" id="title" value={data.title} type="text"></input>
          <input onChange={(e) => handle(e)} placeholder="description" id="description" value={data.description} type="text"></input>
          <input onChange={(e) => handle(e)} placeholder="price" id="price" value={data.price} type="text"></input>
          <button type='submit' className='btn'>Submit</button>
        </form>
        </div>
    )

}

export default AddPost;
