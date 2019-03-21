'use stritc'

const typeDef = `
  type Character {
    id : ID!
    name : String!
    aliases : String
    moviesAsActor : [Movie]!
    moviesAsDirector : [Movie]!
    moviesAsProducer : [Movie]!
  }
`

const resolvers = {
  Query: {
    characters: async (_, __, { dataSources }) => {
      const persons = await dataSources.personAPI.getAllPersons()
      return persons
    }
  },
  Character: {
    moviesAsActor: async (parent , __, { dataSources }) => {
      const movies = parent.moviesAsActor
      return movies && movies.map(dataSources.movieAPI.movieReducer) || []
    },
    moviesAsDirector: async (parent , __, { dataSources }) => {
      const movies = parent.moviesAsDirector
      return movies && movies.map(dataSources.movieAPI.movieReducer) || []
    },
    moviesAsProducer: async (parent , __, { dataSources }) => {
      const movies = parent.moviesAsProducer
      return movies && movies.map(dataSources.movieAPI.movieReducer) || []
    }
  }
}
module.exports = {
  typeDef,
  resolvers
}
