export const fetchData = async (url) => {
  try {
    const res = await fetch(url);
    const data = await res.json();
    return data;
  } catch (err) {
    return console.error("Yan... nicht schon wieder", err);
  }
};
