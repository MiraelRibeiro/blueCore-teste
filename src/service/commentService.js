const CommentRepository = require('../repository/commentRepository')

module.exports = class CommentService {
  // TODO: Criar m[etodos necessarios para listar os comentrios

  static async list () {
    return await CommentRepository.list()
  }

  static async listByIdPost (id) {
    return await CommentRepository.listByIdPost(id)
  }

  static async insertNewComment (id, user, comment) {
    return await CommentRepository.newComment(id, user, comment)
  }
}
