export const getTweets = (req, res) => {
  res.status(200).send("GET tweets called!");
};

export const createTweet = (req, res) => {
  res.status(200).send("POST tweet created!");
};
