const User = require('./user')
const Category = require('./category')
const Transaction = require('./transaction')
const Budget = require('./budget')
/**
 * If we had any associations to make, this would be a great place to put them!
 * ex. if we had another model called BlogPost, we might say:
 *
 *    BlogPost.belongsTo(User)
 */
User.hasMany(Budget)
User.hasMany(Transaction)
Transaction.belongsTo(User)
Budget.belongsTo(User)

Budget.belongsTo(Category)
Transaction.belongsTo(Category)
/**
 * We'll export all of our models here, so that any time a module needs a model,
 * we can just require it from 'db/models'
 * for example, we can say: const {User} = require('../db/models')
 * instead of: const User = require('../db/models/user')
 */
module.exports = {
  User,
  Category,
  Transaction,
  Budget,
}
