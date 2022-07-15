import {
    Button,
    Checkbox,
    Flex,
    Heading,
    Input,
    Link,
    Stack,
    Image,
  } from '@chakra-ui/react';
import { useEffect, useState } from 'react';

const AuthForm = ({setToken}) => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const registerUser = async (event) =>{
        event.preventDefault();
        const response = await fetch(
            'https://strangers-things.herokuapp.com/api/2202-FTB-PT-WEB-PT/users/register',
            {
                method: "POST",
                headers: {
                'Content-Type': 'application/json'
                },
                body: JSON.stringify({
                user: {
                    username,
                    password
               }
            })
          }
        )
        const data = await response.json();
        console.log(data);
        window.localStorage.setItem('token', data.data.token)
        setToken(data.data.token)
        }

  return (
    <Stack minH={'100vh'} direction={{ base: 'column', md: 'row' }}>
      <Flex p={8} flex={1} align={'center'} justify={'center'}>
        <Stack spacing={4} w={'full'} maxW={'md'}>
          <Heading fontSize={'2xl'}>Create an account</Heading>
          
            <form onSubmit={registerUser}>
            <label>Username</label>
            <Input type="username" value={username} onChange={(e) => setUsername(e.target.value)} />
        
          
            <label>Password</label>
            <Input type="password" value={password} onChange={(e) => setPassword(e.target.value)} />

              <Button type="submit" colorScheme={'red'} variant={'solid'}>
              Register
            </Button>
            </form>

          <Stack spacing={4}>
            <Stack
              direction={{ base: 'column', sm: 'row' }}
              align={'center'}
              justify={'space-between'}>
              <Checkbox>Remember me</Checkbox>
              <Link color={'blue.500'}>Forgot password?</Link>
            </Stack>
           

          </Stack>
        </Stack>
      </Flex>
      <Flex flex={1}>
      </Flex>
    </Stack>
  );
}
       

export default AuthForm;