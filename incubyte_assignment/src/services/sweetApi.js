const BASE_URL = "http://localhost:5051/api/sweets";

export const getSweets = async () => {
  const res = await fetch(BASE_URL);
  return res.json();
};

export const createSweet = async (data) => {
  const res = await fetch(BASE_URL, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(data),
  });
  return res.json();
};

export const deleteSweet = async (id) => {
  await fetch(`${BASE_URL}/${id}`, { method: "DELETE" });
};
