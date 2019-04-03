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
    character: async (_, params, { dataSources }) => {
      const character = await dataSources.personAPI.getPersonById(params.id)
      return character
    },
    characters: async (_, __, { dataSources }) => {
      const persons = await dataSources.personAPI.getAllPersons()
      return persons
    }
  },
  Character: {
    moviesAsActor: async (parent , __, { dataSources }) => {
      const person = await dataSources.personAPI.getPersonById(parent.id)
      return person && person.moviesAsActor && person.moviesAsActor.map(dataSources.movieAPI.movieReducer) || []
    },
    moviesAsDirector: async (parent , __, { dataSources }) => {
      const person = await dataSources.personAPI.getPersonById(parent.id)
      return person && person.moviesAsDirector && person.moviesAsDirector.map(dataSources.movieAPI.movieReducer) || []
    },
    moviesAsProducer: async (parent , __, { dataSources }) => {
      const person = await dataSources.personAPI.getPersonById(parent.id)
      return person && person.moviesAsProducer && person.moviesAsProducer.map(dataSources.movieAPI.movieReducer) || []
    }
  }
}
module.exports = {
  typeDef,
  resolvers
}
