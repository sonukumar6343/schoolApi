const express= require("express");
const router = express.Router();

const {addSchool}= require("../controllers/addSchool");
const {listSchools} = require("../controllers/listSchools");

router.post("/addSchool",addSchool);
router.get("/listSchools",listSchools);

module.exports =router;