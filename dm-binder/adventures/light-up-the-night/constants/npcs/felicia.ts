export const FELICIA = {
    ac: 17,
    actions: [
        {
            title: "Diabolic Channel",
            description:
                "As an action, you can infuse your rite-enhanced weapon with a spell. As part of the action, you make a weapon attack. If the attack hits, the spell automatically hits (if a spell attack was needed) and the target takes weapon damage plus the spell's effects. If the weapon attack has advantage, any spell saving throws have disadvantage."
        },
        {
            title: "Blood Curse of Mutual Suffering",
            description:
                "As a bonus action, link with a creature within 30 ft. for up to 1 minute. The next time the linked creature deals damage to you with a weapon attack, it takes necrotic damage equal to half the damage dealt, ending the curse. Amplified, the creature takes full damage and loses any necrotic resistance."
        },
        {
            title: "Blood Curse of the Marked",
            description:
                "As a bonus action, mark an enemy within 60 ft. and deal double crimson rite damage to it until the end of your turn. Amplify to remove the marked target's resistance to your rite damage type until the beginning of your next turn."
        },
        {
            title: "Crimson Rite",
            description:
                "As a bonus action, imbue a weapon with extra damage of your chosen type based on your level. You take damage equal to and your max HP are reduced by -15 until the rite fades. Rite damage is magical and lasts until you drop (or throw) the weapon or complete a rest. Rite of the Flame: Your rite damage is fire. Rite of the Dead: Your rite damage is necrotic. Rite of the Oracle: Your rite damage is psychic. Rite of the Storm: Your rite damage is lightning. Crimson Rite: 1 Bonus Action"
        },
        {
            title: "Mystic Frenzy",
            description:
                "When you use your action to cast a cantrip, you can make one weapon attack as a bonus action."
        },
        {
            title: "Blood Curse of the Eyeless",
            description:
                "Reaction: Use your reaction to impose disadvantage on an attack roll when an enemy within 60 ft. makes a weapon attack. Amplify to impose disadvantage on the target's following attack as well."
        },
        {
            title: "Blood Curse of the Fending Rite",
            description:
                "Reaction: When subjected to a spell that requires a DEX saving throw, you can use your reaction to gain a +1 on the roll. You can do so only before rolling. Amplify to grant all allies within 5 ft. the same bonus."
        },
        {
            title: "Spells",
            description:
                "Chill Touch, Shocking Grasp, Produce Flame, Hellish Rebuke, Misty Step"
        }
    ],
    alignment: "Chaotic Evil",
    challenge: "15",
    conditionImmunities: ["Fear", "Charm"],
    damageImmunities: ["Fire"],
    damageResistances: [],
    damageWeaknesses: [],
    description: "",
    features: [],
    hp: 250,
    inventory: ["Chain Mail"],
    languages: ["Common"],
    reactions: [],
    savingThrows: ["str +8", "con +6"],
    senses: ["Darkvision 60ft"],
    size: "Medium",
    skills: ["Arcana +5", "Intimidation +5"],
    speed: "30 ft.",
    stats: {
        str: 20,
        dex: 12,
        con: 20,
        int: 11,
        wis: 10,
        cha: 12
    },
    type: "Fire Genasi"
};
