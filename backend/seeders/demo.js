'use strict';

module.exports = {
  async up(queryInterface) {
    const demoHeroes = [
      {
        nickname: 'Superman',
        real_name: 'Clark Kent',
        origin_description:
          "He was born Kal-El on the planet Krypton, before being rocketed to Earth as an infant by his scientist father Jor-El, moments before Krypton's destruction...",
        superpowers:
          'Solar energy absorption and healing factor, solar flare and heat vision, solar invulnerability, flight...',
        catch_phrase:
          "Look, up in the sky, it's a bird, it's a plane, it's Superman!",
      },
      {
        nickname: 'Batman',
        real_name: 'Bruce Wayne',
        origin_description:
          'After witnessing his parents’ murder as a child, Bruce Wayne becomes Batman, a vigilante crime-fighter in Gotham City...',
        superpowers:
          'Genius-level intellect, martial arts expertise, high-tech gadgets, detective skills...',
        catch_phrase: 'I am vengeance, I am the night, I am Batman!',
      },
      {
        nickname: 'Wonder Woman',
        real_name: 'Diana Prince',
        origin_description:
          'Diana Prince is an Amazonian princess who leaves her home island to help fight evil in the world of men...',
        superpowers:
          'Superhuman strength, speed, durability, Lasso of Truth, flight...',
        catch_phrase: 'Athena guide me, I will fight for justice!',
      },
      {
        nickname: 'Spider-Man',
        real_name: 'Peter Parker',
        origin_description:
          'Peter Parker gains spider-like abilities after being bitten by a radioactive spider...',
        superpowers:
          'Wall-crawling, superhuman agility, web-slinging, spider-sense...',
        catch_phrase: 'With great power comes great responsibility.',
      },
      {
        nickname: 'The Flash',
        real_name: 'Barry Allen',
        origin_description:
          'Barry Allen gains super-speed after a lightning strike and becomes the Scarlet Speedster...',
        superpowers: 'Superhuman speed, time travel, speed healing...',
        catch_phrase: 'I am the fastest man alive!',
      },
      {
        nickname: 'Iron Man',
        real_name: 'Tony Stark',
        origin_description:
          'Genius inventor Tony Stark builds a suit of powered armor to become the armored Avenger known as Iron Man...',
        superpowers:
          'Powered armor suit with flight, superhuman strength, energy weapons...',
        catch_phrase: 'I am Iron Man.',
      },
      {
        nickname: 'Thor',
        real_name: 'Thor Odinson',
        origin_description:
          'Thor is the Norse god of thunder who wields the enchanted hammer, Mjolnir...',
        superpowers:
          'Superhuman strength, control over lightning and storms, Mjolnir...',
        catch_phrase: 'I am Thor, the God of Thunder!',
      },
      {
        nickname: 'Black Widow',
        real_name: 'Natasha Romanoff',
        origin_description:
          'Natasha Romanoff is a highly skilled spy and assassin, known for her work with S.H.I.E.L.D. and the Avengers...',
        superpowers:
          'Master martial artist, espionage skills, expert marksmanship...',
        catch_phrase: 'I’ve got red in my ledger.',
      },
      {
        nickname: 'Captain America',
        real_name: 'Steve Rogers',
        origin_description:
          'Steve Rogers is a super-soldier created during World War II, known for his unwavering sense of duty...',
        superpowers:
          'Enhanced strength, agility, and durability, Vibranium shield...',
        catch_phrase: 'I can do this all day.',
      },
      {
        nickname: 'Green Lantern',
        real_name: 'Hal Jordan',
        origin_description:
          'Hal Jordan is chosen by the Green Lantern Corps to wield the power ring, granting him incredible abilities...',
        superpowers:
          'Green power ring with energy constructs, flight, force fields...',
        catch_phrase:
          'In brightest day, in blackest night, no evil shall escape my sight!',
      },
      {
        nickname: 'Hulk',
        real_name: 'Bruce Banner',
        origin_description:
          'Bruce Banner is exposed to gamma radiation, which transforms him into the Hulk, a giant green behemoth...',
        superpowers:
          'Superhuman strength, durability, regeneration, limitless rage...',
        catch_phrase: 'Hulk smash!',
      },
      {
        nickname: 'Aquaman',
        real_name: 'Arthur Curry',
        origin_description:
          'Arthur Curry is the Atlantean king with the ability to communicate with sea life and control water...',
        superpowers:
          'Superhuman strength, underwater adaptation, control over marine life...',
        catch_phrase: 'I am the protector of the oceans.',
      },
      {
        nickname: 'Black Panther',
        real_name: 'T’Challa',
        origin_description:
          'T’Challa is the king of Wakanda and gains enhanced abilities from the Heart-Shaped Herb...',
        superpowers:
          'Enhanced strength, agility, vibranium suit, superhuman senses...',
        catch_phrase: 'Wakanda forever!',
      },
      {
        nickname: 'Doctor Strange',
        real_name: 'Stephen Strange',
        origin_description:
          'Dr. Stephen Strange becomes the Sorcerer Supreme after a car accident leads him to mystical studies...',
        superpowers:
          'Mastery of the mystic arts, time manipulation, dimensional travel...',
        catch_phrase: 'By the Hoary Hosts of Hoggoth!',
      },
      {
        nickname: 'Green Arrow',
        real_name: 'Oliver Queen',
        origin_description:
          'Oliver Queen becomes the vigilante archer known as Green Arrow, using his skills to fight crime...',
        superpowers: 'Master archer, martial artist, gadget arrows...',
        catch_phrase: 'You have failed this city!',
      },
      {
        nickname: 'Captain Marvel',
        real_name: 'Carol Danvers',
        origin_description:
          'Carol Danvers gains superhuman abilities after an accident involving Kree technology...',
        superpowers: 'Superhuman strength, flight, energy projection...',
        catch_phrase: 'Higher, further, faster!',
      },
      {
        nickname: 'Ant-Man',
        real_name: 'Scott Lang',
        origin_description:
          'Scott Lang becomes Ant-Man, a size-changing hero, after stealing the Ant-Man suit from Hank Pym...',
        superpowers:
          'Size manipulation, communication with ants, superhuman strength at small size...',
        catch_phrase:
          'It’s not about the size of the man, but the size of his heart.',
      },
      {
        nickname: 'The Hulk',
        real_name: 'Jennifer Walters',
        origin_description:
          'Jennifer Walters, cousin of Bruce Banner, becomes She-Hulk after a blood transfusion from him...',
        superpowers: 'Superhuman strength, durability, intelligence...',
        catch_phrase: 'The courtroom is my battlefield.',
      },
      {
        nickname: 'Flash',
        real_name: 'Wally West',
        origin_description:
          'Wally West gains super-speed abilities and becomes the Flash, carrying on the legacy of Barry Allen...',
        superpowers:
          'Superhuman speed, time manipulation, speed force connection...',
        catch_phrase: "I'm the fastest man alive, Kid Flash!",
      },
    ];
    await queryInterface.bulkInsert('Superheros', demoHeroes);
  },

  async down(queryInterface) {
    await queryInterface.bulkDelete('Superheros', null, {});
  },
};
