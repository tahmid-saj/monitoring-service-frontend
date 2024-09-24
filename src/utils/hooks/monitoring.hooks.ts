import { useEffect, useState, useRef } from "react";

interface UseQueryResult<T> {
  data: T | null;
  loading: boolean;
  error: string | null;
}

export const useQuery = <T>(queryFn: () => Promise<T>, interval: number): UseQueryResult<T> => {
  const [data, setData] = useState<T | null>(null);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  // Using a ref to store the query function to avoid it being a dependency
  const savedQueryFn = useRef(queryFn);

  useEffect(() => {
    savedQueryFn.current = queryFn; // Keep the function up-to-date in ref
  }, [queryFn]);

  useEffect(() => {
    // Function to fetch data
    const fetchData = async () => {
      setLoading(true);
      setError(null);

      try {
        const result = await savedQueryFn.current(); // Use ref-stored function
        setData(result);
      } catch (err) {
        setError("Error fetching data");
      } finally {
        setLoading(false);
      }
    };

    // Initial fetch
    fetchData();

    // Set up interval for refetching every 'interval' milliseconds
    const intervalId = setInterval(fetchData, interval);

    // Cleanup interval on component unmount
    return () => clearInterval(intervalId);
  }, [interval]);

  return { data, loading, error };
};
