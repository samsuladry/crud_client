import React, { useState, useEffect } from 'react'
import { useMutation } from '@apollo/client';
import {
    HStack,
    Input,
    Button,
    Badge,
  } from "@chakra-ui/react"
import { CREATE_TODO } from '../../Graphql/Mutation';

export const AddTodo = () => {

    const [addTodo, setaddTodo] = useState("")
    const [success, setSuccess] = useState(false)
    const [createTodo, { error, data }] = useMutation(CREATE_TODO)

    const handleSubmit = async (e: any) =>
    {
        e.preventDefault()
        const create = await createTodo({
                            variables: {
                                body: addTodo
                            }
                        })

        if(create)
        {
            setSuccess(true)
            setTimeout(() =>
            {
                window.location.reload()
            }, 500);
        }

    }

    if(success)
    {
        return(
            <Badge colorScheme="green" p='5' m='5' borderRadius='lg'>
                Sucessfully added to your list
            </Badge>
        )
    }


    return (
        <HStack mt='10'>
            <Input 
            type="text" 
            variant="filled" 
            placeholder="Todo"
            onChange= {(e) => setaddTodo(e.target.value)}
            />
            <Button px="10" colorScheme="blue" onClick= {(event) => handleSubmit(event)} disabled = {addTodo === ""}>Add Todo</Button>
        </HStack>
    )
}
