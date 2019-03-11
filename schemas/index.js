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
    characters: [Character]
    movies: [Movie]
  }
`

const resolvers = {
  Query: {
    //for generic resolvers
  }
}

module.exports = makeExecutableSchema({ typeDefs: [Query, Character, Movie], resolvers: merge(resolvers, characterResolvers, moviesResolvers) })
