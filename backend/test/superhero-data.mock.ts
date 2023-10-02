export const existingId = 1;
export const nonExistingId = -13213;

export const heroes = [
  {
    id: 1,
    nickname: 'Superman',
    real_name: 'Clark Kent',
    origin_description:
      "He was born Kal-El on the planet Krypton, before being rocketed to Earth as an infant by his scientist father Jor-El, moments before Krypton's destruction...",
    catch_phrase:
      "Look, up in the sky, it's a bird, it's a plane, it's Superman!",
    images: [
      {
        id: 1,
        mediaId:
          'https://storage.googleapis.com/example_superheroes//superhero.jpg',
        superhero_id: 1,
      },
    ],
  },
  {
    id: 2,
    nickname: 'Batman',
    real_name: 'Bruce Wayne',
    origin_description:
      'After witnessing his parents’ murder as a child, Bruce Wayne becomes Batman, a vigilante crime-fighter in Gotham City...',
    catch_phrase: 'I am vengeance, I am the night, I am Batman!',
    images: [
      {
        id: 2,
        mediaId:
          'https://storage.googleapis.com/example_superheroes//superhero.jpg',
        superhero_id: 2,
      },
    ],
  },
  {
    id: 3,
    nickname: 'Wonder Woman',
    real_name: 'Diana Prince',
    origin_description:
      'Diana Prince is an Amazonian princess who leaves her home island to help fight evil in the world of men...',
    catch_phrase: 'Athena guide me, I will fight for justice!',
    images: [
      {
        id: 3,
        mediaId:
          'https://storage.googleapis.com/example_superheroes//superhero.jpg',
        superhero_id: 3,
      },
    ],
  },
];
