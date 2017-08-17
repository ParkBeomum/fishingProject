const express = require('express');
const router = express.Router();

//declare axios for making http requests
const axios = require('axios');
const API = 'https://jsonplaceholder.typicode.com'



/* Get api listing */
router.get('/',(req,res)=>{
  res.send('api work');
})

//get all posts
router.get('/posts',(req,res) => {
  //Get post from the mock api
  //This should ideally be replaced width a service the connects to MongoDB
  axios.get(`${API}/posts`)
  .then(posts => {
    res.status(200).json(posts.data);
  })
  .catch(error => {
    res.status(500).send(error);
  })
});

module.exports = router;
