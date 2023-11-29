import axiosInstance from "../../axiosInstance";

export const getBooks = async (data) => {
  return axiosInstance.get(`/books`, data);
};

export const getUsers = async () => {
  return axiosInstance.get(`/admin/users`);
};

export const getBookById = async ( bookId) => {
  return axiosInstance.get(`/book/{bookId}`, bookId);
};

export const getAllFromCart = async () => {
  const response = axiosInstance
    .get("/cart/")
    .then((res) => res?.data)
    .catch(() => null);
  if (response?.success === true) {
    localStorage.setItem(JSON.stringify(response?.response || []));
  }
};

export const addToCart = async (bookId) => {
  const response = axiosInstance
    .post("/cart/add", bookId)
    .then((res) => res?.data)
    .catch(() => null);
  if (response?.success === true) {
    getAllFromCart();
  }
};

export const editCart = async (cartId, quantity) => {
  const response = axiosInstance
    .put(`/cart/edit/${cartId}`, quantity)
    .then((res) => res?.data)
    .catch(() => null);
  if (response?.success === true) {
    getAllFromCart();
  }
};

export const deleteBookFromCart = async (cartId) => {
  const response = axiosInstance
    .delete(`/cart/${cartId}`)
    .then((res) => res?.data)
    .catch(() => null);
  if (response?.success === true) {
    getAllFromCart();
  }
};
