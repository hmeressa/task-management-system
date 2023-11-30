
import ClientSidebar from "./ClientSidebar"
const Layout = ({ children }) => {
  return (
    <div className="sm:grid sm:grid-cols-12 gap-3 bg-gray-200 h-screen w-screen">
      <ClientSidebar />
      <div className="flex flex-col col-span-10 overflow-scroll scrollbar-hide">
        <div className="scrollbar-hide pr-2 py-6 min-w-[680px] overflow-x-scroll">
          {children}
        </div>
      </div>
    </div>
  );
};

export default Layout;