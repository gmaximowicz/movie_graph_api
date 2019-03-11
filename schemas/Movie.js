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
    movies: () => {
      return [
        {
          id: 1,
          title: 'Back To The Future I',
          releaseYear: 1985,
          releaseYearRoman: 'MCMVXXXV',
          characters: [
            {
              name: 'marty mcfly',
              aliases: 'mcfly'
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
