import PropTypes from 'prop-types';
import style from './FriendListItem.module.css';

export default function FriendListItem(props) {
  const { avatar, name, isOnline } = props;
  return (
    <div className={style.item}>
      <span className={style.status} style={{ backgroundColor: isOnline ? 'green' : 'red' }}>
        {isOnline}
      </span>
      <img className={style.avatar} src={avatar} alt={name} width="48" />
      <p className={style.name}>{name}</p>
    </div>
  );
}
FriendListItem.propTypes = {
  avatar: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  isOnline: PropTypes.bool,
};