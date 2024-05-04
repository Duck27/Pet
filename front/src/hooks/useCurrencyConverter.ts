import { useCallback } from "react";
import { Rates } from "../Components/@types/types";

export function useCurrencyConverter(rates: Rates) {
  const convertCurrency = useCallback(
    (amount: number, fromCurrency: string, toCurrency: string): string => {
      const fromRate = rates[fromCurrency];
      const toRate = rates[toCurrency];

      if (!fromRate || !toRate) {
        console.log("One of the currency rates is not defined.");
        return "0";
      }

      const result = (amount / fromRate) * toRate;
      return String(parseFloat(result.toFixed(4)));
    },
    [rates]
  );

  return convertCurrency;
}
