import { Center, User } from '../models';
import { paginateData } from '../helpers/helper';

const Centers = Center;
const Users = User;

export default class CentersController {
// create a center only if user is admin
  static createCenter(req, res) {
    Users.findById(req.decoded.id).then((user) => {
      if (user.isAdmin !== true) {
        return res.status(403).json({ success: false, message: 'You do not have the admin privileges to do this' });
      }
      Center.findOne({
        where: {
          name: req.body.name
        }
      }).then((matchCenter) => {
        if (matchCenter) {
          return res.status(409).json({
            message: 'Center already exists'
          });
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
            res.status(201).json({ success: true, message: 'The center has been added', center });
          })
          .catch((error) => {
            res.status(400).json({ success: false, message: 'Your request could not be processed', error: error.messsage });
          });
      })
        .catch((error) => {
          res.status(403).json({ success: false, message: 'You do not have the admin rights to add a center', error });
        });
    });
  }

  static modifyCenter(req, res) {
    // this ensure the id input isnt a string that cannot be converted eg. "five"
    Users.findById(req.decoded.id)
      .then((user) => {
        if (user.isAdmin !== true) {
          return res.status(403).json({ success: false, message: 'You do not have the admin privileges to do this' });
        }
        const { id } = req.params;
        const intId = parseInt(id, 10);
        if (!Number.isInteger(intId)) {
          return res.status(400).json({ success: false, message: 'There was an error with the center ID input!' });
        }
        if (Number.isNaN(intId)) {
          return res.status(400).json({ success: false, message: 'There was an error with the center ID input!' });
        }
        Centers.findById(id)
          .then((center) => {
            if (!center) { // not found
              return res.status(404).json({ success: true, message: 'No center found' });
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
                    success: true,
                    message: 'The center has been modified',
                    updated: center
                  }));
              })
              .catch((err) => {
                res.status(500).json({ success: false, message: 'Could not update', error: err });
              });
          });
      });
  }

  static getAllCenters(req, res) {
    const limit = parseInt(req.query.limit, 10) || 140000;
    let offset = 0;
    const pageNo = parseInt(req.query.pageNo, 10) || 1;
    offset = limit * (pageNo - 1);
    return Centers.findAndCountAll({
      order: [['name', 'DESC']],
      limit,
      offset
    }).then(centers => paginateData({
      req, res, centers, limit, pageNo
    }))
      .catch((error) => {
        res.status(500).json({ message: 'Your request had an error', error });
      });
  }

  static getCenterDetails(req, res) {
    const { id } = req.params;
    const intId = parseInt(id, 10);
    if (!Number.isInteger(intId) || Number.isNaN(intId) || Math.sign(id) === -1) {
      return res.status(400).json({ success: false, message: 'There was an error with the center ID input!' });
    }
    Centers.findOne({
      where: {
        id
      }
    })
      .then((center) => {
        if (!center) {
          return res.status(404).json({ success: false, message: 'We do not have records of this center' });
        }
        res.status(200).json({ success: true, message: 'Here is your center', center });
      })
      .catch(error => res.status(400).json({ success: false, error }));
  }

  static deleteCenter(req, res) {
    Users.findById(req.decoded.id).then((user) => {
      if (user.isAdmin !== true) {
        return res.status(403).json({ success: false, message: 'You do not have the admin privileges to do this' });
      }
      const { id } = req.params;
      const intId = parseInt(id, 10);
      if (!Number.isInteger(intId) || Number.isNaN(intId) || Math.sign(id) === -1) {
        return res.status(400).json({ success: false, message: 'There was an error with the center ID input!' });
      }
      Centers.findById(id)
        .then((center) => {
          if (!center) { // if no centers
            return res.status(400).send({ success: false, message: 'No such center' });
          } // else remove
          return center.destroy()
            .then(res.status(200).send({ success: true, message: 'The center has been deleted!' }))
            .catch(error => res.status(400).send(error));
        });
    });
  }
}
