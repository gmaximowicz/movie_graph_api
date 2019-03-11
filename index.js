'use strict'

const express = require('express')
const { ApolloServer } = require('apollo-server-express')

//first define schemas
const schema = require('./schemas')

//initialize the server
const app = express()
const server = new ApolloServer({ schema })
server.applyMiddleware({app})

//consfigure routes
app.get('/', (req,res) => {
  res.send('elou')
})

app.listen({ port: 4000 }, () => {
  console.log(`🚀 Server ready at http://localhost:4000${server.graphqlPath}`)
})
