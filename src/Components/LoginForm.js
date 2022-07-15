import {
  Button,
  Checkbox,
  Flex,
  Heading,
  Input,
  Link,
  Stack,
} from '@chakra-ui/react';
import { useState } from 'react';

const LoginForm = ({setToken}) => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const loginUser = async (event) =>{
      event.preventDefault();
      const response = await fetch(
          'https://strangers-things.herokuapp.com/api/2202-FTB-HY-WEB-PT/users/login',
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
                <Heading fontSize={'2xl'}>Login</Heading>
                
               <form onSubmit={loginUser}>
                  <label>Username</label>
                 <Input type="username" value={username} onChange={(e) => setUsername(e.target.value)} />
                  <label>Password</label>
                 <Input type="password" value={password} onChange={(e) => setPassword(e.target.value)} />
                 <Button type="submit" colorScheme={'red'} variant={'solid'}>
                  Login
                </Button>
              </form>


                <Stack spacing={6}>
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

export default LoginForm;