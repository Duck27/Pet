import { useState, useEffect } from "react";
import { fetchRates } from "../utils/currencyUtils";
import { currencyDesc, Rates } from "../Components/@types/types";


function useCurrencyRates() {
  const [rates, setRates] = useState<Rates>({});
  const [currencyDesc, setCurrencyDesc] = useState<currencyDesc>({});
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    async function loadRates() {
      try {
        const { rates: loadedRates, descriptions: loadedDescriptions } =
          await fetchRates();
        setRates(loadedRates);
        setCurrencyDesc(loadedDescriptions);
      } catch (err: any) {
        setError(err);
        console.error("Failed to fetch rates:", err);
      } finally {
        setIsLoading(false);
      }
    }
    loadRates();
  }, []);

  return { rates, currencyDesc, isLoading, error };
}

export default useCurrencyRates;
