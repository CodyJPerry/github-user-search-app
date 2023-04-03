import "./profileCard.styles.scss";

const ProfileCard = ({ user }) => {
  const {
    login,
    name,
    bio,
    created_at,
    public_repos,
    followers,
    following,
    location,
    blog,
    twitter_username,
    company,
    avatar_url,
    url,
  } = user;

  return (
    <div className="profile-card">
      <div className="header">
        <div className="avatar-wrapper">
          <img
            className="profile-image"
            src={avatar_url}
            alt="Profile Avatar"
          />
        </div>
        <h2>{name}</h2>
        <a href={url}>{`@${login}`}</a>
        <p>{created_at}</p>
      </div>
      <div className="bio">
        <p>{bio}</p>
      </div>
      <div className="body">
        <div className="profile-highlights">
          <div className="highlight">
            <p>Repos</p>
            <span>{public_repos}</span>
          </div>
          <div className="highlight">
            <p>Followers</p>
            <span>{followers}</span>
          </div>
          <div className="highlight">
            <p>Following</p>
            <span>{following}</span>
          </div>
        </div>
        <div className="location-social-info">
          <div className="location">
            <p>{location}</p>
          </div>
          <div className="twitter-social">
            <p>{twitter_username}</p>
          </div>
          <div className="profile-link">
            <a href={blog}>{blog}</a>
          </div>
          <div className="company">
            <p>{company}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProfileCard;
