import { useState } from 'react';
import Head from 'next/head';
import {
  FormControl,
  FormLabel,
  FormErrorMessage,
  FormHelperText,
  Input,
  Button,
  Container,
  Box,
  useToast,
  Spinner,
  Progress,
} from '@chakra-ui/react';
import Notification from '../components/Notification';

export default function Home() {
  const toast = useToast();
  const [email, setEmail] = useState('');
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);

  async function handleSubmit(e) {
    e.preventDefault();
    setLoading(true);
    fetch(`/api/auth/login`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ email }),
    })
      .then((res) =>
        res.json().then((body) => ({
          status: res.status,
          body,
        }))
      )
      .then((resp) => {
        console.log(resp);
        setLoading(false);
        if (resp.status === 200) {
          setEmail('');

          toast({
            title: 'Success!',
            description: resp.body.message,
            status: 'success',
            duration: 6000,
            isClosable: true,
            position: 'top',
            variant: 'left-accent',
          });
        } else {
          toast({
            title: 'Shoot!',
            description: resp.body.message,
            status: 'error',
            duration: 6000,
            isClosable: true,
            position: 'top',
            variant: 'left-accent',
          });
        }
      })
      .catch((e) => {
        console.error(e);
        setLoading(false);
        toast({
          title: 'Something bad happened!',
          description: 'Please try again',
          status: 'error',
          duration: 6000,
          isClosable: true,
          position: 'top',
          variant: 'left-accent',
        });
      });
  }
  return (
    <div>
      <Head>
        <title>Create Next App</title>
        <link rel='icon' href='/favicon.ico' />
      </Head>
      {success && <Notification />}
      <main>
        <Container maxW='container.sm'>
          <Box
            bg='cornsilk'
            maxW='450px'
            p={8}
            borderRadius='6px'
            boxShadow='md'
            mt={32}
            mx='auto'
            pos='relative'
          >
            {loading && (
              <Progress
                pos='absolute'
                top='0'
                left='0'
                width='100%'
                isIndeterminate
                borderTopLeftRadius='6px'
                borderTopRighRtadius='6px'
                size='sm'
                colorScheme='pink'
              />
            )}
            <form onSubmit={handleSubmit}>
              <FormControl id='email'>
                <FormLabel>Email address</FormLabel>
                <Input
                  size='lg'
                  type='email'
                  bg='white'
                  required
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  disabled={loading}
                />
                <FormHelperText>We'll never share your email.</FormHelperText>
              </FormControl>
              <Button
                type='submit'
                mt='4'
                colorScheme='teal'
                disabled={loading}
                pos='relative'
              >
                Sign in
                {/* {loading && <Spinner pos='absolute' color='red.500' />} */}
              </Button>
            </form>
          </Box>
        </Container>
      </main>
    </div>
  );
}
