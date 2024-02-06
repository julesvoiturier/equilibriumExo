
import './App.css';
import CardImage from "./components/CardImage/CardImage"
import CardTextContent from "./components/CardTextContent"
import BottomCard from "./components/BottomCard"

function App() {
  return (
    <div className="App w-full h-[100vh] flex justify-center items-center bg-bodyBlue">
        <div className='cardBody h-[590px] w-[350px] rounded-[15px] bg-cardBlue p-[27px]'>
          <CardImage/>
          <CardTextContent />
          <BottomCard />
        </div>
    </div>
  );
}

export default App;
