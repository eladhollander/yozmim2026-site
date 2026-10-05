export interface SessionRow {
  num: string;
  date: string;
  daytime: string;
  different: boolean;
  location: "eilat" | "zoom";
  topic: string;
  detail: string;
  tags: string[];
}

export const sessions: SessionRow[] = [
  {
    num: "1",
    date: "14 ביוני 2026",
    daytime: "יום ראשון · 16:00-20:00",
    different: false,
    location: "eilat",
    topic: "מבוא - מהמקום הזה מתחילים",
    detail:
      "הצגת מטרות הקורס והמבנה הכללי, היכרות בין המשתתפים, ומיפוי המסע המשותף שלפנינו.",
    tags: ["Onboarding", "Cohort Intro"],
  },
  {
    num: "2",
    date: "21 ביוני 2026",
    daytime: "יום ראשון · 16:00-20:00",
    different: false,
    location: "zoom",
    topic: "גיבוש רעיון באמצעות Canvas",
    detail:
      "פיתוח ראשוני של רעיון המיזם ומילוי Lean Canvas, תרגול מעשי בכיתה והיכרות עם עקרונות Lean Startup וגישות ולידציה.",
    tags: ["Lean Canvas", "Lean Startup"],
  },
  {
    num: "3",
    date: "28 ביוני 2026",
    daytime: "יום ראשון · 16:00-20:00",
    different: false,
    location: "eilat",
    topic: "העמקת העבודה על הרעיון",
    detail:
      "הבנת שלבי ההתפתחות של סטארט-אפ, סדנת ולידציה להיפותזות, עבודה עם Test Card ודיון במניעים להקמת מיזם.",
    tags: ["Hypothesis Validation", "Test Card"],
  },
  {
    num: "4",
    date: "9 ביולי 2026",
    daytime: "יום חמישי · 16:00-20:00",
    different: true,
    location: "zoom",
    topic: "הצוות והיזם",
    detail:
      "סקירת שלבי התפתחות סטארט-אפ, אפיון תכונות ומיומנויות של יזם מצליח, והיבטים בבניית צוות וגיוס שותפים.",
    tags: ["Founder Profile", "Team Building"],
  },
  {
    num: "5",
    date: "13 ביולי 2026",
    daytime: "יום שני · 16:00-20:00",
    different: true,
    location: "eilat",
    topic: "ולידציה - להקשיב לשוק",
    detail:
      "מבוא לתהליך הולידציה, Customer Development ועבודה מול השוק, חידוד הנחות עבודה והיכרות עם מושגי היפותזה ופיבוט.",
    tags: ["Customer Development", "Pivot"],
  },
  {
    num: "6",
    date: "19 ביולי 2026",
    daytime: "יום ראשון · 16:00-20:00",
    different: false,
    location: "zoom",
    topic: "העמקת תהליכי ולידציה",
    detail:
      "הגדרת מדדי הצלחה (KPIs), מבוא לעיצוב מוצר והיכרות עם מתודולוגיית Design Thinking, והכוונה למשימות המשך.",
    tags: ["KPIs", "Design Thinking"],
  },
  {
    num: "7",
    date: "26 ביולי 2026",
    daytime: "יום ראשון · 16:00-20:00",
    different: false,
    location: "eilat",
    topic: "יישום ולידציה במיזם",
    detail:
      "מיפוי משאבים ואתגרים בגיוסם, עבודה פרקטית על המיזם האישי של כל משתתף, ובניית תוכנית פעולה להמשך תהליך הולידציה.",
    tags: ["Resource Mapping", "Action Plan"],
  },
  {
    num: "8",
    date: "2 באוגוסט 2026",
    daytime: "יום ראשון · 16:00-20:00",
    different: false,
    location: "zoom",
    topic: "גיוס הון וניהול פיננסי",
    detail:
      "תהליך גיוס השקעות - מתי וכיצד, סוגי משקיעים וקרנות הון סיכון, עקרונות בניהול תקציב ואקוויטי, וסדנת Pitch לשיפור הצגת המיזם.",
    tags: ["Fundraising", "VC", "Pitch"],
  },
  {
    num: "9",
    date: "9 באוגוסט 2026",
    daytime: "יום ראשון · 16:00-20:00",
    different: false,
    location: "zoom",
    topic: "שיווק ופרסום",
    detail:
      "מדדים להערכת הצלחת סטארט-אפ, בניית אסטרטגיה שיווקית, וסקירת כלים מרכזיים בשיווק דיגיטלי לסטארטאפ.",
    tags: ["Marketing Strategy", "Growth"],
  },
  {
    num: "10",
    date: "16 באוגוסט 2026",
    daytime: "יום ראשון · 16:00-20:00",
    different: false,
    location: "eilat",
    topic: "פיתוח מוצר ו-MVP",
    detail:
      "עקרונות ותהליכים בפיתוח Minimum Viable Product, ניתוח דוגמאות מהשטח, תכנון והדגמה של MVP ראשון למיזם.",
    tags: ["MVP", "Product Development"],
  },
  {
    num: "11",
    date: "27 באוגוסט 2026",
    daytime: "יום חמישי · 16:00-20:00",
    different: true,
    location: "eilat",
    topic: "העמקה במוצר ובהיבטים פיננסיים",
    detail:
      "עקרונות פיננסיים לניהול מיזם ותמחור, התאמת מוצר לצרכים על סמך ראיונות משתמשים, יצירת Mockup והכנה לקראת Demo Day.",
    tags: ["Pricing", "User Research", "Mockup"],
  },
  {
    num: "12",
    date: "2 בספטמבר 2026",
    daytime: "יום רביעי · 16:00-20:00",
    different: true,
    location: "eilat",
    topic: "DEMO DAY - מפגש סיכום חגיגי 🎉",
    detail:
      "מפגש פרונטלי הסוגר את המסע - הצגת המיזמים על ידי המשתתפים, הכנה לפרזנטציה מול משקיעים, ופידבק חי ממנטורים ומשקיעים בשטח.",
    tags: ["Live Pitch", "Investors", "In-Person"],
  },
];
