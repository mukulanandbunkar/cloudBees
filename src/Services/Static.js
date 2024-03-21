const StaticData = {
  userDetailKey: [
    "name",
    "login",
    "id",
    "bio",
    "blog",
    "company",
    "created_at",
    "followers",
    "following",
    "location",
    "public_gists",
    "public_repos",
    "twitter_username",
    "type",
    "updated_at",
    "html_url",
  ],
  extractDateTimeFromUTC: (utcTimestampString) => {
    const date = new Date(utcTimestampString);
    const year = date.getUTCFullYear();
    const month = date.getUTCMonth() + 1;
    const day = date.getUTCDate();
    const hours = date.getUTCHours();
    const minutes = date.getUTCMinutes();
    const seconds = date.getUTCSeconds();
    const formattedDate = `${year}-${month < 10 ? "0" : ""}${month}-${
      day < 10 ? "0" : ""
    }${day}`;
    const formattedTime = `${hours < 10 ? "0" : ""}${hours}:${
      minutes < 10 ? "0" : ""
    }${minutes}:${seconds < 10 ? "0" : ""}${seconds}`;
    return `${formattedDate}, ${formattedTime}`;
  },
  getLabel: (key) => key.split("_").join(" "),
  isUrl: ["html_url"],
  isUTC: ["updated_at", "created_at"],
  headers: {
    "X-GitHub-Api-Version": "2022-11-28",
  },
};

export default StaticData;
