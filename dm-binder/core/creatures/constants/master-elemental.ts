import { ICreature } from "../../interfaces/i-creature";

export const MASTER_ELEMENTAL: ICreature = {
    ac: 20,
    actions: [
        {
            title: "Multiattack",
            description:
                "The elemental may make one Slam attack and one elemental attack of it's type"
        },
        {
            title: "Slam",
            description: "Range 5ft. +10 to hit 8d10 bludgeoning damage"
        },
        {
            title: "Elemental Attack (Fire)",
            description: "Range 30ft. +10 to hit. 10d12 fire damage"
        },
        {
            title: "Elemental Attack (Water)",
            description:
                "Range 15ft Cone. +10 to hit. 5d12 cold damage. Player must make a DEX saving throw or be knocked prone"
        },
        {
            title: "Elemental Attack (Air)",
            description:
                "Range 60ft. +10 to hit. 5d12 slashing damage and is grappled in a whirlwind. At the end of the player's next turn they may make a DC18 STR saving throw to escape."
        },
        {
            title: "Elemental Attack (Earth)",
            description:
                "Range 60ft. +10 to hit. Each player in range takes 10d12 piercing damage and half as much after making a DC18 DEX saving throw."
        },
        {
            title: "Elemental Attack (Radiant)",
            description:
                "Range 30ft. Each player in range makes a DC18 CON saving throw. On failure, they are blinded until the end of their next turn."
        },
        {
            title: "Elemental Attack (Necrotic)",
            description:
                "Range 30ft. Each player in range makes a DC18 WIS saving throw. On failure, they are stricken with fear until the start of their next turn."
        }
    ],
    alignment: "Unaligned",
    challenge: "20",
    conditionImmunities: [],
    damageImmunities: ["It's own type"],
    damageResistances: [],
    damageWeaknesses: [],
    description: "",
    features: [],
    hp: 500,
    inventory: [],
    languages: [],
    reactions: [],
    savingThrows: [],
    senses: [],
    size: "Huge",
    skills: [],
    speed: "30 ft.",
    stats: {
        str: 25,
        dex: 25,
        con: 20,
        int: 6,
        wis: 15,
        cha: 20
    },
    type: "Elemental"
};
