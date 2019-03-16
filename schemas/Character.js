'use stritc'

const typeDef = `
  type Character {
    id : ID!
    name : String!
    aliases : String
    films : [Movie]
  }
`

const resolvers = {
  Query: {
    characters: (_, __, { dataSources }) => dataSources.personAPI.getAllPersons()
  }
}
module.exports = {
  typeDef,
  resolvers
}
