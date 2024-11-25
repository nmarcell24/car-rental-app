import DrawerList from "./DrawerList";

const Header = () => {
    return (
        <div className="p-4 w-full flex items-center justify-between">
            <h1 className="text-2xl">Rento</h1>
            <DrawerList />
        </div>
    );
}
 
export default Header;