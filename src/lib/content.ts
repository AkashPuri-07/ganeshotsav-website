import fs from "fs";
import path from "path";

export type DailyUpdate = {
  day: number;
  date: string;
  title: string;
  highlight: string;
  writeup: string;
  photos: string[];
  youtubeUrl?: string;
};

const DAILY_UPDATES_DIR = path.join(
  process.cwd(),
  "content",
  "daily-updates",
);

export function getDailyUpdates(): DailyUpdate[] {
  if (!fs.existsSync(DAILY_UPDATES_DIR)) return [];

  const files = fs
    .readdirSync(DAILY_UPDATES_DIR)
    .filter((file) => /^day-\d+\.json$/.test(file));

  const updates = files.map((file) => {
    const raw = fs.readFileSync(path.join(DAILY_UPDATES_DIR, file), "utf-8");
    return JSON.parse(raw) as DailyUpdate;
  });

  return updates.sort((a, b) => b.day - a.day);
}

const GALLERY_DIR = path.join(process.cwd(), "public", "gallery");
const IMAGE_EXTENSIONS = /\.(jpe?g|png|webp)$/i;

// Flat list for now — no year metadata yet. If year-sorting is added later,
// swap this for a manifest file that pairs each filename with a year.
export function getGalleryPhotos(): string[] {
  if (!fs.existsSync(GALLERY_DIR)) return [];

  return fs
    .readdirSync(GALLERY_DIR)
    .filter((file) => IMAGE_EXTENSIONS.test(file))
    .sort();
}
