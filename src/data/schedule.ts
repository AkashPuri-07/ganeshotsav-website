export type ScheduleEvent = {
  date: string;
  event: string;
  time?: string;
  tbc?: boolean;
  subEvents?: string[];
};

export const scheduleEvents: ScheduleEvent[] = [
  { date: "Sept 17 & 24", event: "Mahaarti" },
  {
    date: "Sept 19",
    event: "Drawing Competition",
    time: "4:00 PM – 7:00 PM",
  },
  {
    date: "Sept 19",
    event: "Dance Competition",
    time: "7:00 PM – 9:00 PM",
  },
  { date: "Sept 19 or 20", event: "Fancy Dress Competition", tbc: true },
  {
    date: "Sept 20",
    event: "Sports",
    time: "from 9:00 AM",
    subEvents: [
      "Running",
      "Rangoli",
      "Lemon Spoon (Limbu Chamcha)",
      "Musical Chair (Women's only)",
    ],
  },
  { date: "Sept 20", event: "Satyanarayan Pooja and Gan Homa" },
];
