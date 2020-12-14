import { Sequelize, Model, DataTypes } from 'sequelize'

const class hotels extends Model {};


hotels.init({
    hotelName: {
      type: Sequelize.STRING,
      allowNull: false
    },
    priceRange: {
      type: Sequelize.STRING,
      allowNull: false
    },
    location: {
        type: Sequelize.STRING,
        allowNull: false
      },
    ranking: {
        type: Sequelize.STRING,
        allowNull: false
      },
    parking: {
        type: Sequelize.BOOLEAN,
        allowNull: false
    },
    wifi: {
        type: Sequelize.BOOLEAN,
        allowNull: false
      },
    pool: {
        type: Sequelize.BOOLEAN,
        allowNull: false
    },
    breakfast: {
        type: Sequelize.STRING,
        allowNull: false
      }    
  }, {
    sequelize,
    modelName: 'hotels',
    timestamps: false
  })