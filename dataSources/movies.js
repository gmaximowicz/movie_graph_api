'use strict'

const { RESTDataSource } =  require('apollo-datasource-rest')

class movieAPI extends RESTDataSource {
  constructor(){
    super()
    this.baseURL = 'https://gmaximowicz-movie-site-api.glitch.me/api/'
  }

  async getAllMovies(){
    const response = await this.get('movies')
    return Array.isArray(response) ? response.map( this.movieReducer ) : []
  }

  movieReducer(movie){
    return {
      id : movie.id,
      title : movie.title,
      releaseYear : movie.releaseYear,
      releaseYearRoman : movie.releaseYearRoman
    }
  }
}

module.exports = movieAPI
