import React from "react";
import "./profileCard.styles.scss";
import LocationIcon from "../../assets/icon-location.svg";
import WebsiteIcon from "../../assets/icon-website.svg";
import TwitterIcon from "../../assets/icon-twitter.svg";
import CompanyIcon from "../../assets/icon-company.svg";
import { ProfileCardProps } from "../../interfaces";


const ProfileCard: React.FC<ProfileCardProps> = ({ user }) => {
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
          {avatar_url ? <img
            className="profile-image"
            src={avatar_url}
            alt="Profile Avatar"
          />: null}
        </div>
      <div className="content">
      <div className="header">
        <div className="details">
          <div className="title-wrapper">
          <h2>{name ? name : 'Not found'}</h2>
          <a href={url ? url : ''}>{url ? `@${login}` : null}</a>
          </div>
          <div className="created-at">
          <p>{created_at ? `Joined ${getCreatedAtDate(created_at)}` : null}</p>
          </div>
        </div>
      </div>
      <div className="bio">
        <p className={bio ? null : 'unavailable'}>{bio} {bio ? bio : `This profile has no bio.`}</p>
      </div>
      <div className="body">
        <div className="highlights">
          <div className="highlight">
            <p>Repos</p>
            <span>{public_repos ? public_repos : '0'}</span>
          </div>
          <div className="highlight">
            <p>Followers</p>
            <span>{followers ? followers : '0'}</span>
          </div>
          <div className="highlight">
            <p>Following</p>
            <span>{following ? following : '0'}</span>
          </div>
        </div>
        <div className="location-social-info">
          <div className="location">
            <img 
              className={location ? null : 'unavailable-img'}  
              src={LocationIcon} alt="Map marker icon to signal location" 
            />
            <p className={location ? null : 'unavailable'}>{location ? location : 'Not Available'}</p>
          </div>
          <div className="profile-link">
            <img 
              className={blog ? null : 'unavailable-img'} 
              src={WebsiteIcon} alt="Map marker icon to signal location" 
            />
            <p className={blog ? null : 'unavailable'}>
            {blog ? <a href={blog}>{blog}</a> : 'Not Available'}
            </p>
          </div>
          <div className="twitter-social">
            <img 
              className={twitter_username ? null : 'unavailable-img'} 
              src={TwitterIcon} alt="Map marker icon to signal location" 
            />
            <p className={twitter_username ? null : 'unavailable'}>{twitter_username ? `@${twitter_username}` : 'Not Available'}</p>
          </div>
          <div className="company">
            <img 
              className={company ? null : 'unavailable-img'} 
              src={CompanyIcon} alt="Map marker icon to signal location" 
            />
            <p className={company ? null : 'unavailable'}>{company ? company : 'Not Available'}</p>
          </div>
        </div>
      </div>
      </div>
    </div>
  );
};

export default ProfileCard;
