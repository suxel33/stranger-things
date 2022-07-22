
import { useState } from "react";
import { messageFetch } from "../api";

const SendMessage = ({ post, token, postID }) => {
  const [message, setMessage] = useState("");

  return (
    <form
      onSubmit={async () => {
        await messageFetch(token, message, postID);
      }}
    >
      <input type="text"
        placeholder="input message"
        onChange={(e) => setMessage(e.target.value)}
      />
      <button  type="submit">
        MESSAGE
      </button>
    </form>
  );
};

export default SendMessage;