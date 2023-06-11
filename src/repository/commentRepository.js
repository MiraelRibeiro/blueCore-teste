const database = require('../config/database')

module.exports = class CommentRepository {
  // TODO: Criar aqui o metodo que busca os comentarios no banco de dados

  static async list () {
    const result = await database
      .select(
        'Id',
        'PostId',
        'UserName',
        'Comment',
        'CreatedAt',
        'UpdatedAt'
      )
      .from('Comments')

    return result
  }

  static async listByIdPost (id) {
    const result = await database
      .select(
        'Id',
        'PostId',
        'UserName',
        'Comment',
        'CreatedAt',
        'UpdatedAt'
      )
      .from('Comments')
      .where({ PostId: id })

    return result
  }

  static async newComment (id, user, comment) {
    const result = await database
      .insert({ UserName: user, PostId: id, Comment: comment })
      .into('Comments')

    return result
  }
}
