const express = require('express')
const categoryController = require('../controller/categoryController')
const router = express.Router()

router.get('/category', (req, res) => {
  categoryController.getAllCategories(req, res)
})


router.post('/category', (req, res) => {
  categoryController.createCategory(req, res)
})
module.exports = router