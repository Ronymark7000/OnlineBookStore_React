import axiosInstance from "../../axiosInstance";

export const getallBooks = async (data) => {
  return axiosInstance.get(`view/books`, data);
};

export const getBooks = async (data) => {
  return axiosInstance.get(`/books?page={page}`, data);
};

export const getUsers = async () => {
  return axiosInstance.get(`/admin/users`);
};

export const getBookById = async (bookId) => {
  return axiosInstance.get(`/book/${bookId}`, bookId);
};

export const getProfile = async () => {
  const response = await axiosInstance
    .get("/profile")
    .then((res) => res?.data)
    .catch(() => null);

  if (response?.success) {
    localStorage.setItem("user", JSON.stringify(response?.response ?? ""));
  }
};

export const getAllFromCart = async () => {
  await axiosInstance
    .get("/cart")
    .then((res) => {
      const response = res?.data;
      if (response?.statusCode === 200) {
        localStorage.setItem("cart", JSON.stringify(response?.response || []));
      }
    })
    .catch(() => null);
};

export const addToCart = async (bookId) => {
  const response = await axiosInstance
    .post("/cart/add", bookId)
    .then((res) => res?.data)
    .catch(() => null);
  if (response?.success) {
    getAllFromCart();
  }
  return response;
};

export const editCart = async (cartId, quantity) => {
  console.log(cartId, quantity);
  const response = await axiosInstance
    .put(`/cart/update/${cartId}`, quantity)
    .then((res) => res?.data)
    .catch(() => null);

  if (response?.success) {
    getAllFromCart();
  }
  return response;
};

export const deleteBookFromCart = async (cartId) => {
  const response = await axiosInstance
    .delete(`/cart/${cartId}`)
    .then((res) => {
      if (res?.data) {
        getAllFromCart();
      }
      return res?.data;
    })
    .catch(() => null);
  return response;
};

export const handleLogin = async (username, password) => {
  const response = await axiosInstance
    .post("/auth/login", { username, password })
    .then((res) => res?.data)
    .catch(() => null);

  if (response?.success) {
    getProfile();
    getAllFromCart();
  }
  return response;
};

export const handleSignup = async (username, password, email) => {
  return await axiosInstance
    .post("/auth/register", { username, password, email })
    .then((res) => res?.data)
    .catch(() => null);
};

export const addReview = async (data) => {
  return axiosInstance.post(`/review`, data);
};

export const getAllOrders = async () => {
  const response = await axiosInstance.get("/admin/orders");
  return response;
};

export const handleLogout = () => {
  localStorage.removeItem("user");
  localStorage.removeItem("cart");
};
