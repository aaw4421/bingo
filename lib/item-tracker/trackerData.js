// The order matters for the regexes!
export const trackerData = [
  {
    regex: /(\d+) [Dd]ifferent [Mm]onster [Ss]pecies/i,
    options: {
      tokens: {
        rows: [
          [
            "blaze", 
            "cave-spider", 
            "creeper", 
            "drowned", 
            "elder-guardian", 
            "ender-dragon",
            "enderman",
            "endermite",
            "illager",
            "ghast",
            "guardian",
          ],
          [
            "hoglin",
            "husk",
            "magma-cube",
            "phantom",
            "piglin",
            "illager",
            "ravager",
            "shulker",
            "silverfish",
            "skeleton",
            "slime",
          ],
          [
            "spider",
            "stray",
            "vex", 
            "illager", 
            "witch", 
            "wither", 
            "wither-skeleton", 
            "zoglin",
            "zombie",
            "zombie-villager",
            "zombified-piglin"
          ]
        ],
        removeText: true,
      },
      counter: {
        icon: "zombie",
      },
    },
  }
];
