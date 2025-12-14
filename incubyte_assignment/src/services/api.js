const API_BASE_URL = "http://localhost:5051/api";

export const apiRequest = async (
  endpoint,
  { method = "GET", body, token } = {}
) => {
  const res = await fetch(`${API_BASE_URL}${endpoint}`, {
    method,
    headers: {
      "Content-Type": "application/json",
      ...(token && { Authorization: `Bearer ${token}` }),
    },
    ...(body && { body: JSON.stringify(body) }),
  });

  const data = await res.json();

  if (!res.ok) {
    throw new Error(data.message || "API Error");
  }

  return data;
};