import React from 'react';
import { ApolloClient, InMemoryCache, ApolloProvider } from '@apollo/client';
import "./App.css"
// import CreateUser from './Component/CreateUser';
// import ListOfUser from './Component/ListOfUser';
import { Todo } from './Component/Todo/Todo';

function App() {

  const client = new ApolloClient({
    uri: 'http://localhost:3001/graphql',
    cache: new InMemoryCache(),
  })

  return <div>
   <ApolloProvider client= { client }>
    {/* <CreateUser />
    <ListOfUser /> */}
    <Todo/>
  </ApolloProvider>
  </div>
}

export default App;
