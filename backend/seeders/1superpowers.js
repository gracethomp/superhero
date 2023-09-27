'use strict';

module.exports = {
  async up(queryInterface) {
    const demoSuperpowers = [
      { superpower: 'Solar energy absorption' },
      { superpower: 'Healing factor' },
      { superpower: 'Solar flare' },
      { superpower: 'Heat vision' },
      { superpower: 'Solar invulnerability' },
      { superpower: 'Flight' },
      { superpower: 'Genius-level intellect' },
      { superpower: 'Martial arts expertise' },
      { superpower: 'High-tech gadgets' },
      { superpower: 'Detective skills' },
      { superpower: 'Superhuman strength' },
      { superpower: 'Speed' },
      { superpower: 'Durability' },
      { superpower: 'Lasso of Truth' },
      { superpower: 'Wall-crawling' },
      { superpower: 'Web-slinging' },
      { superpower: 'Spider-sense' },
      { superpower: 'Speed healing' },
      { superpower: 'Energy weapons' },
      { superpower: 'Control over lightning and storms' },
      { superpower: 'Mjolnir' },
      { superpower: 'Espionage skills' },
      { superpower: 'Expert marksmanship' },
      { superpower: 'Enhanced strength' },
      { superpower: 'Agility' },
      { superpower: 'Vibranium shield' },
      { superpower: 'Green power ring with energy constructs' },
      { superpower: 'Force fields' },
      { superpower: 'Regeneration' },
      { superpower: 'Limitless rage' },
      { superpower: 'Underwater adaptation' },
      { superpower: 'Control over marine life' },
      { superpower: 'Vibranium suit' },
      { superpower: 'Superhuman senses' },
      { superpower: 'Mastery of the mystic arts' },
      { superpower: 'Dimensional travel' },
      { superpower: 'Master archer' },
      { superpower: 'Gadget arrows' },
      { superpower: 'Energy projection' },
      { superpower: 'Size manipulation' },
      { superpower: 'Communication with ants' },
      { superpower: 'Intelligence' },
      { superpower: 'Time manipulation' },
    ];

    await queryInterface.bulkInsert('Superpowers', demoSuperpowers);
  },

  async down(queryInterface) {
    await queryInterface.bulkDelete('Superpowers', null, {});
  },
};
