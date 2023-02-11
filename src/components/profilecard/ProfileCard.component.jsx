const ProfileCard = ({user}) => {
    const { login, 
            name, 
            bio, 
            created_at, 
            public_repos, 
            followers, 
            following,
            location, 
            blog,
            twitter_username,
            company
        } = user;

    return (
        <div className="profile-card">
            <div className="avatar-wrapper"></div>
            <div className="profile-wrapper">
                <h2>{name}</h2>
                <p>{`@${login}`}</p>
                <p>{bio}</p>
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
                        <span>{public_repos}</span>
                    </div>
                    <div className="twitter-social">
                        <p>{twitter_username}</p>
                        <span>{followers}</span>
                    </div>
                    <div className="profile-link">
                        <p>{blog}</p>
                        <span>{following}</span>
                    </div>
                    <div className="company">
                        <p>{company}</p>
                        <span>{following}</span>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default ProfileCard;