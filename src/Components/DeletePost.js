
const deletePost = async (token, id, posts, setPosts) => {
    console.log(token);
    try {
      await fetch(`https://strangers-things.herokuapp.com/api/2202-FTB-PT-WEB-PT/posts/${id}`, {
        method: "DELETE",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
      });
      const newPosts = posts.filter((post) => {
        return post._id !== id;
      });
      setPosts(newPosts);
    } catch (error) {
      console.error(error);
    }
  };


export default deletePost;