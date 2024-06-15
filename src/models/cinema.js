"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
	class Cinema extends Model {
		/**
		 * Helper method for defining associations.
		 * This method is not a part of Sequelize lifecycle.
		 * The `models/index` file will call this method automatically.
		 */
		static associate(models) {
			Cinema.hasMany(models.Screen, {
				foreignKey: "cinemaId",
			});

			Cinema.hasMany(models.Showtime, {
				foreignKey: "cinemaId",
			});
		}
	}
	Cinema.init(
		{
			tradeMark: DataTypes.STRING,
			name: DataTypes.STRING,
			location: DataTypes.STRING,
			rating: DataTypes.FLOAT,
			image: DataTypes.BLOB("long"),
			background: DataTypes.BLOB("long"),
		},
		{
			sequelize,
			modelName: "Cinema",
		}
	);
	return Cinema;
};
