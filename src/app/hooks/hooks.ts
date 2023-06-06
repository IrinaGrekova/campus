import { useEffect, useState } from "react";

export const useDebounce = <T>(value: T, delay: number = 300) => {
    const [debouncedValue, setDebounsedValue] = useState(value);

    useEffect(() => {
        const timerId = setTimeout(() => {
            setDebounsedValue(debouncedValue);
        }, delay);

        return () => clearTimeout(timerId);
    }, [value, delay]);

    return debouncedValue;
};