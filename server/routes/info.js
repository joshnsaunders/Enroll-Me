const express = require('express')
const router = express.Router()
const database = require('../db/knex.js')

router.get('/info', function(request, response){
  database('info')
  .then(function(data){
    console.log(data)
    console.log('got ur info');;
    response.json(data)
  })
})

router.post('/info', function(request, response){
  database('info')
  .insert(request.body)
  .then(function(data){
    console.log(data)
    console.log('posted ur info')
    response.send(data)
  })
})

router.delete('/info/:id', function(request, response){
  let id = request.params.id
  database('info').select().where('id', id).del()
    .then(function(data) {
      console.log(data);
      console.log('delete info route');
      response.json(data)
})
})

module.exports = router
