'use strict';

module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.addConstraint('Airports', {
      type:'FOREIGN KEY',
      fields: ['cityId'],          // <-- MUST specify fields array
      
      name: 'city_fk_constraint',     // <-- custom constraint name
      references: {
        table: 'Cities',
        field: 'id'
      },
      onUpdate: 'CASCADE',
      onDelete: 'CASCADE'
    });
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.removeConstraint('Airports', 'city_fk_constraint');
  }
};