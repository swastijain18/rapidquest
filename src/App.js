import './App.css';
import BottomNav from './components/BottomNav';
import Left from './components/Left';
import Middle from './components/Middle';
import Right from './components/Right';
import SideNav from './components/SideNav';

function App() {
  return (
    <>
      <div>

        <BottomNav />
      </div>
      <div className="d-md-flex">
        <div className="col-md-1 d-none d-md-block">
          <SideNav />
        </div>

        <div className="col-md-3">
          <Left />
        </div>
        <div className="col-md-5">
          <Middle />
        </div>
        <div className="col-md-3">
          <Right />
        </div>
      </div>
    </>
  );
}

export default App;
