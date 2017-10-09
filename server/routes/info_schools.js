const express = require('express')
const router = express.Router()
const database = require('../db/knex.js')

router.get('/info_schools/:email', function(request, response){
  let email = request.params.email
  database('school')
  .select('schoolName')
  .join('info_school', 'school.id', 'info_school.school_id')
  .join('info', 'info.id', 'info_school.info_id')
  .where('email', email)
  .then(function(data){
    response.json(data)
  })
})

router.post('/info_schools', function(request, response){
  database('info')
  .insert(request.body)
  .then(function(data){
    console.log(data)
    console.log('posted data!')
    response.send(data)
  })
})

module.exports = router


// let id = request.params.id;
// return database.from('author')
// .select('book.id', 'author.firstName', 'author.lastName')
// .join('author_book', 'author.id', 'author_book.author_id')
// .join('book', 'book.id', 'author_book.book_id')
// .where('book.id', id)
//   .then(function(data) {
//     console.log('author by id route');
//     response.send(data)
