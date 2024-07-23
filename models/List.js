module.exports = (sequelize, DataTypes) => {
    const List = sequelize.define('List', {
        id: {
            type: DataTypes.UUID,
            defaultValue: DataTypes.UUIDV4,
            primaryKey: true
        },
        name: {
            type: DataTypes.STRING,
            allowNull: false
        },
        user_id: {
            type: DataTypes.UUID,
            allowNull: false
        },
        locations: {
            type: DataTypes.ARRAY(DataTypes.STRING),
            allowNull: false
        }
    });

    List.associate = (models) => {
        List.belongsTo(models.User, { foreignKey: 'user_id', as: 'user' });
    };

    return List;
};
