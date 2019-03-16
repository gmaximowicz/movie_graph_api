'use strict'

const typeDef = `
  type Movie {
    id : ID!
    title : String!
    releaseYear : Int!
    releaseYearRoman : String!
    characters : [Character]
  }
`

const resolvers = {
  Query: {
    movies: async (_, __, { dataSources }) => dataSources.movieAPI.getAllMovies()
  }
}

module.exports = {
  typeDef,
  resolvers
}
