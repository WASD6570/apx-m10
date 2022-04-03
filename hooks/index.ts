import useSWR from "swr";
import { fetcher } from "lib/api";
import { useState, useEffect } from "react";
import { emailValidator } from "lib/utils";
import { useRouter } from "next/router";

type LocalData = "email" | "token";

export function useGetLocalData(item: LocalData) {
  const [data, setData] = useState<string | null>(null);
  useEffect(() => {
    const data = localStorage.getItem(item);
    setData(data);
  }, []);
  return data;
}

export function useIsLoggedIn() {
  let token = useGetLocalData("token");
  token === "undefined" ? (token = null) : token;
  return !!token;
}

export function useLogOut() {
  const [LogOut, setLogOut] = useState(false);
  const router = useRouter();
  useEffect(() => {
    if (LogOut) {
      localStorage.removeItem("token");
      localStorage.removeItem("email");
      setLogOut(false);
      router.push("/");
      router.reload();
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
    fetcher
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
