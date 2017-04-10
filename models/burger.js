

 module.exports = function(sequelize, DataTypes)  {
   var Burger = sequelize.define("Burger", {
      burger_name: DataTypes.STRING,
      devoured: DataTypes.BOOLEAN
    },
    {
      timestamps: false   
    },
    {
      classMethods: {
        associate: function(models) {
          Burger.belongsTo(models.Customer, {
            foreignKey: {
              allowNull: false
            }
          });
        }
      }
    });

   return Burger;
};


// var Burger = sequelize.define(“burgers”, {

//   burger_name: {
//         type: Sequelize.STRING,
//           allowNull: false
//       },
//   devoured: {
//         type: Sequelize.STRING,
//           defaultValue: false
//       },
//          timestamps: false
// });
// // return Burger;


// // Syncs with DB
// Burger.sync();


