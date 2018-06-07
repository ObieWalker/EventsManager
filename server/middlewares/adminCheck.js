import { User } from '../models';
/**
 *
 *
 * @export
 * @class adminCheck
 */
export default class AdminCheck {
/**
 *@returns {boolean} true or false
 *
 * @static
 * @param {*} req
 * @param {*} res
 * @param {*} next
 * @memberof adminCheck
 */
  static isAdmin(req, res, next) {
    return User.findOne({
      where: {
        id: req.decoded.id
      }
    }).then((user) => {
      // checks to see if user already exist
      if (!user.isAdmin) {
        return res.status(403).json({
          success: false,
          message: 'You do not have the admin privileges to do this'
        });
      }
      next();
    });
  }
}
