'use strict'

const { RESTDataSource } =  require('apollo-datasource-rest')

class personAPI extends RESTDataSource {
  constructor(){
    super()
    this.baseURL = process.env.API_URL || 'http://localhost:3000/api/'
  }

  async getAllPersons(){
    const response = await this.get('persons')
    return Array.isArray(response) ? response.map( this.personReducer ) : []
  }

  async getPersonById(id){
    const response = await this.get(`persons/${id}`)
    return response ? this.personReducer(response) : null
  }

  personReducer(person){
    return {
      id : person.id,
      name : person.name.first+' '+person.name.last,
      aliases : person.aliases,
      moviesAsActor : person.moviesAsActor,
      moviesAsDirector : person.moviesAsDirector,
      moviesAsProducer : person.moviesAsProducer
    }
  }
}

module.exports = personAPI
