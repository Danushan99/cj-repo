
import React, { useState } from 'react';
import Chip from '@mui/material/Chip';

const MultiSelect = ({ options, onSelect }) => {
  const [selectedOptions, setSelectedOptions] = useState([]);

  const handleOptionToggle = (option) => () => {
    const currentIndex = selectedOptions.indexOf(option);
    const newSelectedOptions = [...selectedOptions];

    if (currentIndex === -1) {
      newSelectedOptions.push(option);
    } else {
      newSelectedOptions.splice(currentIndex, 1);
    }

    setSelectedOptions(newSelectedOptions);
    onSelect(newSelectedOptions);
  };

  return (
    <div>
      {options.map((option) => (
        <Chip
          key={option.value}
          label={option.label}
          variant={selectedOptions.indexOf(option) !== -1 ? 'filled' : 'outlined'}
          onClick={handleOptionToggle(option)}
          style={{ margin: '5px' }}
        />
      ))}
    </div>
  );
};

export default MultiSelect;
