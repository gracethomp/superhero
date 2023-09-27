export function mapSuperhero(superhero) {
  const superheroData = superhero.toJSON();
  const superpowers = superheroData.superpowers.map((superpower: any) => {
    delete superpower.PowerHero;
    return superpower;
  });

  superheroData.superpowers = superpowers;
  return superheroData;
}
