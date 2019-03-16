'use strict'

const { RESTDataSource } =  require('apollo-datasource-rest')

class personAPI extends RESTDataSource {
  constructor(){
    super()
    this.baseURL = 'https://gmaximowicz-movie-site-api.glitch.me/api/'
  }

  async getAllPersons(){
    const response = await this.get('persons')
    return Array.isArray(response) ? response.map( this.personReducer ) : []
  }

  personReducer(person){
    return {
      id : person.id,
      name : person.name.first+' '+person.name.last,
      aliases : person.aliases
    }
  }
}

module.exports = personAPI
