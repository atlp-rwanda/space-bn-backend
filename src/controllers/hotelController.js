import { getConnection } from '../database/data';

export function allHotels(res) {
  getConnection((err, connection) => {
    if (err) throw err;
    else {
      connection.query('SELECT * FROM hotels', (err, results) => {
        if (err) throw err;
        else {
          res.send({
            data: results
          });
        }
        connection.release();
      });
    }
  });
}


const allHotels = async (req, res) => {
    try {
      const posts = await models.Post.findAll({
        include: [
          {
            model: models.hotels,
            as: 'hotels'
          },
        ]
      });
      return res.status(200).json({ hotels });
    } catch (error) {
      return res.status(500).send(error.message);
    }
  }