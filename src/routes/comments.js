const express = require('express')
const router = express.Router()

const CommentsController = require('../controllers/commentController')

router.get('/', CommentsController.list)
router.get('/:id', CommentsController.listByIdPost)
router.post('/', CommentsController.insertNewComment)

module.exports = router
