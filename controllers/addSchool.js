    const School = require("../models/schools");
   
  

    exports.addSchool = async(req,res)=>{
        const { name, address, latitude, longitude } = req.body;
    // Input Validation
    if (!name || !address || latitude == null || longitude == null) {
      return res.status(400).json({ error: 'All fields are required.' });
    }
  
    if (typeof name !== 'string' || typeof address !== 'string') {
      return res.status(400).json({ error: 'Name and address must be strings.' });
    }
  
    if (typeof latitude !== 'number' || typeof longitude !== 'number') {
      return res.status(400).json({ error: 'Latitude and longitude must be numbers.' });
    }
  
    if (latitude < -90 || latitude > 90) {
      return res.status(400).json({ error: 'Latitude must be between -90 and 90.' });
    }
  
    if (longitude < -180 || longitude > 180) {
      return res.status(400).json({ error: 'Longitude must be between -180 and 180.' });
    }
  
    try {
      // Insert the new school into the database
      const newSchool = await School.create({ name, address, latitude, longitude });
      res.status(201).json({ message: 'School added successfully.', school: newSchool });
    } catch (error) {
      console.error('Error adding school:', error);
      res.status(500).json({ error: 'Failed to add school. Please try again later.' });
    }}
  ;