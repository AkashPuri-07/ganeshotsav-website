export type AartiReplay = {
  label: string;
  url: string;
};

export const liveAartiConfig = {
  aartiTimeText:
    "Morning: 8:00 AM – 9:00 AM · Evening: 8:00 PM – 9:00 PM",
  channelUrl: "https://www.youtube.com/@BelgaumBhagyavidhata",
  liveUrl: "https://www.youtube.com/@BelgaumBhagyavidhata/live",
};

// Newest first. After each aarti stream ends, add its link at the top, e.g.
//   { label: "Day 6 · Evening Aarti", url: "https://www.youtube.com/watch?v=XXXXXXXXXXX" }
export const aartiReplays: AartiReplay[] = [];

export function getYouTubeId(url: string): string | null {
  try {
    const u = new URL(url);
    if (u.hostname === "youtu.be") return u.pathname.slice(1) || null;
    const v = u.searchParams.get("v");
    if (v) return v;
    const match = u.pathname.match(/^\/(?:live|shorts|embed)\/([\w-]{11})/);
    return match ? match[1] : null;
  } catch {
    return null;
  }
}
