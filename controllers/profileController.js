var Profile= require('../models/profile')

module.exports={
	find:(params,callback)=>{
		Profile.find(params,(err,profile)=>{
			if (err){
				callback(err,null);
				return
			}
			callback(null,profile)

		})
	},
	create:(params,callback)=>{
		Profile.create(params,(err,profile)=>{
			if(err){
				callback(err,null)
			}
			callback(null,profile)
		})
	},
	findById: (id,callback)=>{
		Profile.findById(id,(err,profile)=>{
			if(err){
				callback(err,null)
			}
			else(null,profile)
		})
	}
}