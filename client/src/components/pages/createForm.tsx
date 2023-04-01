import { AbsoluteCenter, Box, Button, Center, FormControl, FormLabel, Heading, Input, NumberInput, NumberInputField, Select, useToast } from "@chakra-ui/react";
import axios from "axios";
import { useState } from "react";


export const CreateForm = () =>{
    const toast = useToast();
    const [name, setName] = useState('');
    const [balance, setDeposit] = useState('');
    const [type, setType] = useState('');


    const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
    
        axios
        .post('http://localhost:666/account', { name, balance, type })
        .then((res) => {
            toast({
                title: 'Account created.',
                description: `${res}`,
                status: 'success',
                duration: 800,
                isClosable: true,
            });
        })
        .catch((err) => {
            toast({
                title: 'Account Not created.',
                description: `${err}`,
                status: 'warning',
                duration: 800,
                isClosable: true,
            });
            setName('');
            setDeposit('');
            setType('');
        });
    };
    return(
        <Box
        width={'100vw'}
        height={'100vh'}
            backgroundColor={'#131720'}
        >
            <AbsoluteCenter>
                <Center>
                <Heading 
                    size={'lg'}
                    color={'white'}
                >TELA DE CRIAR</Heading>
                </Center>
                <Box
                    width={300}
                    backgroundColor={'white'}
                    padding=".3125rem .625rem"
                    borderRadius={20}
                >
                    <form onSubmit={handleSubmit}>
                        <FormControl isRequired padding={'.625rem 0'}>
                            <FormLabel textAlign={'center'}>Digite o nome da conta</FormLabel>
                            <Input placeholder='Conta' value={name} onChange={(e) => setName(e.target.value)}/>
                        </FormControl>
                        <FormControl isRequired padding={'.625rem 0'}>
                            <FormLabel textAlign={'center'}>Digite o valor do depósito inicial</FormLabel>
                                    <NumberInput>
                                        <NumberInputField placeholder='Valor' value={balance} onChange={(e) => setDeposit(e.target.value)} />
                                    </NumberInput>
                        </FormControl>
                            <FormLabel textAlign={'center'}>Selecione o tipo da conta</FormLabel>
                            <Select placeholder='Escolha' onChange={(e)=> setType(e.target.value)}>
                                <option value='current'>Corrente</option>
                                <option value='savings'>Poupança</option>
                            </Select>
                        <Button
                        type="submit"
                        colorScheme='purple' 
                        width={'100%'} 
                        margin={'.625rem 0'}
                        >
                            Criar Conta
                        </Button>
                    </form>
                </Box>
            </AbsoluteCenter>
        </Box>
    )
}