const BASE_URL = "https://apx-m9.vercel.app/api";

type fetchParams = {
  url: string;
  method: "GET" | "POST" | "PUT" | "DELETE";
  body?: any;
};

function getLocalStorage() {
  const userData = localStorage.getItem("userData");
  return userData ? JSON.parse(userData) : "";
}

export async function fetcher(url: string, method: string, body: any) {
  const userData = getLocalStorage();
  const response = await fetch(`${BASE_URL}${url}`, {
    method,
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${userData.token}`,
    },
    body: body ? JSON.stringify(body) : null,
  });
  return await response.json();
}
