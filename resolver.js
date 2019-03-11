'use strict'

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
    },
    movies: () => {
      return [
        {
          id: 1,
          title: 'Back To The Future I',
          releaseYear: 1985,
          releaseYearRoman: 'MCMVXXXV',
          casting: [
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

module.exports = resolvers
