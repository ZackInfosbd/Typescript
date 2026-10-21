interface CharacterStats {
  health: number;
  strength: number;
}

interface Prototype<T> {
  clone(): T;
}

class GameCharacter implements Prototype<GameCharacter> {
  constructor(
    public name: string,
    public role: string,
    public stats: CharacterStats,
    public skills: string[],
  ) {}

  clone(): GameCharacter {
    return new GameCharacter(this.name, this.role, { ...this.stats }, [
      ...this.skills,
    ]);
  }
}

// Create one configured character, then use it as a prototype.
const originalCharacter = new GameCharacter(
  "Forest Guardian",
  "Ranger",
  { health: 100, strength: 12 },
  ["Healing Herbs", "Bow Mastery"],
);

const clonedCharacter = originalCharacter.clone();
clonedCharacter.name = "Mira";
clonedCharacter.stats.health = 80;
clonedCharacter.skills.push("Animal Companion");

console.log("Original character:", originalCharacter);
console.log("Customized clone:", clonedCharacter);
