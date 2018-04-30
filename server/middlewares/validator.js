import moment from 'moment';
/**
 * @returns {object} message
 *
 * @export
 * @class validate
 */
export default class validate {
  /**
   *
   * @static
   * @param {any} req
   * @param {any} res
   * @param {any} next
   * @returns {object} message
   * @memberof validate
   */
  static signUpValidator(req, res, next) {
    req.checkBody('email', 'You did not enter a valid email').isEmail();
    req.checkBody('email', 'You did not enter a valid email').notEmpty();
    req.sanitizeBody('email').normalizeEmail({
      gmail_remove_subaddress: false, gmail_remove_dots: true
    });
    req.checkBody('firstName', 'Please enter your first name').notEmpty();
    req.checkBody('lastName', 'Please enter your last name').notEmpty();
    req.checkBody('password', 'You have to input a password please').notEmpty();
    req.checkBody(
      'password',
      'Your password must be more than 5 characters'
    ).isLength({
      min: 5, max: undefined
    });
    req.checkBody(
      'verifyPassword',
      'You have to verify your password'
    ).notEmpty();
    req.checkBody('username', 'You have to enter a username').notEmpty();

    const errors = req.validationErrors();
    if (errors) {
      res.status(400).json({
        success: false, message: errors[0].msg, error: errors
      });
      return;
    }next();// next function
  }
  /**
 *
 *
 * @static
 * @param {any} req
 * @param {any} res
 * @param {any} next
 * @returns {object} message
 * @memberof validate
 */
  static signInValidator(req, res, next) {
    req.checkBody('email', 'Please enter a valid email!').isEmail();
    req.sanitizeBody('email').normalizeEmail({
      gmail_remove_subaddress: false, gmail_remove_dots: true
    });
    req.checkBody('password', 'You must enter a passwword').notEmpty();
    req.checkBody(
      'password',
      'Your password must be more than 5 characters'
    ).isLength({
      min: 5, max: undefined
    });

    const errors = req.validationErrors();
    if (errors) {
      res.status(400).json({
        success: false, message: errors[0].msg, error: errors
      });
      return;
    }
    next();
  }
  /**
 *
 *
 * @static
 * @param {any} req
 * @param {any} res
 * @param {any} next
 * @returns {object} message
 * @memberof validate
 */
  static centerValidation(req, res, next) {
    req.checkBody('name', 'Your center must have a name').notEmpty();
    req.checkBody('city', 'You must enter a city').notEmpty();
    req.checkBody(
      'capacity',
      'You have to enter the venue capacity'
    ).notEmpty();
    req.checkBody('address', 'You have to input an address').notEmpty();
    req.checkBody(
      'capacity',
      'The capacity must be an integer value above 10'
    ).isInt({
      gt: 10, lt: 4000000
    });

    const errors = req.validationErrors();
    if (errors) {
      res.status(400).json({
        success: false, message: errors[0].msg, error: errors
      });
      return;
    }
    next();
  }
  /**
 *
 *
 * @static
 * @param {any} req
 * @param {any} res
 * @param {any} next
 * @returns {object} message
 * @memberof validate
 */
  static eventValidation(req, res, next) {
    req.checkBody('centerId', 'You have to enter a center').notEmpty();
    req.checkBody('eventType', 'The event type cannot be empty').notEmpty();
    req.checkBody(
      'guestNo',
      'Your guest estimate must be a number more than 2'
    ).isInt({ gt: 2 });
    // req.checkBody('date').isDate();
    req.checkBody('date', 'Your date entry cannot be empty').notEmpty();
    req.checkBody(
      'date',
      'Your date cannot be in the past'
    ).isAfter();

    const errors = req.validationErrors();
    if (moment(req.body.date).isValid() === false) {
      errors[0].msg = 'Invalid date';
    }
    if (errors) {
      res.status(400).json({
        success: false, message: errors[0].msg, error: errors
      });
      return;
    }
    next();
  }
}
