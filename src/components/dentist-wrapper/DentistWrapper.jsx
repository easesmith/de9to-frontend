import DentistSidebar from "@/component/dentist-signup/dentist-sidebar/DentistSidebar";
import "./wrapper.css";
import Header from "@/component/dentist-signup/Header";

const DentistWrapper = ({ children }) => {

  return (
    <div className="flex items-start w-full">
      {/* <Header />
      <div className="home-container">
        <AdminSidebar />
        <main className={`main w-[calc(100%-72px)] h-[calc(100vh-80px)] p-10 pb-5 relative overflow-y-auto bg-[#F5F7FA]`}>
          {children}
        </main>
      </div> */}
      <DentistSidebar />
      <div className="h-full w-full">
        <Header />
        <main className={`main h-[calc(100vh-80px)] p-10 pb-5 relative overflow-y-auto bg-[#F5F7FA]`}>
          {children}
        </main>
      </div>
      {/* <div className="home-container">
        
        <main className={`main w-[calc(100%-72px)] h-[calc(100vh-80px)] p-10 pb-5 relative overflow-y-auto bg-[#F5F7FA]`}>
          {children}
        </main>
      </div> */}
    </div>
  );
};

export default DentistWrapper;