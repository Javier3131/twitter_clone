import TweetCard from './TweetCard';

const Feed = () => {
  return (
    <div className="feed">
      <div className="row">
        <TweetCard
          name="Bootstrap"
          user="@getbootstrap"
          tweet="Starting 2021 right—we’ll be adding over 60 new icons in our next release! Some good ones in here, including some of our oldest requests. Stay tuned!"
        ></TweetCard>
      </div>
      <div className="row">
        <TweetCard
          name="react"
          user="@react"
          tweet="The issue seems to have been resolved for most users."
        ></TweetCard>
      </div>
    </div>
  );
};

export default Feed;
