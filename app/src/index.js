import React from 'react'
import ReactDOM from 'react-dom'
import App from './App'
import ApolloClient from 'apollo-boost'
import { ApolloProvider } from '@apollo/react-hooks'
import GlobalStyles from './styles/global'

const client = new ApolloClient({ uri: 'http://localhost:3000/graphql' })

ReactDOM.render(
  <ApolloProvider client={client}>
    <GlobalStyles />
    <App />
  </ApolloProvider>
,document.getElementById('root'))