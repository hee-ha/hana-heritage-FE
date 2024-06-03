import AdminSidebar from "./AdminSidebar";
import { Outlet } from "react-router-dom";

const AdminLayout = () => {
  return (
    <div>
      <div className="w-full bg-white dark:bg-gray-900 p-5">
        <div className="flex h-[calc(100vh-2.5rem)] overflow-hidden space-x-5">
          <nav aria-label="Default sidebar example">
            <AdminSidebar />
          </nav>
          <main>
            <div>
              <Outlet />
            </div>
          </main>
        </div>
      </div>
    </div>
  );
};

export default AdminLayout;
