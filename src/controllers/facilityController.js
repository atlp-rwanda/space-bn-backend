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

 /**
 * PATCH facility
 * */
 const updateFacility = async(req, res)=> { 
    try {    
      const _facility=await model.Facility.findOne({ where: { id:req.params.id } });
      if(_facility){
        const _facilityResult = await model.Facility.update(req.body, { where: { id: req.params.id}});
        if(_facilityResult) {
          const data=await model.Facility.findOne({ where: { id:req.params.id } });
          res.status(200).send({
            status: "Ok",
            message: res.__('facility updated succeddfuly'),
            data
          });
        }
      }else{
        res.status(404).send({
          status: "bad",
          message: "facility  not found!",
          data
        });
      }    
    } catch {
      res.status(404).send({ message: res.__('facility not found!')});
    }
  }

  /**
 * Delete facility
 * */
  const deleteFacility=async(req, res) =>{
    try {
      const _facility = await model.Facility.findOne({where:{ id: req.params.id }});
      if (_facility) {
        await model.Facility.destroy({where:{ id: req.params.id }});
        res.status(200).send({message: res.__('facility deleted successfuly')});
      } else {
        res.status(404).send({ error: res.__('facility not found!')});
      }
    } catch (error) {
      res.status(404).send({ error: res.__('facility not found!')});
    }
  }

  /**
 * Get single facility
 * */

const getSingleFacility=async(req, res)=>{
  try {
    const _facility = await model.Facility.findOne({where:{id:req.params.id}});
    if(_facility){
      return res.status(200).json({ _facility });
    }else{
      res.status(404).send({ error:  res.__('facility not found!')});
    }
    
  } catch (error) {
    return res.status(500).send(error.message);
  }
}

  module.exports={getFacilities,addFacility,deleteFacility,updateFacility,getSingleFacility}
