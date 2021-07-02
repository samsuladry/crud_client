import { gql } from "@apollo/client"

// export const GET_ALL_USER = gql `
//     query getAllUsers {
//         getAllUsers{
//             id
//             name
//             username
//             password
//             createdAt
//         }
//     }
        
// `

export const GET_ALL_TODOS =gql`
    query getAllTodos {
        getAllTodos{
            id
            body
        }
    }
`

export const GET_TODO = gql`
    query getTodo(
        $id: Int!
    ){
        getTodo(
            id: $id
        ){
            id
            body
        }
    }
`