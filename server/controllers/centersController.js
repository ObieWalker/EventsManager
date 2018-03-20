import { Center, User } from '../models';

const Centers = Center;
const Users = User;

export default class CentersController {
// create a center only if user is admin
  static createCenter(req, res) {
    console.log('up above ----->', req.body);
    return Users.findById(req.decoded.id).then((user) => {
      if (user.isAdmin !== true) {
        return res.status(403).json({ message: 'You do not have the admin privileges to do this' });
      }
      Centers.create({
        userId: req.decoded.id,
        name: req.body.name,
        address: req.body.address,
        facility: req.body.facility,
        capacity: req.body.capacity,
        city: req.body.city,
        image: req.body.image
      })
        .then((center) => {
          res.status(201).json({ message: 'The center has been added', center });
        })
        .catch((error) => {
          res.status(400).json({ message: 'Your request could not be processed', error: error.messsage });
        });
    })
      .catch((error) => {
        res.status(403).json({ message: 'You do not have the admin rights to add a center', error });
      });
  }

  static modifyCenter(req, res) {
    // this ensure the id input isnt a string that cannot be converted eg. "five"
    Users.findById(req.decoded.id)
      .then((user) => {
        if (user.isAdmin !== true) {
          return res.status(403).json({ message: 'You do not have the admin privileges to do this' });
        }
        const { id } = req.params;
        // { id } = req.params
        try { // avoid user having a string input as id
          parseInt(id, 10);
        } catch (e) {
          return res.status(400).json({ message: 'There was an error with the input!' });
        } finally {
          Centers.findById(id)
            .then((center) => {
              if (!center) { // not found
                return res.status(404).json({ message: 'No center found' });
              }
              return center.update({
                userId: req.decoded.id,
                name: req.body.name,
                address: req.body.address,
                facility: req.body.facility,
                capacity: req.body.capacity,
                city: req.body.city,
                image: req.body.image
              })
                .then(() => {
                  center.reload()
                    .then(() => res.status(200).json({
                      message: 'The center has been modified',
                      updated: center
                    }));
                })
                .catch((err) => {
                  res.status(500).json({ message: 'Could not update', error: err });
                });
            });
        }
      });
  }

  static getAllCenters(req, res) {
    console.log('KLKSDKLDSKLDLKJFKLJFSJKLSFS');
    return Centers.findAll({
      order: [['name', 'DESC']]
    }).then((centers) => {
      if (centers.length > 0) {
        if (req.query) {
          return res.status(200).json({ message: 'Every registered center:', Centers: centers });
        }
      }
      res.status(404).json({ message: 'No Centers' });
    });
  }

  static getCenterDetails(req, res) {
    Centers.findOne({
      where: {
        id: req.params.id
      }
    })
      .then((center) => {
        if (!center) {
          return res.status(404).json({ message: 'We do not have records of this center' });
        }
        res.status(200).json(center);
      })
      .catch(error => res.status(400).send(error));
  }

  static deleteCenter(req, res) {
    Users.findById(req.decoded.id).then((user) => {
      if (user.isAdmin !== true) {
        return res.status(403).json({ message: 'You do not have the admin privileges to do this' });
      }
      const { id } = req.params;
      try {
        parseInt(id, 10);
      } catch (e) {
        return res.status(400).json({ message: 'There was an error with the input!' });
      } finally {
        Centers.findById(id)
          .then((center) => {
            if (!center) { // if no centers
              return res.status(400).send({ message: 'No such center' });
            } // else remove
            return center.destroy()
              .then(res.status(200).send({ message: 'The center has been deleted!' }))
              .catch(error => res.status(400).send(error));
          });
      }
    });
  }
}
