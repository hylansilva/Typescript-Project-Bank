import { ChakraProvider } from "@chakra-ui/react";

import { CreateForm } from "./components/createForm";

export const App = () =>{
  return(
    <>
    <ChakraProvider toastOptions={{ defaultOptions: { position: "top" } }}>
      <CreateForm/>
    </ChakraProvider>
    </>
  );
}