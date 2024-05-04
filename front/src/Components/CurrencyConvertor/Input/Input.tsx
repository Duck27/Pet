import React from "react";

interface InputProps {
  value: string;
  onInput: (value: string) => void;
  className?: string;
}

const Input: React.FC<InputProps> = ({ value, onInput, className }) => {
  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const newValue = e.target.value;
    // проверяем, соответствует ли введенное значение шаблону только цифр
    if (/^\d*$/.test(newValue)) {
      onInput(newValue);
    }
  };

  return (
    <input
      type="text"
      min="0"
      value={value}
      onChange={handleInputChange}
      className={className}
    />
  );
};

export default Input;
