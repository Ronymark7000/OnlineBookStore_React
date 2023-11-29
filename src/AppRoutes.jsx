import { BrowserRouter, Route, Routes } from "react-router-dom";
import SiteLayout from "./site/SiteLayout";
import HomePage from "./site/HomePage/HomePage";
import AdminLayout from "./admin/AdminLayout";

import Login from "./site/Login";
import PageNotFound from "./site/404Page/404Page";
import Protected from "./Protected";

import UserDashboard from "./admin/Dashboard/UserDashboard";
import BookDashboard from "./admin/Dashboard/BookDashboard";
import AddUser from "./admin/components/AddUser";
import AddBook from "./admin/components/AddBooks";
import DashboardMain from "./admin/components/DashboardMain";
import UpdateUser from "./admin/Dashboard/UpdateUser";
import EditUser from "./admin/components/EditUser";
import UpdateBook from "./admin/Dashboard/UpdateBook";
import EditBook from "./admin/components/EditBooks";
import Cart from "./site/components/Cart";



const AppRoutes = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<SiteLayout />}>
          <Route index element={<HomePage />} />
          <Route path="login" element={<Login />} />
          <Route path="cart" element={<Cart />} />
          {/* <Route path="register" element={<Register />} /> */}
        </Route>
        <Route
          path="/admin"
          element={
            <Protected>
              <AdminLayout />
            </Protected>
          }
        >
          <Route path="view" element={<DashboardMain />} />

          <Route path="book-dashboard" element={<BookDashboard />} />
          <Route path="add-books" element={<AddBook />} />
          <Route path="update-book" element={<UpdateBook />} />
          <Route path="edit-book/:id" element={<EditBook />} />

          <Route path="user-dashboard" element={<UserDashboard />} />
          <Route path="add-user" element={<AddUser />} />
          <Route path="update-user" element={<UpdateUser />} />
          <Route path="edit-user/:id" element={<EditUser />} />
        </Route>
        <Route path="*" element={<PageNotFound />} />
      </Routes>
    </BrowserRouter>
  );
};

export default AppRoutes;
