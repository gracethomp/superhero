'use strict';

module.exports = {
  async up(queryInterface) {
    const demoPowerHeroes = [
      { superhero_id: 1, superpower_id: 1 },
      { superhero_id: 1, superpower_id: 2 },
      { superhero_id: 1, superpower_id: 3 },

      { superhero_id: 2, superpower_id: 8 },
      { superhero_id: 2, superpower_id: 9 },

      { superhero_id: 3, superpower_id: 6 },
      { superhero_id: 3, superpower_id: 7 },

      { superhero_id: 4, superpower_id: 16 },
      { superhero_id: 4, superpower_id: 17 },
      { superhero_id: 4, superpower_id: 18 },

      { superhero_id: 5, superpower_id: 11 },

      { superhero_id: 6, superpower_id: 9 },
      { superhero_id: 6, superpower_id: 28 },

      { superhero_id: 7, superpower_id: 12 },
      { superhero_id: 7, superpower_id: 13 },

      { superhero_id: 8, superpower_id: 24 },
      { superhero_id: 8, superpower_id: 27 },

      { superhero_id: 9, superpower_id: 10 },

      { superhero_id: 10, superpower_id: 29 },
      { superhero_id: 10, superpower_id: 30 },

      { superhero_id: 11, superpower_id: 15 },

      { superhero_id: 12, superpower_id: 19 },
      { superhero_id: 12, superpower_id: 20 },

      { superhero_id: 13, superpower_id: 23 },

      { superhero_id: 14, superpower_id: 26 },
      { superhero_id: 14, superpower_id: 27 },

      { superhero_id: 15, superpower_id: 25 },

      { superhero_id: 16, superpower_id: 3 },

      { superhero_id: 17, superpower_id: 35 },
      { superhero_id: 17, superpower_id: 36 },

      { superhero_id: 18, superpower_id: 7 },
      { superhero_id: 18, superpower_id: 31 },

      { superhero_id: 19, superpower_id: 11 },
    ];

    await queryInterface.bulkInsert('PowerHeros', demoPowerHeroes);
  },

  async down(queryInterface) {
    await queryInterface.bulkDelete('PowerHeros', null, {});
  },
};
