'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
   up(queryInterface, Sequelize) {
      const dataParse = JSON.parse(fs.readFileSync('./data/employees.json', 'utf-8')).map((data) => {
         data.createdAt = new Date()
         data.updatedAt = new Date()
         delete data.id
         return data
      })
      return queryInterface.bulkInsert('Employees', dataParse, {})
      /**
       * Add seed commands here.
       *
       * Example:
       * await queryInterface.bulkInsert('People', [{
       *   name: 'John Doe',
       *   isBetaMember: false
       * }], {});
      */
   },

   down(queryInterface, Sequelize) {
      return queryInterface.bulkDelete('Employees', null, {})
      /**
       * Add commands to revert seed here.
       *
       * Example:
       * await queryInterface.bulkDelete('People', null, {});
       */
   }
};
