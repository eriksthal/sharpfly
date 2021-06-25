const uniformsTemplate = {
  ballet: {
    title: "Ballet Uniform:",
    levels: [
      `All Levels: Snug fitting DANCE CO Bodysuit & Pink Sansha Tights.`,
      `Preschool, Pre-Primary: DANCE CO Pink & White Raglan or Boatneck
      Bodysuit, DANCE CO Pink & White Skirt (Skirt should sit on waist - not
      hips, with the bottom of the skirt in line with the bottom of the
      fingertips. Correct sizing is required to use the skirt properly in
      class.)`,
      `Primary: DANCE CO Black & Pink Raglan, DANCE CO Black & Pink Skirt`,
      `Recreational/Demi-Comp Junior: DANCE CO Black Bodysuit, DANCE CO Black
      & White Skirt`,
      `Recreational/Demi-Comp Intermediate & Senior: DANCE CO Black Bodysuit,
      DANCE CO White Waist Elastic (This provides teachers with an enhanced
      view of dancer alignment)`,
      `Boys: Fitted white DANCE CO bodysuit & DANCE CO shorts or leggings.`,
    ],
    shoes: ` Shoes: Snug fitting Canvas Ballet shoe ("Star-split" 15C, "Pro" 1C or
    "Stretch One")`,
  },
  jazz: {
    title: "JAZZ, LYRICAL, STAGE & MUSICAL THEATRE Uniform:",
    levels: [
      `All: DANCE CO fitted leggings or shorts & a DANCE CO well fitted top
        or bodysuit.`,
    ],
    shoes: `Shoes: Black Sansha Jazz shoe. (Shoes for lyrical and stage will be
      determined by the instructor.)`,
  },
  acro: {
    title: `ACRO & CONTEMPORARY Uniform:`,
    levels: [
      `All: DANCE CO fitted leggings or shorts & a DANCE CO well fitted top
    or bodysuit.`,
    ],
    shoes: `Shoes: Bare feet. Dance Socks, Pirouette Turning Shoes, or Foot Undeez
    may be required in Contemporary at the discretion of the instructor.`,
  },
  tumbling: {
    title: `TUMBLING Uniform:`,
    levels: [
      `All: DANCE CO fitted leggings or shorts & a DANCE CO well fitted top
    or bodysuit.`,
    ],
    shoes: `Shoes: Bare feet.`,
  },
  aerialSilks: {
    title: `AERIAL SILKS Uniform:`,
    levels: [
      `All: DANCE CO fitted leggings or shorts & a DANCE CO well fitted top
    or bodysuit.`,
    ],
    shoes: `Shoes: Bare feet. Dance Socks, Pirouette Turning Shoes, or Foot Undeez
    may be required in AERIAL SILKS at the discretion of the instructor.`,
  },
  tap: {
    title: `TAP Uniform:`,
    levels: [
      `DANCE CO fitted leggings or shorts & a DANCE CO well fitted top or
    bodysuit.`,
    ],
    shoes: `Shoes: Well fitting Sansha Black Leather Tap Shoe T-Moravia Junior
    Intensive 2`,
  },
  hiphop: {
    title: `HIP HOP & BREAKDANCE Uniform:`,
    levels: [
      `Preschool - Senior: DANCE CO hip hop pants or shorts & choice of Dance
    Co hiphop shirt. DANCE CO Sleeveless Crop Top and Cross Back Top MUST
    be worn over a DANCE CO sports bra or bodysuit.`,
    ],
    shoes: `Shoes: Puma Classic Black & White Suede shoes – available at Vancouver
    Dance Supply.`,
  },
  balletTap: {
    title: "Ballet/Tap Uniform:",
    levels: [
      `Ballet:`,
      `All Levels: Snug fitting DANCE CO Bodysuit & Pink Sansha Tights.`,
      `Preschool, Pre-Primary: DANCE CO Pink & White Raglan or Boatneck
      Bodysuit, DANCE CO Pink & White Skirt (Skirt should sit on waist - not
      hips, with the bottom of the skirt in line with the bottom of the
      fingertips. Correct sizing is required to use the skirt properly in
      class.)`,
      `Primary: DANCE CO Black & Pink Raglan, DANCE CO Black & Pink Skirt`,
      `Recreational/Demi-Comp Junior: DANCE CO Black Bodysuit, DANCE CO Black
      & White Skirt`,
      `Recreational/Demi-Comp Intermediate & Senior: DANCE CO Black Bodysuit,
      DANCE CO White Waist Elastic (This provides teachers with an enhanced
      view of dancer alignment)`,
      `Boys: Fitted white DANCE CO bodysuit & DANCE CO shorts or leggings.`,
      `Tap:`,
      `DANCE CO fitted leggings or shorts & a DANCE CO well fitted top or
      bodysuit.`,
    ],
    shoes: ` Ballet Shoes: Snug fitting Canvas Ballet shoe ("Star-split" 15C, "Pro" 1C or
    "Stretch One"), Tap Shoes: Well fitting Sansha Black Leather Tap Shoe T-Moravia Junior
    Intensive 2`,
  },
};

export const uniforms = {
  Ballet: uniformsTemplate.ballet,
  Jazz: uniformsTemplate.jazz,
  Tap: uniformsTemplate.tap,
  Contemporary: uniformsTemplate.acro,
  Acro: uniformsTemplate.acro,
  Tumbling: uniformsTemplate.tumbling,
  "Aerial Silks": uniformsTemplate.aerialSilks,
  "Musical Theatre": uniformsTemplate.jazz,
  Breakdance: uniformsTemplate.hiphop,
  "Hip Hop": uniformsTemplate.hiphop,
  "Ballet/Tap": uniformsTemplate.balletTap,
};
