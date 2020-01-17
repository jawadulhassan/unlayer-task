import Cookie from "js-cookie";

const storageKey = "template";

export const getTemplate = () => {
  let data = Cookie.getJSON(storageKey);
  if (!data) return [];
  return data;
};

export const addTemplate = data => {
  let list = Cookie.getJSON(storageKey);
  const newItem = {
    _id: list ? list.length + 1 : 1,
    name: data
  };
  let arr = [];
  if (!list) {
    arr.push(newItem);
  } else {
    list.push(newItem);
  }
  return Cookie.set(storageKey, list? list : arr);
};

export const editTemplate = (id, data) => {
  const index = id - 1;
  let list = Cookie.getJSON(storageKey);
  const newItem = {
    _id: id,
    name: data
  };
  list.splice(index, 1, newItem);
  return Cookie.set(storageKey, list);
};
