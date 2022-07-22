const BASE_URL = "https://strangers-things.herokuapp.com";
const KEY = "/api/2202-FTB-PT-WEB-PT";

export const fetchAllPosts = async () => {
  try {
    const response = await fetch(`${BASE_URL}${KEY}/posts`);
    const data = await response.json();
    const fetchedPosts = data.data.posts;
    return fetchedPosts;
  } catch (error) {
    console.log(error);
  }
};

export const fetchRegister = async (username, password) => {
  try {
    const response = await fetch(`${BASE_URL}${KEY}/users/register`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        user: {
          username: username,
          password: password,
        },
      }),
    });
    const data = await response.json();
    return data;
  } catch (error) {
    console.log(error);
  }
};

export const fetchLogin = async (username, password) => {
  try {
    const response = await fetch(`${BASE_URL}${KEY}/users/login`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        user: {
          username: username,
          password: password,
        },
      }),
    });
    const data = await response.json();
    return data;
  } catch (error) {
    console.log(error);
  }
};

export const postNewPost = async (token, title, description, price, location, willDeliver) => {
  try {
    const response = await fetch(`${BASE_URL}${KEY}/posts`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
      body: JSON.stringify({
        post: {
          title: title,
          description: description,
          price: price,
          location: location,
          willDeliver: willDeliver
        },
      }),
    });
    const data = await response.json();
    return data;
  } catch (error) {
    console.log(error);
  }
};

export const deletePost = async (token, postID, posts, setPosts) => {
  try {
    const response = await fetch(`${BASE_URL}${KEY}/posts/${postID}`, {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
    });
    const data = await response.json();
    if (data) {
        const newPosts = posts.filter(post => post._id !== postID)
        setPosts(newPosts);
    }

  } catch (error) {
    console.log(error);
  }
};

export const fetchProfile = async (token) => {
  try {
    const response = await fetch(`${BASE_URL}${KEY}/users/me`, {
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
    });
    const data = await response.json();
    const profileInfo = data.data.messages
    return profileInfo;
  } catch (error) {
    console.log(error);
  }
};

export const messageFetch = async (token, message, postID) => {
    try {
        const response = await fetch(`${BASE_URL}${KEY}/posts/${postID}/messages`,
        {
            method: "POST",
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${token}`
            },
                body: JSON.stringify({
                message: {
                content: message
            }
            })
        })
    const data = await response.json()
    if (data) {
        alert('message sent')
    }
    } catch (error) {
    console.log(error);
  }
}
