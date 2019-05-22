'use strict'

const config = require('./../config')
const store = require('../store')
const app = require('../app')

const create = function (formData) {
  return $.ajax({
    url: config.apiUrl + '/games',
    method: 'POST',
    headers: {
      Authorization: 'Token token=' + store.user.token
    }

  })
}
const updateGame = function (boardIndex, cellValue, boolean) {
  // console.log('updateGame')
  console.log('store.game: ', store.game)
  const id = store.game.id
  return $.ajax({
    url: config.apiUrl + '/games/' + id,
    method: 'PATCH',
    data: {
      'game': {
        'cell': {
          'index': boardIndex,
          'value': cellValue
        },
        'over': boolean
      },
      headers: {
        Authorization: 'Token  token=' + store.user.token
      }

    }

  })
}
// gameOver()
const getGames = function (formData) {
  // make GET request to  /games
  return $.ajax({
    url: config.apiUrl + '/games',
    method: 'GET',
    data: formData,
    headers: {
      Authorization: 'Token token=' + store.user.token
    }
  })
}


  getGames,
  show,
  updateGame,
  create
}
