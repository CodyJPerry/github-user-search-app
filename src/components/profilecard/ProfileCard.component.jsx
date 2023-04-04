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

  /**
   * @param {*} createdDate
   * @returns String
   */
  const getCreatedAtDate = (createdDate) => {
    const date = new Date(createdDate);
    const dateArr = date.toString().split(" ");

    return `${dateArr[2]} ${dateArr[1]} ${dateArr[3]}`;
  };

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
        <div className="details">
          <h2>{name}</h2>
          <a href={url}>{`@${login}`}</a>
          <p>{`Joined ${getCreatedAtDate(created_at)}`}</p>
        </div>
      </div>
      <div className="bio">
        <p>
          Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Donec odio.
          Quisque volutpat mattis eros.
        </p>
      </div>
      <div className="body">
        <div className="highlights">
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
