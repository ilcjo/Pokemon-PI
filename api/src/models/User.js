const { DataTypes } = require('sequelize');

module.exports = (sequelize) => {

  sequelize.define('user',{
    id:{
        type: DataTypes.UUID,
        defaultValue: DataTypes.UUIDV4,
        primaryKey: true,
      },
      name: {
        type: DataTypes.STRING,
        allowNull: false,
        unique: true,
      },
      email: {
            type: DataTypes.STRING,
            isEmail: true,
            set(value){
                this.setvalue('email', value.toLowerCase())
            }
      }

});
};