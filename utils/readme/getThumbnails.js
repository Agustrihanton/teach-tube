module.exports  = function getThumbnailYT(url) {
  const urlObj = new URL(url);
  if (urlObj.hostname?.includes("youtube.com")) {
    const videoId = urlObj.searchParams.get("v");
    return `<img src=https://i3.ytimg.com/vi/${videoId}/maxresdefault.jpg alt=${videoId} width="320px" height="180px"/>`;
  }
  return null;
}

