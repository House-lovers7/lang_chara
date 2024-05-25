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