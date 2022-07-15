import {
    Box,
    Center,
    Text,
    Stack,
  } from '@chakra-ui/react';
import { useEffect, React, useState } from "react";
import deletePost from '../Components/DeletePost'


const Post = ({posts, setPosts, token}) => {
  const [APIData, setAPIData] = useState([])
  const [searchInput, setSearchInput] = useState('');
  const [, setFilteredResults] = useState([]);
  const searchItems = (searchValue) => {
      setSearchInput(searchValue)
      if (searchInput !== '') {
      const filteredData = APIData.filter((item) => {
        return Object.values(item).join('').toLowerCase().includes(searchInput.toLowerCase())
      })
      setFilteredResults(filteredData)
    }
    else{
      setFilteredResults(APIData)
    }
  }
    // console.log('posts: ', posts);
    useEffect(() => {
        const fetchPosts = async () => {
            const resp = await fetch(`https://strangers-things.herokuapp.com/api/2202-ftb-pt-web-pt/posts`);
            const data = await resp.json();
            setPosts(data.data.posts);
        }
        fetchPosts();
    }, []);

    useEffect(() => {
      const fetchSearch = async () => {
          const resp = await fetch(`https://strangers-things.herokuapp.com/api/2202-ftb-pt-web-pt/posts`);
          const data = await resp.json();
            setAPIData(data.data.posts);
      }
      fetchSearch();
  }, []);
  
  
    return (
        <div id="postPage">
              <div className='searchBar'>
           <input onChange={(e) => searchItems(e.target.value)} type='text' placeholder='Search' />
            
           
              </div>
            {posts.map(({title, price, description, _id, author}) => {
                return(
                    <div id="card" key={_id}>
                         <Center py={3}>
                  <Box
                    textAlign={"center"}
                    backgroundColor={'red.200'}
                    maxW={'600px'}
                    w={'full'}
                    boxShadow={'2xl'}
                    rounded={'md'}
                    p={6}
                    overflow={'hidden'}
                      >
                    <Stack>
                  <Text fontWeight={1000}
                        fontSize = {'30px'}
                  >
                    {title}
                  </Text>
                  <Text
                        color={'white'}
                        textTransform={'uppercase'}
                        fontWeight={800}
                        fontSize={'10px'}
                        letterSpacing={1.1}>
                        {price}
                  </Text>
                      <Text color={'black'}>
                        {description}
                      </Text>
                  </Stack>
                  <Stack mt={6} direction={'column'} spacing={2} align={'center'}>
                    <Stack direction={'column'} spacing={0} fontSize={'sm'}>
                      <Text alignItems={'center'} fontWeight={600}>{author.username}</Text>
                      {token && author && (
                      <button
                      onClick={() => deletePost(token, _id)}
                      >
                        Delete
                      </button>
                      )}
                    </Stack>
                  </Stack>
      </Box>
    </Center>
                    </div>
                )
            })}
        </div>
    )
   
   
    
}
export default Post;