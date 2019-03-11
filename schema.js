'use strict'

const { gql } = require('apollo-server-express')

const typeDefs = gql`
  """ Character type definition """
  type Character {
    id : ID!
    name : String!
    aliases : String
    films : [Movie]
  }

  type Movie {
    id : ID!
    title : String!
    releaseYear : Int!
    releaseYearRoman : String!
    characters : [Character]
  }

  type Query{
    characters: [Character]
    movies: [Movie]
  }
`

module.exports = typeDefs
