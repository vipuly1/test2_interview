const {ad} = require("../model/adsSchema")
const {comp} = require("../model/compSchema")

const searchController = (req, res) =>{
    let keyword = req.params.input
    
    ad.aggregate([{
                $lookup:{
                    from:"companies",
                    localField:"companyId",
                    foreignField:"_id",
                    as:"company"
                },
            },
            {
                $unwind:"$company"
            },{
                $match:{
                    $or:[{primaryText:{$regex: keyword, $options:"i"}},
                    {description:{$regex: keyword, $options:"i"}},
                    {headline:{$regex: keyword, $options:"i"}},
                    {"companies.name":{$regex: keyword, $options:"i"}}
                    ]
                }
            }
           
            ],(err, data)=>{
                if(err){
                    res.json(err)
                }
                else{
                res.json(data)
                }
            })
}

module.exports = {searchController}