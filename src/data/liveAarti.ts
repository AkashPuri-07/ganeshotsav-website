// latestBroadcastVideoId covers scheduled -> live -> replay automatically
// for the same video (YouTube's own embed player behavior) — update this
// one field whenever a new broadcast starts, no other logic needed.
export const liveAartiConfig = {
  latestBroadcastVideoId: "",
  aartiTimeText:
    "Morning: 8:00 AM – 9:00 AM · Evening: 8:00 PM – 9:00 PM",
  channelUrl: "https://www.youtube.com/@BelgaumBhagyavidhata",
};
