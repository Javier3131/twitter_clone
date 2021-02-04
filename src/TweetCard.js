const TweetCard = ({ name, user, tweet }) => {
  return (
    <div className="tweet-card w-100">
      <div className="card">
        <div className="card-body">
          <p className="card-text">
            <a href="#">{name}</a> <label className="text-muted">{user}</label>
          </p>
          <p className="card-text">{tweet}</p>
        </div>
      </div>
    </div>
  );
};

export default TweetCard;
