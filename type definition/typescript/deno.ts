interface Stats {
    strength: number;
    intelligence: number;
    dexterity: number;
    agility: number;
    luck: number;
  }
  
  interface Character {
    name: string;
    age: number;
    attributes: string[];
    personality: string;
    stats: Stats;
    background: string;
    magic?: string;
  }
  
  type Output = Character[];
  
  function validateStats(stats: Stats): boolean {
    const { strength, intelligence, dexterity, agility, luck } = stats;
    return (
      strength >= 3 && strength <= 18 &&
      intelligence >= 3 && intelligence <= 18 &&
      dexterity >= 3 && dexterity <= 18 &&
      agility >= 3 && agility <= 18 &&
      luck >= 3 && luck <= 18
    );
  }
  
  function validateCharacter(character: Character): boolean {
    const { name, age, attributes, personality, stats, background } = character;
    return (
      typeof name === 'string' &&
      typeof age === 'number' &&
      Array.isArray(attributes) &&
      attributes.every(attr => typeof attr === 'string') &&
      typeof personality === 'string' &&
      validateStats(stats) &&
      typeof background === 'string'
    );
  }
  
  function validateOutput(output: Output): boolean {
    return Array.isArray(output) && output.every(validateCharacter);
  }