import useSWR from "swr";
import { fetcher } from "lib/api";
import { useState, useEffect } from "react";

function emailValidator(input: string): boolean {
  return /(?:[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*|"(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21\x23-\x5b\x5d-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])*")@(?:(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?|\[(?:(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.){3}(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?|[a-z0-9-]*[a-z0-9]:(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21-\x5a\x53-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])+)\])/.test(
    input
  );
}

export function useLogin() {
  const [email, setEmail] = useState();
  const { data, error } = useSWR(
    () => (email ? ["/auth", "POST", { email }] : null),
    fetcher
  );

  return { data, error, setEmail };
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
