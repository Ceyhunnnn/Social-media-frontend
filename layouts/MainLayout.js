import LeftMenu from "@/components/account/leftMenu/LeftMenu";
import Header from "@/components/header/Header";

const MainLayout = ({ children }) => {
  return (
    <>
      <Header />
      <div className="flex justify-center  px-2 bg-white-10 min-h-screen">
        <div className="max-w-7xl w-full flex gap-x-8 mt-12">
          <LeftMenu />
          <div className="flex-1">{children}</div>
        </div>
      </div>
    </>
  );
};

export default MainLayout;
