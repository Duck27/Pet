import React from "react";
import Input from "../Input/Input";
import styles from "../CurrencyConvertor.module.css";
import { currencyDesc } from "../../@types/types";
import currencyTranslate from "../../../data/currencyTranslate";

interface CurrencyInputProps {
  value: string;
  currency: string;
  onValueChange: (value: string, side: string) => void;
  onCurrencyChange: (currency: string, side: string) => void;
  side: "left" | "right";
  filterActive: boolean;
  currencyDesc: currencyDesc;
}

const CurrencyInput: React.FC<CurrencyInputProps> = ({
  value,
  currency,
  onValueChange,
  onCurrencyChange,
  side,
  filterActive,
  currencyDesc,
}) => {
  return (
    <div className={styles.part_main}>
      <Input
        value={value}
        onInput={(value) => {
          
          onValueChange(value, side);
        }}
        className={styles.input_style}
      />
      {filterActive ? (
        <>
          <input
            list={`${side}-currencies`}
            value={currency}
            onChange={(e) => onCurrencyChange(e.target.value, side)}
            className={styles.dropdown_style}
            placeholder="Введите сюда название валюты"
          />
          <datalist id={`${side}-currencies`}>
            {Object.entries(currencyDesc).map(([code, _]) => (
              <option key={code} value={code}>
                {code} ({currencyTranslate[currencyDesc[code]]})
              </option>
            ))}
          </datalist>
        </>
      ) : (
        <select
          value={currency}
          onChange={(e) => onCurrencyChange(e.target.value, side)}
          className={styles.dropdown_style}
        >
          {Object.entries(currencyDesc).map(([code, _]) => (
            <option key={code} value={code}>
              {code} ({currencyTranslate[currencyDesc[code]]})
            </option>
          ))}
        </select>
      )}
    </div>
  );
};

export default CurrencyInput;
