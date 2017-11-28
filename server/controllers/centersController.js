import validator from 'validatorjs';
import models from '../models';

const {Centers} = models;

const createRules = {
	centername: 'required',
	location: 'required',
    address: 'required',
    capacity: 'required'
};

const modifyRules = {
	centername: 'required',
	location: 'required',
    address: 'required',
    capacity: 'required'
};

//const CentersController = {
    //create a center
    export const createCenter = (req, res)=>{
		const centerValidator1 = new validator(req.body, createRules);
		//if this new instance matches the set conditions
		if(centerValidator1.passes()){
			return Centers.findOne({
				where: {centername: req.body.centername} 
			}).then((center) => {
				if(center) {
					return res.status(400).json({ message: 'A center with this exact name already exists, please pick another for clarity for the end user' });
				}
			}).then(() => Centers.create({
				centername: req.decoded.centername,
				location: req.body.location,
				address: req.body.address,
                facility: req.body.facility,
                capacity: req.body.capacity
			})).then((center) =>{
				 res.status(200).json({ message: 'The center has been added'});
			}).catch((err) => {
				res.status(400).json({message: 'Your request could not be processed'});
			});
		}
		// const errors = Object.values(centerValidator1.errors.errors).map(val => val[0]);
		// res.status(403).json({ message: errors });
    }

    export const modifyCenter = (req, res) =>{
        const centervalidate2 =  new validator(req.body, modifyRules);
		//if it is validated
		if (centervalidate2.passes()) {
			return Center.findOne({
				where : {
					centername: req.params.centername,
				},
			}).then((center) =>{
				if(!center) {
					res.status(404).json({ message: 'This center is not registered to us'});
				}else if (CentersId === req.decoded.id){
					center.update({
						eventype: req.body.eventype,
						eventdate: req.body.eventdate,
						guestno: req.body.guestno
					})
					.then(()=> {
						event.reload().then(event => res.status(200).json({
							message: 'Your event has been updated',
							updated: event,
						}));
					})
					.catch((err) => {
						res.status(500).json({ message: 'Could not update', error: err });
					});
				} else {
					res.status(403).json({ message: 'This user is not allowed to update' });
				}
			})
			.catch((err) => {
				res.status(400).json({
				message: 'Cannot do that right now',
				Error: err.name
				});
			});
		}
		const errors = Object.values(valivalidate.errors.errors).map(val => val[0]);
		res.status(403).json({ message: errors });
    }
    
    export const getAllCenters = (req, res) => {
        return Centers.findAll({
            order: [['centername', 'DESC']]
          }).then((centeres) => {
            if (centers.length > 0) {
              if (req.query) {
                   return res.status(200).json({ message: 'Every registered center:', List: centers }); }
            }
            res.status(404).json({ message: 'No Centers' });
          });
    }

    export const getCenterDetails = (req, res) => {
        Centers.findOne({
            where: {
              id: req.params.recipeId,
            },
          })
            .then((center) => {
              if (!center) {
                return res.status(404).json({ message: 'We do not have records of this center' });
              }
              res.status(200).json(center);
            });

    }

    export const deleteCenter = (req, res) => {
        const centerhere = req.params.recipeId;
        
            if (centerhere < 1) {
              return res.status(404).json({ message: 'We do not have records of this center' });
            }
            return Centers.findById(centerhere).then((center) => {
              if (!center) {
                res.status(404).json({ message: 'Center not registered with our records' });
              }
              if (centerId === req.decoded.id) {
                center.destroy();
                res.status(200).json({ message: 'Center has been removed' });
              } else {
                res.status(403).json({ message: 'Only authorized admins are allowed to remove centers' });
              }
            })
              .catch(Error => res.status(500).json({ message: 'Server Error', Error }));
          

    }
	
    


