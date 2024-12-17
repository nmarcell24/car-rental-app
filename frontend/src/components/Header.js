import DrawerList from "./DrawerList";

const Header = () => {
    return (
        <div className="p-4 mb-8 w-full flex items-center justify-between">
            <h1 className="text-2xl lg:ml-12">Rento</h1>
            <DrawerList />
        </div>
    );
}
 
export default Header;