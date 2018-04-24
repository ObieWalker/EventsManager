
export default class validate {
  static signUpValidator(req, res, next) {
    req.checkBody('email', 'You did not enter a valid email').isEmail();
    req.sanitizeBody('email').normalizeEmail({ gmail_remove_subaddress: false, gmail_remove_dots: true });
    req.checkBody('firstName', 'Please enter your first name').notEmpty();
    req.checkBody('lastName', 'Please enter your last name').notEmpty();
    req.checkBody('password', 'You have to input a password please').notEmpty();
    req.checkBody('password', 'Your password must be more than 5 characters').isLength({ min: 5, max: undefined });
    req.checkBody('username', 'You have to enter a username').notEmpty();
    req.checkBody('username', 'You have to enter a username').notEmpty();
    req.checkBody('firstName', 'Please make sure your name is written with alphabets only').isAlpha();
    req.checkBody('lastName', 'Please make sure your name is written with alphabets only').isAlpha();
    req.checkBody('username', 'Your user name cannot contain those characters!').isAlphanumeric();

    const errors = req.validationErrors();
    if (errors) {
      res.status(400).json({ error: errors });
      return;
    }next();// next function
  }

  static signInValidator(req, res, next) {
    req.checkBody('email', 'Please enter a valid email!').isEmail();
    req.sanitizeBody('email').normalizeEmail({ gmail_remove_subaddress: false, gmail_remove_dots: true });
    req.checkBody('password', 'You must enter a passwword').notEmpty();
    req.checkBody('password', 'Your password must be more than 5 characters').isLength({ min: 5, max: undefined });
    const errors = req.validationErrors();
    if (errors) {
      res.status(400).json({ error: errors });
      return;
    }
    next();
  }

  static centerValidation(req, res, next) {
    req.checkBody('name', 'Your center must have a name').notEmpty();
    req.checkBody('city', 'You must enter a location').notEmpty();
    req.checkBody('capacity', 'You have to enter the venue capacity').notEmpty();
    req.checkBody('address', 'You have to input an address').notEmpty();
    req.checkBody('capacity', 'The capacity must be an integer value above 10').isInt({ gt: 10, lt: 4000000 });

    const errors = req.validationErrors();
    if (errors) {
      res.status(400).json({ error: errors });
      return;
    }
    next();
  }

  static eventValidation(req, res, next) {
    req.checkBody('eventType', 'The event type must be one of the options given or choose "other"').notEmpty();
    req.checkBody('eventType', 'An event type must be one of the drop down options').isAlpha();
    req.checkBody('guestNo', 'Your guest estimate must be a number ').isInt({ gt: 2, lt: 4000000 });
    req.checkBody('date').toDate();
    req.checkBody('date', 'Your date cannot be in the past').isAfter();
    req.checkBody('email', 'Please enter a valid email!').isEmail();
    req.sanitizeBody('email').normalizeEmail({ gmail_remove_subaddress: false, gmail_remove_dots: true });

    const errors = req.validationErrors();
    if (errors) {
      res.status(400).json({ error: errors });
      return;
    }
    next();
  }
}
