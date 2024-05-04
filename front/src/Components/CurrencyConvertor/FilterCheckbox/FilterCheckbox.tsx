import React from "react";

type FilterCheckboxProps = {
  label: string;
  checked: boolean;
  onChange: () => void;
};

const FilterCheckbox: React.FC<FilterCheckboxProps> = ({
  label,
  checked,
  onChange,
}) => {
  return (
    <div className="filterCheckbox">
      <label>
        {label}
        <input type="checkbox" checked={checked} onChange={onChange} />
      </label>
    </div>
  );
};

export default FilterCheckbox;
