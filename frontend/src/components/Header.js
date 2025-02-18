import { useLocation } from "react-router";
import DrawerList from "./DrawerList";

const Header = ({ setOpenDialogSignIn, setOpenDialogSignUp }) => {
  const {pathname} = useLocation();
  
  return (
    <div
      className={
        pathname == "/rent"
          ? "bg-white p-4 w-full flex items-center justify-between"
          : "bg-[#f1c656] p-4 w-full flex items-center justify-between"
      }
    >
      <h1 className="text-2xl lg:ml-12">Rento</h1>
      <DrawerList setOpenDialogSignIn={setOpenDialogSignIn} setOpenDialogSignUp={setOpenDialogSignUp} />
    </div>
  );
};

export default Header;
