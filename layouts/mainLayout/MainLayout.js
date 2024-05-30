import LeftMenu from "@/components/leftMenu/LeftMenu";
import Header from "@/components/header/Header";
import { useRouter } from "next/router";
import routes from "@/routes/routes";
import SuggesstedFriends from "@/components/suggesstedFriends/SuggesstedFriends";

const MainLayout = ({ children }) => {
  const { pathname } = useRouter();
  const rightContent = {
    "/feed": <SuggesstedFriends />,
    "/notification": <SuggesstedFriends />,
  };
  return (
    <>
      <Header />
      <div className="flex justify-center  px-2 bg-white-10 min-h-screen ">
        <div className="max-w-7xl w-full flex gap-x-8 mt-12">
          <LeftMenu />
          <div className={`${!rightContent[pathname] && "w-full"}`}>
            {children}
          </div>
          {rightContent[pathname] && (
            <div className="flex-1 h-fit">{rightContent[pathname]}</div>
          )}
        </div>
      </div>
    </>
  );
};

export default MainLayout;
