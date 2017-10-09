const express = require('express')
const router = express.Router()
const database = require('../db/knex.js')

router.get('/schools', function(request, response){
  database('school')
  .then(function(data){
    console.log(data)
    console.log('got data')
    response.json(data)
  })
})

router.get('/schools/:id', function(request, response){
  let id = request.params.id
  database('school').select().where('id', id)
  .then(function(data){
    console.log(data)
    console.log('got data')
    response.json(data)
  })
})


router.post('/schools', function(request, response){
  database('school')
  .insert(request.body)
  .then(function(data){
    console.log(data)
    console.log('posted school data!')
    response.send(data)
  })
})

router.delete('/schools/:id', function(request, response){
  let id = request.params.id
  database('school').select().where('id', id).del()
    .then(function(data) {
      console.log(data)
      console.log('delete school route')
      response.json(data)
})
})
module.exports = router
