import model from '../database/models';

/**
 * GET facility
 * */

const getFacilities=async(req, res)=>{
  try {
    const _facility = await model.Facility.findAll();
    return res.status(200).json({ _facility });
  } catch (error) {
    return res.status(500).send(error.message);
  }
}

/**
 * POST facility
 * */

 const addFacility=async(req, res)=>{
  try {
    const _facility = await model.Facility.create(req.body);
    return res.status(201).json({_facility});
  } catch (error) {
    return res.status(500).json({ error: error.message });
  }
 }


module.exports={getFacilities,addFacility}
