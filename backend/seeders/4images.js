'use strict';

module.exports = {
  async up(queryInterface) {
    const demoImages = [
      {
        superhero_id: 1,
        mediaId: `https://storage.googleapis.com/${process.env.STORAGE_MEDIA_BUCKET}//scene-Iron-Man.webp`,
      },
      {
        superhero_id: 2,
        mediaId: `https://storage.googleapis.com/${process.env.STORAGE_MEDIA_BUCKET}//scene-Iron-Man.webp`,
      },
      {
        superhero_id: 3,
        mediaId: `https://storage.googleapis.com/${process.env.STORAGE_MEDIA_BUCKET}//scene-Iron-Man.webp`,
      },
      {
        superhero_id: 4,
        mediaId: `https://storage.googleapis.com/${process.env.STORAGE_MEDIA_BUCKET}//scene-Iron-Man.webp`,
      },
      {
        superhero_id: 5,
        mediaId: `https://storage.googleapis.com/${process.env.STORAGE_MEDIA_BUCKET}//scene-Iron-Man.webp`,
      },
      {
        superhero_id: 6,
        mediaId: `https://storage.googleapis.com/${process.env.STORAGE_MEDIA_BUCKET}//scene-Iron-Man.webp`,
      },
      {
        superhero_id: 7,
        mediaId: `https://storage.googleapis.com/${process.env.STORAGE_MEDIA_BUCKET}//scene-Iron-Man.webp`,
      },
      {
        superhero_id: 8,
        mediaId: `https://storage.googleapis.com/${process.env.STORAGE_MEDIA_BUCKET}//scene-Iron-Man.webp`,
      },
      {
        superhero_id: 9,
        mediaId: `https://storage.googleapis.com/${process.env.STORAGE_MEDIA_BUCKET}//scene-Iron-Man.webp`,
      },
      {
        superhero_id: 10,
        mediaId: `https://storage.googleapis.com/${process.env.STORAGE_MEDIA_BUCKET}//scene-Iron-Man.webp`,
      },
      {
        superhero_id: 11,
        mediaId: `https://storage.googleapis.com/${process.env.STORAGE_MEDIA_BUCKET}//scene-Iron-Man.webp`,
      },
      {
        superhero_id: 12,
        mediaId: `https://storage.googleapis.com/${process.env.STORAGE_MEDIA_BUCKET}//scene-Iron-Man.webp`,
      },
      {
        superhero_id: 13,
        mediaId: `https://storage.googleapis.com/${process.env.STORAGE_MEDIA_BUCKET}//scene-Iron-Man.webp`,
      },
      {
        superhero_id: 14,
        mediaId: `https://storage.googleapis.com/${process.env.STORAGE_MEDIA_BUCKET}//scene-Iron-Man.webp`,
      },
      {
        superhero_id: 15,
        mediaId: `https://storage.googleapis.com/${process.env.STORAGE_MEDIA_BUCKET}//scene-Iron-Man.webp`,
      },
      {
        superhero_id: 16,
        mediaId: `https://storage.googleapis.com/${process.env.STORAGE_MEDIA_BUCKET}//scene-Iron-Man.webp`,
      },
      {
        superhero_id: 17,
        mediaId: `https://storage.googleapis.com/${process.env.STORAGE_MEDIA_BUCKET}//scene-Iron-Man.webp`,
      },
      {
        superhero_id: 18,
        mediaId: `https://storage.googleapis.com/${process.env.STORAGE_MEDIA_BUCKET}//scene-Iron-Man.webp`,
      },
      {
        superhero_id: 19,
        mediaId: `https://storage.googleapis.com/${process.env.STORAGE_MEDIA_BUCKET}//scene-Iron-Man.webp`,
      },
    ];
    await queryInterface.bulkInsert('Media', demoImages);
  },

  async down(queryInterface) {
    await queryInterface.bulkDelete('Media', null, {});
  },
};
