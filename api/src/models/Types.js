const  { DataTypes } = require("sequelize");

module.exports = (sequelize) => {
    sequelize.define("Type", {
        DB_ID: {
            type: DataTypes.UUID,
            primaryKey: true,
            defaultValue: DataTypes.UUIDV4,
            allowNull: false,
            autoIncrement: true
        },
        ID: {
            type: DataTypes.INTEGER,
            allowNull: false
        },
        type: {
            type: DataTypes.STRING,
            allowNull: false
        },
        secondType: {
            type: DataTypes.STRING, 
            allowNull: true, 
        }
    }, {
        timestamps: false,
        }
    )
}