import React, {useState, useEffect} from 'react'
import { Heading, VStack, IconButton, useColorMode, extendTheme } from '@chakra-ui/react'
import { TodoList }  from "./TodoList"
import { FaSun, FaMoon } from "react-icons/fa";
// import { useQuery, useMutation } from '@apollo/client';
// import { GET_ALL_TODOS } from '../../Graphql/Queries';
// import { DELETE_TODOS } from '../../Graphql/Mutation';

export const Todo = () => {

    const { colorMode, toggleColorMode } = useColorMode()
    
    return (
        <VStack p={4}>
            <IconButton 
                aria-label="Night Mode" 
                icon={ colorMode === 'light' ? <FaSun/>: <FaMoon/>} 
                isRound={true} 
                size="lg" 
                alignSelf="flex-end"
                onClick={toggleColorMode}
            />
            <Heading 
                mb="8" 
                fontWeight='extrabold' 
                size="xl" 
                bgGradient= "linear(to-br, red.600, red.500, blue.500, blue.300)" 
                bgClip="text"
            >Todo Application
            </Heading>
            <TodoList/>
            
        </VStack>
    )
}
