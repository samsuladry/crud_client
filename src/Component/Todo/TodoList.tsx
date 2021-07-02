import React, { useState, useEffect } from 'react'
import { Button, Badge, VStack, Text, HStack, IconButton, StackDivider, Spacer, Input } from '@chakra-ui/react'
import { FaTrash } from "react-icons/fa";
import { GrUpdate } from "react-icons/gr"
import { AddTodo } from './AddTodo'
import { useQuery, useMutation } from '@apollo/client';
import { GET_ALL_TODOS } from '../../Graphql/Queries';
import { DELETE_TODO, UPDATE_TODO } from '../../Graphql/Mutation';
import {
    Modal,
    ModalOverlay,
    ModalContent,
    ModalHeader,
    ModalFooter,
    ModalBody,
    ModalCloseButton,
  } from "@chakra-ui/react"
// import PropTypes from 'prop-types';

// import { useQuery, useMutation } from "@apollo/client" // use this to query from db

export const TodoList = () => {
    const { data } = useQuery(GET_ALL_TODOS)
    const [todos, setTodos] = useState([])
    const [newTodo, setNewTodo] = useState("")
    const [searchTerm, setSearchTerm] = useState("")
    const [modalValue, setModalValue] = useState()
    const [isOpen, setIsOpen] = useState(false)
    const [success, setSuccess] = useState(false)

    const [deleteTodos, delTodo] = useMutation(DELETE_TODO)
    const [update, uptTodo] = useMutation(UPDATE_TODO)

    useEffect(() => {
        if(data)
        {
            setTodos(data.getAllTodos)
        }
        
    }, [data])

    const onClose = () =>
    {
        setIsOpen(false)
    }
    
    const deleteTodo =async (id: any) =>
    {
        // console.log(id)
        let parseId = parseInt(id)
        await deleteTodos({
            variables:
            {
                id: parseId
            }
        })
        window.location.reload()
        // console.log(data)
    }

   

    // const [todos, setTodos] = useState(initialTodos)
    const updateTodoFunc = async () =>
    {
        // let parseId = parseInt(id)
        const create = await update({
            variables:
            {
                id: modalValue,
                body: newTodo
            }
        })
        if(create)
        {
            setTimeout(() =>
            {
                setSuccess(true)
                window.location.reload()
            }, 900);
        }
    }


    if(!todos.length)
    {
        return(
            <Badge colorScheme="green" p='5' m='5' borderRadius='lg'>
                No Todos
            </Badge>
        )
    }

    if(success)
    {
        return(
            <Badge colorScheme="green" p='5' m='5' borderRadius='lg'>
                Sucessfully added to your list
            </Badge>
        )
    }
    
    return( 
    <div>
         

        <VStack
        divider={<StackDivider />}
        borderColor='gray.300'
        borderWidth='2px'
        p='4'
        borderRadius='lg'
        width="100%"
        maxW={{ base: '90vw', sm: '100vw', lg: '150vw', xl: '180vw' }}
        alignItems='stretch'
        >
            <Input type="text" placeholder="Search..." onChange = {(e) => { setSearchTerm(e.target.value) }}/>
            <Spacer/>
            {todos.filter((val: any) =>
            {
                if(searchTerm == "")
                {
                    return val
                }
                else if(val.body.toLowerCase().includes(searchTerm.toLocaleLowerCase()))
                {
                    return val
                } 
            }).map((todo: any) =>
            {
                return (
                    <HStack key={todo.id}>
                        <Text>{todo.body}</Text>
                        <Spacer/>
                        
                        <IconButton 
                        aria-label="Delete" 
                        icon={ <FaTrash/>}
                        isRound={true}
                        onClick = {() => {  deleteTodo(todo.id) }}/>
                        
                        <IconButton 
                        aria-label="Update" 
                        icon={ <GrUpdate/>}
                        isRound={true}
                        onClick= {() => 
                            { 
                                setIsOpen(true)
                                setModalValue(todo.id)  
                                console.log(modalValue)
                            }}
                        />
                    </HStack>
                )
                
            })} 
            <AddTodo/>
        </VStack>
        
        <Modal isOpen={isOpen} onClose={onClose}>
            <ModalOverlay />
            <ModalContent>
            <ModalHeader>Update Todo</ModalHeader>
            <ModalCloseButton />
            <ModalBody>
                <Input 
                type="text" 
                variant="filled" 
                placeholder="Update Todo"
                onChange= {(e) => setNewTodo(e.target.value)}
                />
            </ModalBody>

            <ModalFooter>
                <Button colorScheme="red" mr={3} onClick={onClose}>
                Close
                </Button>
                <Button px="10" colorScheme="blue" onClick= {() => updateTodoFunc() } disabled = {newTodo === ""}>Update</Button>
            </ModalFooter>
            </ModalContent>
      </Modal>
    </div>
    );
    
}
