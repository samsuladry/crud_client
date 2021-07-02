import { gql } from "@apollo/client"

export const CREATE_USER = gql `
    mutation createUser(
        $name: String! 
        $username: String! 
        $password: String! 
        )   {
        createUser(
            name: $name
            username: $username
            password: $password
            ) {
                id
                name
                username
                password
                createdAt
            }
    }
        
`

export const CREATE_TODO = gql`
    mutation createTodo( $body: String! )
    {
        createTodo( body: $body )
        {
            id
            body
        }
    }
`

export const DELETE_USER = gql`
    mutation deleteUser(
        $name: String! 
        $password: String!
    ){
        deleteUser(
            name: $name
            password: $password
        )
        {
            successful
            message
        }
    }
`

export const DELETE_TODO = gql`
    mutation deleteTodo($id: Int!)
    {
        deleteTodo(id: $id)
        {
            successful
            message
        }
    }
`

export const UPDATE_TODO = gql`
    mutation updateTodo($id: Int!, $body: String!)
    {
        updateTodo(id: $id, body: $body)
        {
            successful
            message
        }
    }
`