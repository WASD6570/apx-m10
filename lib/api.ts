const BASE_URL = "https://apx-m9.vercel.app/api";

type fetchParams = {
  url: string;
  method: "GET" | "POST" | "PUT" | "DELETE";
  body?: any;
};

function getLocalStorage() {
  return localStorage.getItem("token");
}

export async function fetcher(url: string, method: string, body: any) {
  const token = getLocalStorage();
  const response = await fetch(`${BASE_URL}${url}`, {
    method,
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${token}`,
    },
    body: body ? JSON.stringify(body) : null,
  });
  return await response.json();
}
