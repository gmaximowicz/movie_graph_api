'use strict'

const typeDef = `
  type Movie {
    id : ID!
    title : String!
    releaseYear : Int!
    releaseYearRoman : String!
    casting : [Character],
    directors : [Character],
    producers : [Character]
  }
`

const resolvers = {
  Query: {
    movies: async (_, __, { dataSources }) => dataSources.movieAPI.getAllMovies()
  },
  Movie: {
    casting: async (parent , __, { dataSources }) => {
      const movie = await dataSources.movieAPI.getMovieById(parent.id)
      return movie && movie.casting && movie.casting.map(dataSources.personAPI.personReducer) || []
    },
    directors: async (parent , __, { dataSources }) => {
      const movie = await dataSources.movieAPI.getMovieById(parent.id)
      return movie && movie.directors && movie.directors.map(dataSources.personAPI.personReducer) || []
    },
    producers: async (parent , __, { dataSources }) => {
      const movie = await dataSources.movieAPI.getMovieById(parent.id)
      return movie && movie.producers && movie.producers.map(dataSources.personAPI.personReducer) || []
    }
  }
}

module.exports = {
  typeDef,
  resolvers
}
