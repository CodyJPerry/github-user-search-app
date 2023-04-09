import "./profileCard.styles.scss";
import LocationIcon from "../../assets/icon-location.svg";
import WebsiteIcon from "../../assets/icon-website.svg";
import TwitterIcon from "../../assets/icon-twitter.svg";
import CompanyIcon from "../../assets/icon-company.svg";

const ProfileCard = ({ user }) => {
  const {
    login,
    name,
    bio,
    created_at,
    public_repos,
    followers,
    location,
    blog,
    company,
    twitter_username,
    following,
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
            <div className="avatar-wrapper">
          <img
            className="profile-image"
            src={avatar_url}
            alt="Profile Avatar"
          />
        </div>
      <div className="content">
      <div className="header">
        {/* <div className="avatar-wrapper">
          <img
            className="profile-image"
            src={avatar_url}
            alt="Profile Avatar"
          />
        </div> */}
        <div className="details">
          <div className="title-wrapper">
          <h2>{name}</h2>
          <a href={url}>{`@${login}`}</a>
          </div>
          <div className="created-at">
          <p>{`Joined ${getCreatedAtDate(created_at)}`}</p>
          </div>
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
            <img src={LocationIcon} alt="Map marker icon to signal location" />
            <p>{location}</p>
          </div>
          <div className="profile-link">
            <img src={WebsiteIcon} alt="Map marker icon to signal location" />
            <a href={blog}>{blog}</a>
          </div>
          <div className="twitter-social">
            {/* <p>{twitter_username}</p> */}
            <img src={TwitterIcon} alt="Map marker icon to signal location" />
            <p>Not Available</p>
          </div>
          <div className="company">
            <img src={CompanyIcon} alt="Map marker icon to signal location" />
            <p>{company}</p>
          </div>
        </div>
      </div>
      </div>
    </div>
  );
};

export default ProfileCard;
