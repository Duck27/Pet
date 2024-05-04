"use client";

import CurrencyConvertor from "../../Components/CurrencyConvertor/CurrencyConvertor/CurrencyConvertor.tsx";
import styles from "./styles.module.css";

function ConvertorPage() {
  return (
    <div className={styles.wrapper}>
      <CurrencyConvertor />
    </div>
  );
}

export default ConvertorPage;
