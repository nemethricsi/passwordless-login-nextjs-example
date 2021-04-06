import { ChakraProvider, CSSReset } from '@chakra-ui/react';
// import { theme } from '@chakra-ui/core';

// const customTheme = {
//   ...theme,
//   global: (props) => ({
//     body: {
//       backgroundColor: 'red',
//     },
//   }),
// };

function MyApp({ Component, pageProps }) {
  return (
    <ChakraProvider>
      <CSSReset />
      <Component {...pageProps} />
    </ChakraProvider>
  );
}

export default MyApp;
