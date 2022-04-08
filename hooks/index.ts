import useSWR from "swr";
import { fetcher } from "lib/api";
import { useState, useEffect } from "react";
import { emailValidator } from "lib/utils";
import { getLocalStorage } from "lib/api";
import { Router, useRouter } from "next/router";

type LocalData = "email" | "token";

export function useGetLocalData(item: LocalData) {
  const [data, setData] = useState<string | null>(null);
  useEffect(() => {
    const data = localStorage.getItem(item);
    data == "undefined" ? setData(null) : setData(data);
    setData(data);
  }, []);
  return data;
}

export function useIsLoggedIn() {
  let token = useGetLocalData("token");
  let email = useGetLocalData("email");
  token ? (token = null) : token;
  email ? (email = null) : email;
  const isLogged = token && email;
  return isLogged;
}

export function useLogOut() {
  const [LogOut, setLogOut] = useState(false);
  const router = useRouter();
  useEffect(() => {
    if (LogOut) {
      localStorage.removeItem("token");
      localStorage.removeItem("email");
      setLogOut(false);
      if (router.pathname === "/") {
        router.reload();
      }
      router.push("/");
    }
  }, [LogOut]);
  return setLogOut;
}

export function useResendEmail() {
  const [email, setEmail] = useState<string | null>(null);
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [isError, setIsError] = useState<boolean>(false);
  const [isSuccess, setIsSuccess] = useState<boolean>(false);
  useEffect(() => {
    if (email) {
      setIsLoading(true);
      fetcher("/auth", "POST", { email }).then((data: any) => {
        data.message === true ? setIsSuccess(true) : setIsError(true);
        setIsLoading(false);

        setTimeout(() => {
          setEmail(null);
        }, 5000);
      });
    }
  }, [email]);

  return { setEmail, isLoading, isError, isSuccess };
}

export function useSendEmail() {
  const [email, setEmail] = useState();
  const { data, error } = useSWR(
    () => (email ? ["/auth", "POST", { email }] : null),
    fetcher
  );

  useEffect(() => {
    localStorage.setItem("email", email as any);
  }, [email]);

  return { data, error, setEmail };
}

export function useSendCode() {
  const [code, setCode] = useState();
  const email = useGetLocalData("email");
  const { data, error } = useSWR(
    () =>
      code ? ["/auth/token", "POST", { code: Number(code), email }] : null,
    fetcher,
    {
      onErrorRetry: (error, key, config, revalidate, { retryCount }) => {},
    }
  );

  useEffect(() => {
    localStorage.setItem("token", data?.token as any);
  }, [data]);

  return { data, error, setCode };
}

export function useCode() {
  const [input, setInput] = useState<any>();
  const [error, setError] = useState(false);
  const [code, setCode] = useState();

  if (
    (input?.toString().length >= 6 && !error) ||
    (input?.toString().length < 5 && !error) ||
    (input?.toString().length === 0 && !error)
  ) {
    setError(true);
  } else if (input?.toString().length === 5 && code !== input) {
    setError(false);
    setCode(input);
  }
  return { setInput, error, code };
}

export function useEmail() {
  const [value, setValue] = useState("");
  const [error, setError] = useState(false);
  const [correct, setCorrect] = useState("");

  if (emailValidator(value) && correct !== value) {
    setCorrect(value as string);
    setError(false);
  } else if (!emailValidator(value) && correct !== "") {
    setCorrect("");
  } else if (
    !emailValidator(value) &&
    correct === "" &&
    value.length > 0 &&
    !error
  ) {
    setError(true);
  }

  return { correct, error, setValue };
}

export function useProfileData() {
  //const router = useRouter();
  const token = useGetLocalData("token");
  const { data, error } = useSWR(
    () => (token !== "undefined" && token ? ["/me", "GET"] : null),
    fetcher,
    {
      revalidateIfStale: true,
      revalidateOnFocus: true,
      revalidateOnReconnect: true,
      revalidateOnMount: true,
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
  return { data, error, isLoading: !data && !error };
}

export function useProfileDataRefactor(token: string | null) {
  const { data, error } = useSWR(
    () => (token ? ["/me", "GET"] : null),
    fetcher,
    {
      revalidateIfStale: true,
      revalidateOnFocus: true,
      revalidateOnReconnect: true,
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
  return { data, error, isLoading: !data && !error };
}

export function useProfileSetUp() {
  const [send, setSend] = useState<boolean>(false);
  const [token, setToken] = useState<string | null>(null);
  const { data } = useProfileDataRefactor(token);
  const router = useRouter();
  const [userData, setuserData] = useState<any>();
  useEffect(() => {
    if (data && send) {
      fetcher("/me", "PATCH", {
        userData: { name: "", address: "", phone: "", ...data.userData },
      }).then((data: any) => {
        setuserData(data);
        data.name == "" ? router.push("/profile") : router.push("/");
      });
    }
  }, [data, send]);

  return { setSend, setToken };
}

export function useModifyProfileData() {
  const [newData, setData] = useState<any>(null);
  const { data, error } = useSWR(
    () => (newData ? ["/me", "PATCH", { userData: { ...newData } }] : null),
    fetcher,
    {
      revalidateIfStale: true,
      revalidateOnFocus: true,
      revalidateOnReconnect: true,
      revalidateOnMount: true,
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
