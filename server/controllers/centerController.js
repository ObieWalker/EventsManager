import validator from 'validatorjs';
import Sequelize from 'sequelize';
import models from '../models';

const {Centers} = model,
const {Events} = model;


const centerRules = {
	name: 'required',
	location: 'required',
	facility: 'required',
};

const centerController = {
	//this controller returns all centers
	getCentersDetails(req, res){
		return Centers.findAll().then((centers) =>{
			if (centers.length > 0) {
				if( req.query) {
					return res.status(200).json({message: 'Every Center:', List: centers});
				}
			}
			res.status(404).json({message: 'Not centers found'});
		});
	},

	//this will get just the basic center name and location
	getCenters(req, res){
		return sequelize.query(`SELECT name, location FROM "Centers";`, {type:Sequelize.QueryTypes.SELECT})
		.then(centers => res.status(200).json({message: 'All centers', List: centers}))
		.catch(err => res.status(404).json(err));
	}

	//this will add a new center
	createCenter(req, res){
		Center.create({
			name:req.body.name,
			location:req.body.location,
			facility:req.body.facility
		}).then((center) => {
			res.status(200).json({message:'Center has been created', Details: center});
		})
		.catch(() => {
			res.status(400).json({ message: 'Request failed'});
		});
	},

	modifyCenter(req, res){
		return Center.findOne({
			where: {
				id: req.params.centerId,
			},
		})
		.then((center)=> {
			//if the searched for center does not exist then return error
			if(!center){
				res.status(404).json({message: 'No such center'});
			} else {
				center.update({
					name:req.body.name,
					location: req.body.location,
					facility: req.body.facility
				})
				.then(() => {
					center.reload(),then(center => res.status(200).json({
						message: 'Center has been updated',
						updated: center,
					}));
				})
				.catch((err) => {
					res.staus(500).json({message: 'Cant update the center', error: err});
				});
			}else{ //authorization that will be implemented in the future
				res.status(403).json({message: 'You are not aauthorized to edit the details of a center'});
			}
		})
		.catch((err) =>{
			res.status(400).json({
				message: 'Request cannot be processed now',
				err: err.name
			});
		})

	},
};

export default centerController;