export default {
    ac: 18,
    actions: [
        {
            title: "Multiattack",
            description: "The blood hunter can either make two attacks."
        },
        {
            title: "Lightning/Necrotic Dagger",
            description:
                "Melee or Ranged Weapon Attack: +8 to hit, reach 5 ft. or range 20/60 ft., one target. 1d4+8 piercing damage and 3d8 Lightning/Necrotic Damage."
        },
        {
            title: "Lightning/Necrotic Longbow",
            description:
                "Ranged Weapon Attack: +8 to hit, range 150/600 ft., one target. Hit: 7 1d8+8 piercing damage plus 3d8 Lightning/Necrotic Damage. If the damage from this attack reduces a creature to 0 hit points, the blood hunter regains an expended spell slot."
        },
        {
            title: "Diabolic Channel",
            description:
                "The blood hunter makes one attack with its Lightning/Necrotic Longbow against a creature. If the attack hits, the blood hunter can cast one spell on the target, regardless of the regular rules for range, affecting only that target. If the spell requires an attack roll, it automatically hits. If the spell requires a saving throw, the creature has disadvantage on the first saving throw made against the spell."
        },
        {
            title: "Blood Curse of the Marked",
            description:
                "As a bonus action, you can mark an enemy within 60 feet. Until the end of your turn, all crimson rite damage you deal to the target is doubled."
        },
        {
            title: "Legendary Action (2)",
            description:
                "Circle of Death: A sphere of negative energy ripples out in a 60-foot- radius sphere from a point within range. Each creature in that area must make a Constitution saving throw. A target takes 8d6 necrotic damage on a failed save, or half as much damage on a successful one."
        },
        {
            title: "Legendary Action (1)",
            description:
                "Bestow Curse: While the target is Cursed, your attacks and Spells deal an extra 1d8 necrotic damage to the target."
        },
        {
            title: "Portal",
            description:
                "This blood hunter can use misty step at will as if a cantrip. The effect takes the appearance of a portal."
        }
    ],
    alignment: "Chaotic Good",
    challenge: "15",
    conditionImmunities: ["Fear"],
    damageImmunities: [],
    damageResistances: ["Fire", "Lightning", "Cold", "Radiant", "Necrotic"],
    damageWeaknesses: [],
    description: "",
    features: [
        {
            title: "Spellcasting",
            description:
                "The blood hunter is a 5th-level spellcaster. Its spellcasting ability is Wisdom (spell save DC 18, +8 to hit with spell attacks). It regains its expended spell slots when it finishes a short or long rest. It knows the following warlock spells, and can cast them using its rite weapon as its spellcasting focus: Cantrips (at will): blade ward, chill touch, mage hand 1st-3rd level (4 3rd-level slots): charm person, crown of madness, earthbind, fear, hold person, ray of enfeeblement"
        }
    ],
    hp: 288,
    inventory: [
        "4 Dagger",
        "1 Longbow",
        "1 Half Plate Armor",
        "1 Tome of Maren"
    ],
    languages: ["Common", "Infernal", "Abyssal"],
    reactions: [],
    savingThrows: [],
    senses: ["passive Perception 15"],
    size: "Medium",
    skills: ["Insight +7", "Intimidation +5", "Survival +7"],
    speed: "30 ft.",
    stats: {
        str: 14,
        dex: 18,
        con: 18,
        int: 14,
        wis: 17,
        cha: 13
    },
    type: "Drow"
};
