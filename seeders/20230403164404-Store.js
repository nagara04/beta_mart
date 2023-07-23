'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
   const dataParse = JSON.parse(fs.readFileSync('./data/stores.json','utf-8')).map((data)=> {
      data.createdAt = new Date()
      data.updatedAt = new Date()
      delete data.id
      return data
   })
   return queryInterface.bulkInsert('Stores', dataParse, {})
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

  async down (queryInterface, Sequelize) {
   return queryInterface.bulkDelete('Stores', null, {})
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
  }
};
