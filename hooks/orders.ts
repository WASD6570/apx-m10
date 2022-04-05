import useSWR from "swr";
import { fetcher } from "lib/api";
import { useState, useEffect } from "react";
import { getLocalStorage } from "lib/api";
import { useRouter } from "next/router";

export function useCreateOrder() {
  const [product, setData] = useState<any>(null);
  const { data, error } = useSWR(
    () => (product ? [`/order?productId=${product}`, "POST"] : null),
    fetcher,
    {
      revalidateIfStale: false,
      revalidateOnFocus: false,
      revalidateOnReconnect: false,
      onErrorRetry: (error, key, config, revalidate, { retryCount }) => {
        // Never retry on 404.
        if (error.message == "Not found") return;

        if (error.message == "Unauthorized") return;

        // Only retry up to 10 times.
        if (retryCount >= 10) return;
        setTimeout(() => revalidate({ retryCount }), 5000);
      },
    }
  );

  return { setData, data, error, isLoading: !data && !error };
}

export function useUpdateOrderData() {
  const [newData, setData] = useState<any>(null);
  const { data, error } = useSWR(
    () =>
      newData
        ? [
            "/me",
            "PATCH",
            {
              userData: {
                purchases: {
                  orderId: newData,
                },
              },
            },
          ]
        : null,
    fetcher,
    {
      revalidateIfStale: false,
      revalidateOnFocus: false,
      revalidateOnReconnect: false,
      onErrorRetry: (error, key, config, revalidate, { retryCount }) => {
        // Never retry on 404.
        if (error.message == "Not found") return;

        if (error.message == "Unauthorized") return;

        // Only retry up to 10 times.
        if (retryCount >= 10) return;
        setTimeout(() => revalidate({ retryCount }), 5000);
      },
    }
  );

  return { setData, data, error, isLoading: !data && !error };
}

export function useGetOrderData() {
  const [newData, setData] = useState<any>(null);
  const { data, error } = useSWR(
    () => (newData ? [`/order/${newData}`, "GET"] : null),
    fetcher,
    {
      onErrorRetry: (error, key, config, revalidate, { retryCount }) => {
        // Never retry on 404.
        if (error.message == "Not found") return;

        if (error.message == "Unauthorized") return;

        // Only retry up to 10 times.
        if (retryCount >= 10) return;
        setTimeout(() => revalidate({ retryCount }), 5000);
      },
    }
  );

  return { setData, data, error, isLoading: !data && !error };
}
