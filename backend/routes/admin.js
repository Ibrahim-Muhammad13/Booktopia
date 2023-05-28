const express = require('express')
const categoryController = require('../controller/categoryController')
const router = express.Router()
const auth = require('../middlware/auth')
router.get('/category',(req, res) => {
  categoryController.getAllCategories(req, res)
})


router.post('/category', (req, res) => {
  categoryController.createCategory(req, res)
})

router.put('/category/:id', (req, res) => {
  categoryController.updateCategory(req, res)
})
router.delete('/category/:id', (req, res) => {
  categoryController.deleteCategory(req, res)
})
module.exports = router