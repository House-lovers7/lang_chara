type Output = Array<{
    name: string;
    age: number;
    attributes: Array<string>;
    personality: string;
    stats: {
      strength: number;
      intelligence: number;
      dexterity: number;
      agility: number;
      luck: number;
    };
    background: string;
    magic?: string;
  }>;