import Sequelize, {  Model } from 'sequelize';

class Motivo extends Model {
    static init (sequelize) {
        super.init({
            id_motivo: {
                type: Sequelize.INTEGER,
                autoIncrement: true,
                primaryKey: true
              },
              nome: {
                type: Sequelize.STRING(100),
                allowNull: false
              }
        });
        return this;
    }
}

export default Motivo;