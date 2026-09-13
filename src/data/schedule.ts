export type ScheduleEvent = {
  date: string;
  event: string;
  tbc?: boolean;
};

export const scheduleEvents: ScheduleEvent[] = [
  { date: "Sept 17 & 24", event: "Mahaarti" },
  { date: "Sept 19", event: "Drawing Competition & Rangoli Competition" },
  { date: "Sept 19 or 20", event: "Fancy Dress Competition", tbc: true },
  { date: "Sept 20", event: "Satyanarayan Pooja and Gan Homa" },
];
