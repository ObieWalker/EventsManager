import models from '../models';

const Centers = models.Centers
const Users = models.Users

export default class CentersController {
// create a center only if user is admin
  static createCenter (req, res) {
    Users.findOne({
      where: {id: 1}
    }).then((user) => {
      if (!user.isAdmin) {
        return res.status(403).json({message: 'You do not have the admin privileges to do this'})
      } else {
        Centers.create({
          centername: req.body.centername,
          address: req.body.address,
          facility: req.body.facility,
          capacity: req.body.capacity,
          location: req.body.location
        })
          .then(center => {
            res.status(200).json({message: 'The center has been added'})
          })
          .catch((error) =>  {
            res.status(400).json({message: 'Your request could not be processed'});
          })
      }
    })
  }

  static modifyCenter (req, res) {
    // this ensure the id input isnt a string that cannot be converted eg. "five"
    let id = req.params.id
    try {
      parseInt(id)
    } catch (e) {
      return res.status(400).json({message: 'There was an error with the input!'}) 
    } finally {
    // converts to avoid string input
      Centers.findById(id)
        .then((center) => {
          if (!center) { // not found
            return res.status(404).json({message: 'This center is not registered to us'});
          }
          return center.update({
            centername: req.body.centername,
            address: req.body.address,
            facility: req.body.facility,
            capacity: req.body.capacity,
            location: req.body.location
          })
            .then(() => {
              center.reload().then(center => res.status(200).json({
                message: 'Your Center has been modified',
                updated: center
              }))
            })
            .catch((err) => {
              res.status(500).json({ message: 'Could not update', error: err })
            })
        })
    }
  }

  static getAllCenters (req, res) {
    return Centers.findAll({
      order: [['centername', 'DESC']]
    }).then((centers) => {
      if (centers.length > 0) {
        if (req.query) {
          return res.status(200).json({ message: 'Every registered center:', Centers: centers })
        }
      }
      res.status(404).json({ message: 'No Centers' })
    })
  }

  static getCenterDetails (req, res) {
    Centers.findOne({
      where: {
        id: req.params.id,
      },
    })
      .then((center) => {
        if (!center) {
          return res.status(404).json({ message: 'We do not have records of this center' });
        }
        res.status(200).json(center)
      })
  }

  static deleteCenter (req, res) {
    Centers.findById(req.params.id)
      .then((center) => {
        if (!center) { // if no centers
          return res.status(400).send({ message: 'No such center' })
        } // else remove
        return center.destroy()
          .then(res.status(200).send({ message: 'The center has been deleted!' }))
          .catch(error => res.status(400).send(error))
      })
  }
}
