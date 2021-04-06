import { useToast } from '@chakra-ui/react';

export default function Notification() {
  const toast = useToast();
  return (
    <>
      {toast({
        title: 'Success!',
        description: 'asd',
        status: 'success',
        duration: 6000,
        isClosable: true,
        position: 'top',
        variant: 'left-accent',
      })}
    </>
  );
}
