import './App.css';
import User from './components/User';
import Body from './components/Body'
import RidesData from './components/RidesData';
import RidesStateLists from './components/RidesStateLists';
import DateTime1 from './components/DateTime1';
// import DisplayRides from './components/DisplayRides';

function App() {
  return (
    <>
      <User />
      <Body />
      <RidesData />
      <RidesStateLists />
      <DateTime1 />
      {/* <DisplayRides /> */}
    </>
  );
}

export default App;
