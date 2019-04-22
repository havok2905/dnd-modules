export default {
    ac: 20,
    actions: [
        {
            title: "Multiattack",
            description: "Can make 2 actions"
        },
        {
            title: "Claw",
            description: "Melee Attack: 10 ft. +10 to hit. 2d12 slashing damage"
        },
        {
            title: "Screech",
            description:
                "Any player within 60 feet must make a DC15 CON saving throw. On failure, that player is stunned for 1 turn."
        },
        {
            title: "Consume",
            description:
                "Enkiem may attempt a STR contest with a target within 10 feet. On a failure, the target is eaten and Enkiem regains 20 HP"
        }
    ],
    alignment: "Chaotic Evil",
    challenge: "30",
    conditionImmunities: ["Fear", "Charmed"],
    damageImmunities: ["Necrotic"],
    damageResistances: ["Fire", "Cold", "Lightning", "Thunder", "Force"],
    damageWeaknesses: [],
    description: "",
    features: [
        {
            title: "Gale Force Winds",
            description:
                "Any player that moves within 15 feet of Enkiem must make a DC18 STR check. On success, they may move forward with their action. On a failure, they are pushed 30 feet backwards from their current position. This check must be made at the start of every turn when in range."
        }
    ],
    hp: 100,
    inventory: [],
    languages: [],
    reactions: [],
    savingThrows: [],
    senses: ["Passive Perception 25"],
    size: "Medium",
    skills: [],
    speed: "60 ft.",
    stats: {
        str: 20,
        dex: 20,
        con: 15,
        int: 10,
        wis: 10,
        cha: 30
    },
    type: "Goddess"
};
