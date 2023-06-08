import css from '../component_filter/Filter.module.css';
export const Filter = ({ value, onChange }) => {
  return (
    <label className={css.filter_label}>
      Find contacts by name
      <input
        type="text"
        className={css.filter_input}
        value={value}
        onChange={onChange}
      />
    </label>
  );
};
