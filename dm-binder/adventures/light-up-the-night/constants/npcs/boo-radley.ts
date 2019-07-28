export const BOO_RADLEY = {
    ac: 12,
    actions: [
        {
            title: "Clone",
            description:
                "Once per turn, Boo can split his HP in half to create a copy of himself with the remaining HP"
        },
        {
            title: "Spells",
            description:
                "Chill Touch, Mage Hand, Ray of Sickness, Vampiric Touch, Blindness / Deafness"
        },
        {
            title: "Quarter Staff",
            description:
                "Melee Weapon Attack: +3 to hit, reach 5 ft., one target. Hit: 3 (1d6) bludgeoning damage or 4 (1d8) bludgeoning damage if used with two hands."
        }
    ],
    alignment: "Lawful Evil",
    challenge: "6",
    conditionImmunities: [],
    damageImmunities: ["Frightened"],
    damageResistances: [],
    damageWeaknesses: [],
    description:
        "Dressed in all black fine clothing, now tarnished, Boo is a gaint and sickly elf. He holds a grudge due to the destruction of his clones.",
    features: [
        {
            title: "Grim Harvest",
            description:
                "Once per turn when a living creature fails a saving throw against or is harmed by one of the necromancer’s Necromancy spells of 1st level or higher, the necromancer regains hp equal to three times the spell’s level."
        }
    ],
    hp: 49,
    inventory: [],
    languages: ["Common", "Elvish", "Abyssal", "Infernal", "Celestial"],
    reactions: [],
    savingThrows: ["Int +6", "Wis +5"],
    senses: ["Passive Perception 12", "Darkvision 60ft"],
    size: "Medium",
    skills: ["Arcana +7", "history +7"],
    speed: "30 ft.",
    stats: {
        str: 10,
        dex: 15,
        con: 12,
        int: 18,
        wis: 15,
        cha: 13
    },
    type: "Elf"
};
