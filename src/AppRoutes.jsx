import { BrowserRouter, Route, Routes } from "react-router-dom";
import SiteLayout from "./site/SiteLayout";
import HomePage from "./site/HomePage/HomePage";
import AdminLayout from "./admin/AdminLayout";

import Login from "./site/Login";
import PageNotFound from "./site/404Page/404Page";
import Protected from "./layouts/Protected";

import UserDashboard from "./admin/Dashboard/UserDashboard";
import BookDashboard from "./admin/Dashboard/BookDashboard";
import AddUser from "./admin/components/user/AddUser";
import AddBook from "./admin/components/book/AddBooks";
import UpdateUser from "./admin/components/user/UpdateUser";
import EditUser from "./admin/components/user/EditUser";
import UpdateBook from "./admin/components/book/UpdateBook";
import EditBook from "./admin/components/book/EditBooks";
import Cart from "./site/components/Cart";
import DashboardMain from "./admin/Dashboard/DashboardMain";
import BookDetails from "./site/components/BookDetails";
import OrderTable from "./admin/Order/OrderTable";
import IsLoggedIn from "./layouts/IsLoggedIn";
import ShowSingleReview from "./site/components/ShowSingleReview";

const AppRoutes = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<SiteLayout />}>
          <Route index element={<HomePage />} />
          <Route path="login" element={<Login />} />
          <Route
            path="cart"
            element={
              <IsLoggedIn>
                <Cart />
              </IsLoggedIn>
            }
          />
          <Route path="bookdetails/:id" element={<BookDetails />} />

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
          <Route index element={<DashboardMain />} />

          <Route path="book-dashboard" element={<BookDashboard />} />
          <Route path="add-books" element={<AddBook />} />
          <Route path="update-book" element={<UpdateBook />} />
          <Route path="edit-book/:id" element={<EditBook />} />

          <Route path="user-dashboard" element={<UserDashboard />} />
          <Route path="add-user" element={<AddUser />} />
          <Route path="update-user" element={<UpdateUser />} />
          <Route path="edit-user/:id" element={<EditUser />} />
          <Route path="review" element={<ShowSingleReview />} />

          <Route path="orders" element={<OrderTable />} />
        </Route>
        <Route path="*" element={<PageNotFound />} />
      </Routes>
    </BrowserRouter>
  );
};

export default AppRoutes;
