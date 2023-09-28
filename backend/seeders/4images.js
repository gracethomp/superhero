'use strict';

module.exports = {
  async up(queryInterface) {
    const demoImages = [
      { superhero_id: 1, mediaId: 'scene-Iron-Man.webp' },
      { superhero_id: 2, mediaId: 'scene-Iron-Man.webp' },
      { superhero_id: 3, mediaId: 'scene-Iron-Man.webp' },
      { superhero_id: 4, mediaId: 'scene-Iron-Man.webp' },
      { superhero_id: 5, mediaId: 'scene-Iron-Man.webp' },
      { superhero_id: 6, mediaId: 'scene-Iron-Man.webp' },
      { superhero_id: 7, mediaId: 'scene-Iron-Man.webp' },
      { superhero_id: 8, mediaId: 'scene-Iron-Man.webp' },
      { superhero_id: 9, mediaId: 'scene-Iron-Man.webp' },
      { superhero_id: 10, mediaId: 'scene-Iron-Man.webp' },
      { superhero_id: 11, mediaId: 'scene-Iron-Man.webp' },
      { superhero_id: 12, mediaId: 'scene-Iron-Man.webp' },
      { superhero_id: 13, mediaId: 'scene-Iron-Man.webp' },
      { superhero_id: 14, mediaId: 'scene-Iron-Man.webp' },
      { superhero_id: 15, mediaId: 'scene-Iron-Man.webp' },
      { superhero_id: 16, mediaId: 'scene-Iron-Man.webp' },
      { superhero_id: 17, mediaId: 'scene-Iron-Man.webp' },
      { superhero_id: 18, mediaId: 'scene-Iron-Man.webp' },
      { superhero_id: 19, mediaId: 'scene-Iron-Man.webp' },
    ];
    await queryInterface.bulkInsert('Media', demoImages);
  },

  async down(queryInterface) {
    await queryInterface.bulkDelete('Media', null, {});
  },
};
