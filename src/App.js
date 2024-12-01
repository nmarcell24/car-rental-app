import Form from "./components/Form";
import Header from "./components/Header";
import LogoShow from "./components/LogoShow";

function App() {
  return (
    <div className="appContainer">
      <div className="vh-85">  
        <Header />
        <div className="flex items-center justify-around">
          <Form />
          <img className="hidden md:block md:h-52 lg:h-80" src="/dodge_cropped.png" />
        </div>
      </div>
      <div className="vh-15 mt-12">
        <LogoShow />
      </div>
    </div>
  );
}

export default App;
