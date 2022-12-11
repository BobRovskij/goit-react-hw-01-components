import PropTypes from 'prop-types';
import style from './TransactionHistory.module.css';

export default function TransactionHistory({ items }) {
  return (
    <table className={style.transaction__history}>
      <thead>
        <tr className={style.string}>
          <th className={style.label}>Type</th>
          <th className={style.label}>Amount</th>
          <th className={style.label}>Currency</th>
        </tr>
      </thead>

      <tbody>
        {items.map(item => (
          <tr className={style.string} key={item.id}>
            <td className={style.item}>{item.type}</td>
            <td className={style.item}>{item.amount}</td>
            <td className={style.item}>{item.currency}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}
TransactionHistory.propTypes = {
  items: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      type: PropTypes.string.isRequired,
      amount: PropTypes.string.isRequired,
      currency: PropTypes.string.isRequired,
    }),
  ),
};