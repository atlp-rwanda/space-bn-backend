
export async function up(queryInterface, Sequelize) {
   
    await queryInterface.bulkInsert('exampleTable', [{
     name: 'jemima',
      email: 'jemima@gmail.com',
      createdAt: new Date(),
      updatedAt : new Date()
    },
    {
      name: 'mugabo',
       email: 'mugabo@gmail.com',
       createdAt: new Date(),
       updatedAt : new Date()
     }
  ], {});
  
}
export async function down(queryInterface, Sequelize) {
   
  await queryInterface.bulkDelete('exampleTable', null, {});
   
}