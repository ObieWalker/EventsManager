
export default class validate {
  static signUpValidator (req, res, next) {
    req.checkBody('email', 'You did not enter a valid email').isEmail()
    req.sanitizeBody('email').normalizeEmail({gmail_remove_subaddress: false, gmail_remove_dots: true})
    req.checkBody('firstname', 'Please enter your first name').notEmpty()
    req.checkBody('lastname', 'Please enter your last name').notEmpty()
    req.checkBody('password', 'You have to input a password please').notEmpty()
    req.checkBody('password', 'Your password must be more than 5 characters').isLength({min: 5, max: undefined})
    req.checkBody('username', 'You have to enter a username').notEmpty()
    req.checkBody('username', 'You have to enter a username').notEmpty()
    req.checkBody('firstname', 'Please make sure your name is written with alphabets only').isAlpha()
    req.checkBody('lastname', 'Please make sure your name is written with alphabets only').isAlpha()
    req.checkBody('username', 'Your user name cannot contain those characters!').isAlphanumeric()

    const errors = req.validationErrors()
    if (errors) {
      res.send(errors)
      return
    }next()// next function
  }

  static signInValidator (req, res, next) {
    req.checkBody('email', 'Please enter a valid email!').isEmail()
    req.sanitizeBody('email').normalizeEmail({gmail_remove_subaddress: false, gmail_remove_dots: true})
    req.checkBody('password', 'You have to enter a password, I cannot do face recognition!').notEmpty()
    req.checkBody('password', 'That definitely was not your password, try to remember, it is longer than that').isLength({min: 5, max: undefined})
    const errors = req.validationErrors()
    if (errors) {
      res.send(errors)
      return
    }
    next()
  }

  static createCenterValidation (req, res, next) {
    req.checkBody('centername', 'Your center must have a name').notEmpty()
    req.checkBody('location', 'You must enter a location').notEmpty()
    req.checkBody('capacity', 'You have to enter the venue capacity').notEmpty()
    req.checkBody('address', 'You have to input an address').notEmpty()
    req.checkBody('capacity', 'The capacity must be an integer value above 10').isInt({gt: 10, lt: 4000000})

    const errors = req.validationErrors()
    if (errors) {
      res.send(errors)
      return
    }
    next()
  }

  static createEventValidation (req, res, next) {
    req.checkBody('eventtype', 'The event type must be one of the options given or choose "other"').notEmpty()
    req.checkBody('eventtype', 'Please just pick the closest match gad damn it').isAlpha()
    req.checkBody('guestno', 'Your guest number must be a number above 2, surely you cannot be that friendless').isInt({gt: 2, lt: 4000000})
    req.checkBody('eventdate', 'You think you are Marty Mcfly? Wanna go back to the past? Pick a future date').isAfter()
    req.checkBody('eventdate').toDate()

    const errors = req.validationErrors()
    if (errors) {
      res.send(errors)
      return
    }
    next()
  }
}
