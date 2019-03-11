'use strict'

const express = require('express')
const { ApolloServer, gql } = require('apollo-server-express')
const graphqlHTTP = require('express-graphql')
const casual = require('casual')

//first define schemas
const typeDefs = require('./schema')

//second define resolvers
const resolvers = require('./resolver')

//mocks
const mocks = {
  Character: () => ({
    id: casual.uuid,
    name: casual.full_name,
    aliases: casual.name
  }),
  Movie: () => ({
    id: casual.uuid,
    title: casual.title,
    releaseYearRoman: casual.century
  })
}

//initialize the server
const app = express()
const server = new ApolloServer({ typeDefs, resolvers, mocks})
server.applyMiddleware({app})

//consfigure routes
app.get('/', (req,res) => {
  res.send('elou')
})

app.listen({ port: 4000 }, () => {
  console.log(`🚀 Server ready at http://localhost:4000${server.graphqlPath}`)
})
