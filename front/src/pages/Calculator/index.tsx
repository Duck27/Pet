"use client";

import CalculatorModule from "../../Components/Calculator/CalculatorModule";
import styles from "./styles.module.css";

function CalculatorPage() {
  return (
    <div className={styles.wrapper}>
      <CalculatorModule />
    </div>
  );
}

export default CalculatorPage;
