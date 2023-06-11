const CommentService = require('../service/commentService')

module.exports = class CommentController {
  // TODO: Criar metodo que retorna a lista de comentarios no banco de dados
  static list (request, response, next) {
    CommentService.list()
      .then((unities) => response.status(200).send(unities))
      .catch(next)
  }

  static listByIdPost (request, response, next) {
    CommentService.listByIdPost(request.params.id)
      .then((unities) => response.status(200).send(unities))
      .catch(next)
  }

  static insertNewComment (request, response, next) {
    const { id, user, comment } = request.body

    CommentService.insertNewComment(id, user, comment)
      .then((unities) => response.status(200).send(unities))
      .catch(next)
  }
}
