import PropTypes from 'prop-types';
import style from './FriendList.module.css';
import FriendListItem from "../FriendListItem/FriendListItem";

export default function FriendList({ items }) {
  return (
    <ul className={style.friend__list}>
      {items.map(item => (
        <li key={item.id}>
          <FriendListItem
            avatar={item.avatar}
            name={item.name}
            isOnline={item.isOnline}
            id={item.id}
          />
        </li>
      ))}
    </ul>
  );
}

FriendList.propTypes = {
  items: PropTypes.arrayOf(
    PropTypes.shape({
        id: PropTypes.number.isRequired,
        avatar: PropTypes.string.isRequired,
        name: PropTypes.string.isRequired
    }),
  ),
};