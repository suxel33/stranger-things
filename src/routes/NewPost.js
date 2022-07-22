
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { postNewPost } from "../api";

const NewPost = ({ token }) => {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [price, setPrice] = useState("");
  const [location, setLocation] = useState("[On Request]");
  const [willDeliver, setWillDeliver] = useState(false);

  const navigate = useNavigate();
  const submitHandler = async (event) => {
    event.preventDefault();
    if (title && description && price) {
      const newPost = await postNewPost(
        token,
        title,
        description,
        price,
        location,
        willDeliver
      );
      navigate("/posts");
    } else {
      alert("no blank fields");
    }
  };

  return (
    <form  onSubmit={submitHandler}>
      <label >Title</label>
      <input minLength={1} onChange={(e) => setTitle(e.target.value)} />
      <label >Description</label>
      <input minLength={1} onChange={(e) => setDescription(e.target.value)} />
      <label >Price</label>
      <input minLength={1} onChange={(e) => setPrice(e.target.value)} />
      <label >Location</label>
      <input
        onChange={(e) => {
          if (e.target.value) {
            setLocation(e.target.value);
          }
        }}
      />
      <div className="checkbox">
        <label >Deliver?</label>

        <input type="checkbox" onChange={(e) => setWillDeliver(e.target.checked)}
        />
      </div>
      <div >
        <button className="button">Submit</button>
      </div>
    </form>
  );
};

export default NewPost;