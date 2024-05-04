import styles from "./App.module.css";
import "./reset.css";
import Calculator from "./Components/Calculator/CalculatorModule";
import Sidebar from "./Components/Sidebar/Sidebar";
import CurrencyConvertorModule from "./Components/CurrencyConvertor/CurrencyConvertor/CurrencyConvertor";

function App() {
  return (
    <div className={styles.background}>
      <Sidebar />
      <Calculator />
      <CurrencyConvertorModule />
    </div>
  );
}

export default App;
