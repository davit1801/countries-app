import React from 'react';
import styles from './SortSelect.module.css';

type Props = {
  handleSortChange: React.ChangeEventHandler<HTMLSelectElement>;
};

const SortSelect = ({ handleSortChange }: Props) => {
  return (
    <select onChange={handleSortChange} className={styles.select_input}>
      <option value="">Sort by Likes</option>
      <option value="decrease">Decreases by likes</option>
      <option value="increase">Encreases by likes</option>
    </select>
  );
};

export default SortSelect;
