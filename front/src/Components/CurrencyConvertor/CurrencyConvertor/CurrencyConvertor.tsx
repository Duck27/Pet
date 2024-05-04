import React, { useState } from "react";
import styles from "../CurrencyConvertor.module.css";
import Loading from "../Loading/Loading.tsx";
import FilterCheckbox from "./../FilterCheckbox/FilterCheckbox";

import useCurrencyRates from "../../../hooks/useCurrencyRates.ts";
import { useCurrencyConverter } from "../../../hooks/useCurrencyConverter.ts";
import CurrencyInput from "../CurrencyInput/CurrencyInput.tsx";
import { useRouter } from "next/router";

function CurrencyConvertor() {
  const { rates, currencyDesc, isLoading, error } = useCurrencyRates();
  const convertCurrency = useCurrencyConverter(rates);
  const router = useRouter();

  const [leftValue, setLeftValue] = useState("1");
  const [rightValue, setRightValue] = useState("1");
  const [leftCurrency, setLeftCurrency] = useState("USD");
  const [rightCurrency, setRightCurrency] = useState("USD");
  const [leftFilterActive, setLeftFilterActive] = useState(false);
  const [rightFilterActive, setRightFilterActive] = useState(false);

  const handleCurrencyChange = (currency: string, side: string) => {
    if (side === "left") {
      setLeftCurrency(currency);
      setRightValue(
        convertCurrency(Number(leftValue), currency, rightCurrency)
      );
    } else {
      setRightCurrency(currency);
      setLeftValue(convertCurrency(Number(rightValue), currency, leftCurrency));
    }
  };

  const handleInputChange = (value: string, side: string) => {
    if (side === "left") {
      setLeftValue(value);
      setRightValue(
        convertCurrency(Number(value), leftCurrency, rightCurrency)
      );
    } else {
      setRightValue(value);
      setLeftValue(convertCurrency(Number(value), rightCurrency, leftCurrency));
    }
  };

  if (isLoading) {
    return <Loading />;
  }

  if (error) {
    router.replace("/Error");
  }

  return (
    <div className={styles.body_background}>
      <div className={styles.partWrapper}>
        <CurrencyInput
          value={leftValue}
          currency={leftCurrency}
          onValueChange={handleInputChange}
          onCurrencyChange={handleCurrencyChange}
          side="left"
          filterActive={leftFilterActive}
          currencyDesc={currencyDesc}
        />
        <div className={styles.checkboxWrapper}>
          <FilterCheckbox
            label="Ручной поиск валюты"
            checked={leftFilterActive}
            onChange={() => setLeftFilterActive(!leftFilterActive)}
          />
        </div>
      </div>

      <span className={styles.conversion_equals}> = </span>
      <div className={styles.partWrapper}>
        <CurrencyInput
          value={rightValue}
          currency={rightCurrency}
          onValueChange={handleInputChange}
          onCurrencyChange={handleCurrencyChange}
          side="right"
          filterActive={rightFilterActive}
          currencyDesc={currencyDesc}
        />
        <div className={styles.checkboxWrapper}>
          <FilterCheckbox
            label="Ручной поиск валюты"
            checked={rightFilterActive}
            onChange={() => setRightFilterActive(!rightFilterActive)}
          />
        </div>
      </div>
    </div>
  );
}

export default CurrencyConvertor;
