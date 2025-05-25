import { useEffect } from 'react';

const useDebounce = (value, delay) => {
  const [debouncedVal, setDebouncedVal] = useState('');

  useEffect(() => {
    const handler = setTimeout(() => {
      setDebouncedVal(value);
    }, delay);

    return () => {
      clearTimeout(handler);
    };
  }, []);

  return debouncedVal;
};

export default useDebounce;

// Usage: useDebounce(inputTxt, 1000)
