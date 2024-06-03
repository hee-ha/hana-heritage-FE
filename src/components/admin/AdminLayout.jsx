import AdminSidebar from "./AdminSidebar";
import AdminFooter from "./AdminFooter";
import { Outlet } from "react-router-dom";

const AdminLayout = () => {
  return (
    <div className="w-full bg-white dark:bg-gray-900 p-5">
      <div className="flex h-[calc(100vh-2.5rem)] overflow-hidden space-x-5">
        <nav aria-label="Default sidebar example">
          <AdminSidebar />
        </nav>
        <main className="flex-grow h-full flex flex-col space-y-5">
          <div className="h-full w-full px-4 py-6 sm:flex sm:items-center sm:justify-between">
            <Outlet />
          </div>
          <AdminFooter />
        </main>
      </div>
    </div>
  );
};

export default AdminLayout;
