'use strict'

const express = require('express')
const { ApolloServer } = require('apollo-server-express')

//first define schemas
const { typeDefs, resolvers } = require('./schemas')

//require de dataSources
const movieAPI = require('./dataSources/movies')
const personAPI = require('./dataSources/persons')

//initialize the server
const app = express()
const server = new ApolloServer({
  typeDefs,
  resolvers,
  dataSources: () => ({
    movieAPI : new movieAPI(),
    personAPI : new personAPI()
  })
})
server.applyMiddleware({app})

//consfigure routes
app.get('/', (req,res) => {
  res.send('elou')
})

app.listen({ port: 4000 }, () => {
  console.log(`🚀 Server ready at http://localhost:4000${server.graphqlPath}`)
})
