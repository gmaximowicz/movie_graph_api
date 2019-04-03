'use strict'

const { makeExecutableSchema } = require('apollo-server-express');
const { merge } = require('lodash')
const {
  typeDef : Character ,
  resolvers: characterResolvers
} = require('./Character')
const {
  typeDef : Movie ,
  resolvers: moviesResolvers
} = require('./Movie')

const Query = `
  type Query{
    character(id: ID!): Character
    movie(id: ID!): Movie
    characters: [Character]
    movies: [Movie]
  }
`

module.exports = {
  typeDefs: [Query, Character, Movie],
  resolvers: merge(characterResolvers, moviesResolvers)
}
