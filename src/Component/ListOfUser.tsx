import React from 'react' 
// import { GET_ALL_USER } from "../Graphql/Queries"
// import { useQuery, useMutation } from "@apollo/client"
// import { DELETE_USER } from '../Graphql/Mutation'
// import {Button} from '@chakra-ui/react'


// function ListOfUser() {

//     const [deleteThisUser, { error, data: data2 }] = useMutation(DELETE_USER)
//     const { data } = useQuery(GET_ALL_USER)

//     const deleteUser = async (name: string, password: string) =>
//     {
//         await deleteThisUser({
//             variables:
//             {
//                 name: name,
//                 password: password,
//             }
//         })
//         console.log(data2)
//     }

//     return (
//         <div>
//             {data && data.getAllUsers.map((user: any) => 
//             {
//                 return (
//                     <div key = {user.id}>
//                         {user.name} / {user.username} 
//                         &nbsp;
//                         {/* <Button size="md" colorScheme="red" onClick= { () => deleteThisUser({ variables: { name: user.name, password: user.password} }) }>Delete</Button> */}
//                         <Button size="md" colorScheme="red" onClick= { () => deleteUser(user.name, "123456") }>Delete</Button>
//                     </div>
//                 )
//             })}
//         </div>
//     )
// }

// export default ListOfUser
