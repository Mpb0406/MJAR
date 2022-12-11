export const blockLiftsPrompts = [
  {
    lift: "Squat",
    description: "Performed twice per week for a minimum of 4 weeks.",
    coreLift: true,
  },
  { lift: "Bench", description: "Performed twice per week", coreLift: true },
  { lift: "Deadlift", description: "Performed twice per week", coreLift: true },
  {
    lift: "Vertical Pull 1",
    description:
      "This will be an accessory lift for performed twice per week. Examples would be pull-ups, pull-downs.",
  },
  {
    lift: "Vertical Pull 2",
    description:
      "This will be an accessory lift for performed twice per week. Examples would be pull-ups, pull-downs.",
  },
  {
    lift: "Horizontal Pull 1",
    description:
      "This will be an accessory lift for performed twice per week. Examples would be machine rows, barbell rows.",
  },
  {
    lift: "Horizontal Pull 2",
    description:
      "This will be an accessory lift for performed twice per week. Examples would be machine rows, barbell rows.",
  },
  {
    lift: "Upper Back Accessory 1",
    description:
      "This will be an accessory lift for performed twice per week. Examples would be machine rows, barbell rows.",
  },
  {
    lift: "Upper Back Accessory 2",
    description:
      "This will be an accessory lift for performed twice per week. Examples would be machine rows, barbell rows.",
  },
  {
    lift: "Shoulder Press",
    description:
      "This will be an accessory lift for performed twice per week. Examples would be machine rows, barbell rows.",
  },
  {
    lift: "Bicep Curl 1",
    description:
      "This will be an accessory lift for performed twice per week. Examples would be machine rows, barbell rows.",
  },
  {
    lift: "Tricep 1",
    description:
      "This will be an accessory lift for performed twice per week. Examples would be machine rows, barbell rows.",
  },
  {
    lift: "Incline Press",
    description:
      "This will be an accessory lift for performed twice per week. Examples would be machine rows, barbell rows.",
  },
  {
    lift: "Chest Isolation",
    description:
      "This will be an accessory lift for performed twice per week. Examples would be machine rows, barbell rows.",
  },
  {
    lift: "Lateral Raise Variation",
    description:
      "This will be an accessory lift for performed twice per week. Examples would be machine rows, barbell rows.",
  },
  {
    lift: "Compound Leg Accesory",
    description:
      "This will be an accessory lift for performed twice per week. Examples would be machine rows, barbell rows.",
  },
  {
    lift: "Quad Accessory",
    description:
      "This will be an accessory lift for performed twice per week. Examples would be machine rows, barbell rows.",
  },
  {
    lift: "Hamstring Accessory",
    description:
      "This will be an accessory lift for performed twice per week. Examples would be machine rows, barbell rows.",
  },
  {
    lift: "Calf Accessory",
    description:
      "This will be an accessory lift for performed twice per week. Examples would be machine rows, barbell rows.",
  },
  {
    lift: "Single-Leg Accessory",
    description:
      "This will be an accessory lift for performed twice per week. Examples would be machine rows, barbell rows.",
  },
  {
    lift: "Farmer's Carry",
    description:
      "This will be an accessory lift for performed twice per week. Examples would be machine rows, barbell rows.",
  },
  {
    lift: "Non-Rotational Accessory",
    description:
      "This will be an accessory lift for performed twice per week. Examples would be machine rows, barbell rows.",
  },
  {
    lift: "Rotational Accessory",
    description:
      "This will be an accessory lift for performed twice per week. Examples would be machine rows, barbell rows.",
  },
  { lift: "", description: "" },
];

export const StrengthADays = [
  {
    day: "Day 1: Squats & Upper",
    notes: "Squats will be performed to a top set of 5",
  },
  {
    day: "Day 2: Bench & Push",
    notes: "Bench will be performed to a top set of 3",
  },
  {
    day: "Day 3: Deadlifts & Legs",
    notes: "Deadlifts will be performed to a top set of 3",
  },
  {
    day: "Day 4: Squats, Bench & Upper",
    notes:
      "Squats will be performed to a top set of 3 and Bench to a top set of 5",
  },
  {
    day: "Day 5: Deadlifts & Back",
    notes: "Deadlifts will be performed to a top set of 4",
  },
];

export const weekDetails = {
  hypertrophyAWeeks: [
    { week: "Week 1", rpe: 6, percent: 75, acc: "12-15" },
    { week: "Week 2", rpe: 7, percent: 80, acc: "12-15" },
    { week: "Week 3", rpe: 8, percent: 80, acc: "10-12" },
    { week: "Week 4", rpe: 9, percent: 85, acc: "10-12" },
    { week: "Deload", rpe: 7, percent: 70, acc: "12-15" },
  ],
  hypertrophyBWeeks: [
    { week: "Week 1", rpe: 9, percent: 85, acc: "8-10" },
    { week: "Week 2", rpe: 8, percent: 90, acc: "8-10" },
    { week: "Week 3", rpe: 9, percent: 90, acc: "6-8" },
    { week: "Week 4", rpe: 9, percent: 92.5, acc: "6-8" },
    { week: "Deload", rpe: 7, percent: 70, acc: "12-15" },
  ],
  strengthAWeeks: [
    { week: "Week 1", rpe: 7, percent: 80, acc: "8-10" },
    { week: "Week 2", rpe: 8, percent: 80, acc: "8-10" },
    { week: "Week 3", rpe: 8, percent: 85, acc: "8-10" },
    { week: "Week 4", rpe: 9, percent: 85, acc: "6-8" },
    { week: "Deload", rpe: 7, percent: 70, acc: "12-15" },
  ],
  strengthBWeeks: [
    { week: "Week 1", rpe: 7, percent: 90, acc: "6-8" },
    { week: "Week 2", rpe: 8, percent: 90, acc: "6-8" },
    { week: "Week 3", rpe: 9, percent: 90, acc: "4-6" },
    { week: "Week 4", rpe: 9, percent: 92.5, acc: "4-6" },
    { week: "Deload", rpe: 7, percent: 70, acc: "12-15" },
  ],
};

// Conditionally Assign Class for Background Color on Badges for Set-Types
export const setTypeClass = (setType) => {
  switch (setType) {
    case "Warm-Up":
      return "bg-input";
    case "Top Set":
      return "bg-danger";
    case "Working Set":
      return "bg-success";
    case "AMRAP":
      return "bg-primary";
  }
};
