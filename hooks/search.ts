import { useState, useEffect } from "react";
import useSWR from "swr";
import { fetcher } from "lib/api";

export function useSearchProducts() {
  const [search, setSearch] = useState<string | null>(null);
  const [pageIndex, setPageIndex] = useState<number>(0);
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [products, setProducts] = useState<any>({});
  const { data, error } = useSWR(
    () => {
      return search
        ? [`/search?search=${search}&limit=3&offset=${pageIndex}`, "GET"]
        : null;
    },
    fetcher,
    {
      revalidateIfStale: false,
      revalidateOnFocus: false,
      revalidateOnReconnect: false,
    }
  );

  useEffect(() => {
    setProducts(data);
    setIsLoading(false);
  }, [data]);

  useEffect(() => {
    setPageIndex(0);
  }, [search]);

  useEffect(() => {
    if (!products) {
      setIsLoading(true);
    }
  }, [products]);

  return { setSearch, products, error, isLoading, setPageIndex };
}
