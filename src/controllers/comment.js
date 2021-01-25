import { Comment,User, request as Request} from "../database/models";

export const CreateComment = async (req, res) => {
  try {

    const request = await Request.findOne({
      where : {
        id: req.params.requestId
      }
    });
    if (request) {
      const comment = await Comment.create({
        userId: req.userData.id,
        requestId: req.params.requestId,
        comment:req.body.comment
      });
      return res.status(201).json({
        comment
      });
    }
    return res.status(404).json({
      message:'request not found'
    })
  } catch (error) {
    console.log(error)
    res.status(500).json({
     message:'Comment.comment cannot be null'
    });
  }
};

export const GetComment = async (req, res) => {

 
  const request = await Request.findOne({
    where : {
      id: req.params.requestId
    }
  });
  if(!request){ 
     return res.status(404).json({message: `Request with the specified ID does not exists `});}

    
      const comments = await Comment.findAll({
        where: { requestId:req.params.requestId, userId:req.userData.id }, include:[
        {
          model:Request,
          as: 'request',
          attributes:[
           'id','idUser','idRoom','dateStart','dateEnd','requestStatus','idRoom'
          ]
        },
        {
          model:User,
          as: 'author',
          attributes:[
            'firstname','lastname','email','id', 'user_image'
          ]
        },
      ]
    });
   res.status(200).json({
      comments
    });
 
};


