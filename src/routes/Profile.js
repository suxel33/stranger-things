import { Navigate } from "react-router-dom";
import { useEffect } from "react";
import {
    Heading,
    Avatar,
    Box,
    Center,
    Text,
    Stack,
    Button,
    useColorModeValue,
  } from '@chakra-ui/react';

const Profile = ({token}) => {
    useEffect(() => {
        fetch('https://strangers-things.herokuapp.com/api/2202-FTB-HY-WEB-PT/users/me', {
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${token}`
            },
            }).then(response => response.json())
            .then(result => {
                console.log(result);
                if(!result.success) {
                    Navigate("../login", { replace: true });
                }
            })
            .catch(console.error);
        }, [])
        return (
            <Center py={6}>
              <Box
                maxW={'320px'}
                w={'full'}
                bg={useColorModeValue('white', 'gray.900')}
                boxShadow={'2xl'}
                rounded={'lg'}
                p={6}
                textAlign={'center'}>
                <Avatar
                  size={'xl'}
                  src={
                    'https://th.bing.com/th/id/R.d7c118d56b0b7762214742d4701a9b3b?rik=1oq7BQDjvrJkjQ&riu=http%3a%2f%2fworldufophotosandnews.org%2fwp-content%2fuploads%2f2017%2f12%2fALIEN-ARTICLE-KEN-PFEIFER-12-15-17.jpg&ehk=Wfz6gA946eiSWFLGLpLYH1ctiYEVXsYtClt13IQ4iys%3d&risl=&pid=ImgRaw&r=0'
                  }
                  alt={'Avatar Alt'}
                  mb={4}
                  pos={'relative'}
                  _after={{
                    content: '""',
                    w: 4,
                    h: 4,
                    bg: 'green.300',
                    border: '2px solid white',
                    rounded: 'full',
                    pos: 'absolute',
                    bottom: 0,
                    right: 3,
                  }}
                />
                <Heading fontSize={'2xl'} fontFamily={'body'}>
                  Joseph Martelli
                </Heading>
                <Text
                  textAlign={'center'}
                  color={useColorModeValue('gray.700', 'gray.400')}
                  px={3}>
                  Bass guitar, working out, and coding!
                   </Text>

        
                <Stack mt={8} direction={'row'} spacing={4}>
                  <Button
                    flex={1}
                    fontSize={'sm'}
                    rounded={'full'}
                    _focus={{
                      bg: 'gray.200',
                    }}>
                    Message
                  </Button>
                </Stack>
              </Box>
            </Center>
          );
}


export default Profile;