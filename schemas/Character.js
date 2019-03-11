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
    characters: () => {
      return [
        {
          id: 1,
          name: 'marty mcfly',
          aliases: 'mcfly',
          films : [
            {
              title: 'Back To The Future I',
              releaseYearRoman: 'MCMVXXXV'
            }
          ]
        },
        {
          id: 2,
          name: 'dr. emmett brown',
          aliases: 'doc',
          films : [
            {
              title: 'Back To The Future I',
              releaseYearRoman: 'MCMVXXXV'
            }
          ]
        }
      ]
    }
  }
}
module.exports = {
  typeDef,
  resolvers
}
