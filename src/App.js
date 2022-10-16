import './App.css';
import AllProducts from "./components/AllProducts"
import CompleteTable from "./components/CompleteTable"
import Chart from "./components/Chart"
import logo from './stackline_logo.svg'
function App() {
  return (
    <div>
    <div className='header' ><img className='image' src={logo} alt="Stack"/></div>
    <div className="container">
     <div className="product-container">
          <AllProducts />
        </div>
      <div className="stats">
        <div className="chart-container">
          <Chart />
        </div>
        <div className="table-container">
          <CompleteTable />
          </div>
        </div>
    </div>
    </div>
  );
}

export default App;
