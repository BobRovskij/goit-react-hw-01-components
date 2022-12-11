import PropTypes from "prop-types";
import style from "../Statistics/Statistics.module.css"

export default function Statistics(props) {
  const { title = 'Upload stats', stats } = props;
  return (
    <section className={style.statistics}>
      {title && <h2 className={style.title}>{title}</h2>}
      <ul className={style.stat__list}>
        {stats.map(el => (
          <li className={style.item} key={el.id}>
            <span className={style.label}>{el.label}</span>
            <span className={style.percentage}>{el.percentage}%</span>
          </li>
        ))}
      </ul>
    </section>
  );
}
Statistics.propTypes = {
  title: PropTypes.string,
  stats: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      label: PropTypes.string.isRequired,
      percentage: PropTypes.number.isRequired,
    }),
  ),
};