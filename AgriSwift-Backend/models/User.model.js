module.exports = (sequelize, DataTypes) => {
  
  const Users = sequelize.define("Users", {  // defined table name is"Users"
    userId: {
      type:DataTypes.UUID,
      defaultValue:DataTypes.UUIDV4,
      allowNull:false,
      primaryKey:true
    },
    fullname: {
      type: DataTypes.STRING,
      allowNull: false,
      
    },
    email: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: true,
      validate: {
        isEmail: true
      }
    },
    phoneNumber: {
      type: DataTypes.STRING,
      allowNull: true,
      // validate: {
      //   isPhoneNumber: function(value) {
      //     // Custom validation to check if value matches either format
      //     if (!/^\+?(\d{11})$/.test(value) && !/^0(\d{10})$/.test(value)) {
      //       throw new Error('Invalid phone number format');
      //     }
      //   }
      // }
    },
    password: {
      type: DataTypes.STRING,
      allowNull: false
    },
    retypePassword: {
      type: DataTypes.STRING,
      allowNull: true
    },
    
    role: {
      type: DataTypes.ENUM('farmer', 'admin',  'retailer', 'distributor'),
      //allowNull: false
    },
    token: {
      type: DataTypes.STRING,
      allowNull:true,
    },
  tokenExpire: {
      type: DataTypes.DATE
    }
  })

  return Users
}