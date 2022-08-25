const uniformsTemplate = {
  ballet: {
    title: "Ballet Uniform:",
    levels: [
      `Preschool:  DANCE CO Allegra Bodysuit with attached skirt`,
      `Pre-primary: DANCE CO May Bodysuit, DANCE CO Pink Skirt`,
      `Primary: DANCE CO May Bodysuit, DANCE CO Pink Skirt`,
      `Junior: DANCE CO Black Mesh Bodysuit`,
      `Intermediate and Senior: DANCE CO Black Bodysuit & optional black skirt`,
      `Boys: Fitted white DANCE CO bodysuit & DANCE CO shorts`,
    ],
    shoes: ` Shoes: Snug fitting Canvas Ballet shoe ("Star-split" 15C, "Pro" 1C or "Stretch
      One")`,
  },
  jazz: {
    title: "JAZZ, LYRICAL, STAGE & MUSICAL THEATRE Uniform:",
    levels: [
      `All levels: DANCE CO fitted leggings or shorts & a DANCE CO well-fitted top or bodysuit`,
    ],
    shoes: `Shoes: Black Sansha Jazz shoe (Shoes for lyrical and stage will be determined
      by the instructor).`,
  },
  acro: {
    title: `CONTEMPORARY Uniform:`,
    levels: [
      `All levels: DANCE CO fitted leggings or shorts & a DANCE CO well-fitted top or
      bodysuit.`,
    ],
    shoes: `Shoes: Bare feet. Dance Socks, Pirouette Turning Shoes, or Foot Undeez may
    be required in contemporary at the discretion of the instructor.`,
  },
  tumbling: {
    title: `Acro & TUMBLING Uniform:`,
    levels: [
      `All levels: DANCE CO fitted leggings or shorts & a DANCE CO well-fitted top or
      bodysuit.`,
    ],
    shoes: `Shoes: Bare feet.`,
  },
  aerialSilks: {
    title: `AERIAL SILKS Uniform:`,
    levels: [
      `All levels: DANCE CO fitted leggings or shorts & a DANCE CO well-fitted bodysuit.`,
    ],
    shoes: `Shoes: Bare feet.`,
  },
  tap: {
    title: `TAP Uniform:`,
    levels: [
      `All levels: DANCE CO fitted leggings or shorts & a DANCE CO well-fitted top or
      bodysuit.`,
    ],
    shoes: `Shoes: Sansha Black Leather Tap Shoe`,
  },
  hiphop: {
    title: `HIP HOP & BREAKDANCE Uniform:`,
    levels: [
      `All levels: DANCE CO hip hop pants or shorts & choice of Dance Co hip hop
      shirt`,
    ],
    shoes: `Shoes: Puma Classic Black & White Suede shoes - available at Vancouver
    Dance Supply`,
  },
  balletTap: {
    title: "Ballet/Tap Uniform:",
    levels: [
      `Preschool: DANCE CO Allegra Bodysuit with attached skirt`,
      `Pre-Primary: DANCE CO May Bodysuit, DANCE CO May Skirt`,
      `Boys: Fitted white DANCE CO bodysuit & DANCE CO shorts`,
    ],
    shoes: ` Ballet: Snug fitting Canvas Ballet shoe ("Star-split" 15C, "Pro" 1C or "Stretch
      One"), Tap: Sansha Black Leather Tap Shoe`,
  },
};

export const uniforms = {
  Ballet: uniformsTemplate.ballet,
  Jazz: uniformsTemplate.jazz,
  Tap: uniformsTemplate.tap,
  Contemporary: uniformsTemplate.acro,
  Acro: uniformsTemplate.tumbling,
  Tumbling: uniformsTemplate.tumbling,
  "Aerial Silks": uniformsTemplate.aerialSilks,
  "Musical Theatre": uniformsTemplate.jazz,
  Breakdance: uniformsTemplate.hiphop,
  "Hip Hop": uniformsTemplate.hiphop,
  "Ballet/Tap": uniformsTemplate.balletTap,
  Lyrical: uniformsTemplate.jazz,
  "Hip Hop/Breakdance": uniformsTemplate.hiphop,
};
