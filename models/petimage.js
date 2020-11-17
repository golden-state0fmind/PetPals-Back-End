'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class petImage extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here

    }
  };
  petImage.init({
    petId: DataTypes.INTEGER,
    imageId: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'petImage',
  });
  return petImage;
};