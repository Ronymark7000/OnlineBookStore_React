import { Outlet } from "react-router-dom";
import AdminSidebar from "./Dashboard/AdminSidebar";


const AdminLayout = () => {
  return (
    <div className="none">
      <div className="row">
        <div className="col-2">
          <AdminSidebar />
        </div>
        <div className="col-10 mt-5 pt-4 ">
          <Outlet />
        </div>
      </div>
    </div>
  );
};

export default AdminLayout;
