
 module.exports = function(sequelize, DataTypes)  {
   var Customer = sequelize.define("Customer", {
      customer_name: DataTypes.STRING
    },
    {
      timestamps: false
    },
    {
    	classMethods: {
    		associate: function(models) {
    			Customer.hasMany(models.Burger, {
    				onDelete: "cascade"
    			});
    		}
    	}
    });

   return Customer;
};
