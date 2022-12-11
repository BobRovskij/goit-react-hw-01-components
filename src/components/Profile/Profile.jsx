import PropTypes from "prop-types";
import style from "../Profile/Profile.module.css"

export default function Profile (props) {
    const { username, tag, location, avatar, followers, views, likes } = props;
    return (
        <div className={style.profile}>
            <div className={style.description}>
                <img
                    src={avatar}
                    alt="User avatar"
                    className={style.avatar}
                />
                <p className={style.name}>{username}</p>
                <p className={style.tag}>{tag}</p>
                <p className={style.location}>{location}</p>
            </div>

            <ul className={style.stats}>
                <li>
                    <span className={style.label}>Followers</span>
                    <span className={style.quantity}>{followers}</span>
                </li>
                <li>
                    <span className={style.label}>Views</span>
                    <span className={style.quantity}>{views}</span>
                </li>
                <li>
                    <span className={style.label}>Likes</span>
                    <span className={style.quantity}>{likes}</span>
                </li>
            </ul>
        </div>
    );
};

Profile.propTypes = {
    avatar: PropTypes.string.isRequired,
    username: PropTypes.string.isRequired,
    tag: PropTypes.string.isRequired,
    location: PropTypes.string.isRequired,
    followers: PropTypes.number.isRequired,
    views: PropTypes.number.isRequired,
    likes: PropTypes.number.isRequired
};