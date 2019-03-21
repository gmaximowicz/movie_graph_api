'use strict'

const { RESTDataSource } =  require('apollo-datasource-rest')

class movieAPI extends RESTDataSource {
  constructor(){
    super()
    this.baseURL = 'http://localhost:3000/api/'
  }

  async getAllMovies(){
    const response = await this.get('movies')
    return Array.isArray(response) ? response.map(this.movieReducer) : []
  }

  async getMovieById(id){
    const response = await this.get(`movies/${id}`)
    return response ? this.movieReducer(response) : null
  }

  movieReducer(movie){
    return {
      id : movie.id,
      title : movie.title,
      releaseYear : movie.releaseYear,
      releaseYearRoman : movie.releaseYearRoman,
      casting : movie.casting,
      directors : movie.directors,
      producers : movie.producers
    }
  }
}

module.exports = movieAPI
