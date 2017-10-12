var express= require('express');
var router= express.Router();
var profile= require('../controllers/profileController')

router.get('/:resource',(req,res)=>{
	var resource =req.params.resource
	if(resource == 'profile'){

	profile.find(req.query ,(err,result)=>{
		if (err){
			res.json({
				confirmation: 'fail',
				message:err
			})
			return
		}
		res.json({
			confirmation:'success',
			result:result
		})
	})
	return
}
	res.json({
		confirmation:'fail',
		message : 'resource not supported :'+resource
	})
})

router.post('/:resource',(req,res)=>{
	var resource =req.params.resource
	if(resource == 'profile'){
		profile.create(req.body,(err,result)=>{
			if(err){
				res.json({
					confirmation:'fail',
					message: err
				})
				return
			}
			res.json({
				confirmation:'success',
				result:result
			})

		})
		return


	}
	res.json({
		confirmation:'fail',
		message:'resource not supported: '+resource
	})
})
	
	router.get('/:resource/:id',(req,res)=>{
		var resource=req.params.resource
		var id = req.params.id

		if(resource == 'profile'){
			profile.findById(id, (err,result)=>{
				if(err){
					res.json({
						confirmation:'fail',
						message: err
					})
					return
				}
				res.json({
					confirmation:'success',
					result:result
				})
			})
			return
		}
		res.json({
			confirmation:fail,
			message: 'Resource '+resource +' not supported.'
		})
	})

module.exports=router;