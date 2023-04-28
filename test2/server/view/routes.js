const express = require("express")
const router = express.Router()
const {searchController} = require("../controller/controller")


router.get("/ads/:input",searchController)

router.get("*", (req, res)=>{
    res.json([])
})





module.exports = router