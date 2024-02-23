import './App.css';
import Header from './components/Header';
import Navigation from './components/Navigation';
import TitleHeader from './components/TitleHeader';
import TopCard from './components/TopCard';
import ComposedChart from './components/charts/ComposedChart';
import PieChartCustomized from './components/charts/PieChartCustomized';
import SimpleLineChart from './components/charts/SimpleLineChart';
import SimpleAreaChart from './components/charts/SimpleAreaChart';
import SimplePieChart from './components/charts/SimplePieChart';
import SimpleRadarChart from './components/charts/SimpleRadarChart';
import SimpleBarChart from './components/charts/SimpleBarChart';
import Footer from './components/Footer';

function App() {
  return (
    <div>
      <Header />

      <div className='container-fluid'>
        <div className='row'>
          <div className='z-1 sidebar border border-right col-2 col-md-1 p-0 bg-body-tertiary shadow vh-100 position-fixed d-flex align-items-center justify-content-center'>
            <div className='bg-body-tertiary h-100' tabIndex='-1' id='sidebarMenu' aria-labelledby='sidebarMenuLabel'>
              <div className='d-md-flex flex-column p-0 pt-lg-3 overflow-y-auto h-100'>
                <Navigation />
              </div>
            </div>
          </div>

          <main className='ms-auto col-10 col-xs-9 col-md-11 px-md-4'>
            <TitleHeader />

            <div>
              <div className='row g-4 d-flex justify-content-around'>
                <div className='col-lg-3 p-0'>
                  <TopCard title={464} text={'Conversion Rate'} color1={'#00A9FF'} color2={'#CDF5FD'} val1={800} val2={300} />
                </div>
                <div className='col-lg-3 p-0'>
                  <TopCard title={323} text={'Bounce Rate'} color1={'#FCC8D1'} color2={'#D14D72'} val1={200} val2={1000} />
                </div>
                <div className='col-lg-3 p-0'>
                  <TopCard title={678} text={'Visits Rate'} color1={'#E38B29'} color2={'#FFD8A9'} val1={600} val2={500} />
                </div>
              </div>

              <div className='row d-flex justify-content-around my-5'>
                <div className='col-lg-7 bg-body-tertiary shadow d-flex flex-column align-items-center justify-content-around border rounded' style={{height: '60vh'}}>
                  <h2 className='text-capitalize'>Composed chart</h2>
                  <ComposedChart />
                </div>

                <div className='col-lg-3 mt-5 mt-lg-0 d-flex flex-column align-items-center pt-4' style={{height: '60vh'}}>
                  <h2 className='text-capitalize'>Pie chart</h2>
                  <PieChartCustomized />
                </div>
              </div>

              <div className='row d-flex justify-content-around my-5'>
                <div className='col-lg-11 col-xl-5 bg-body-tertiary shadow border rounded p-4' style={{height: '50vh'}}>
                  <SimpleLineChart />
                </div>
                <div className='col-lg-11 col-xl-5 mt-5 mt-xl-0 bg-body-tertiary shadow border rounded p-4' style={{height: '50vh'}}>
                  <SimpleAreaChart />
                </div>
              </div>

              <div className='row d-flex justify-content-around my-5'>
                <div className='col-lg-5 d-flex flex-column align-items-center justify-content-around' style={{height: '60vh'}}>
                  <h2 className='text-capitalize'>Pie chart</h2>
                  <SimplePieChart />
                </div>
                <div className='col-lg-5 mt-5 mt-lg-0 d-flex flex-column align-items-center justify-content-around' style={{height: '60vh'}}>
                  <h2 className='text-capitalize'>Radar chart</h2>
                  <SimpleRadarChart />
                </div>
              </div>

              <div className='row d-flex justify-content-around my-5'>
                <div className='col-lg-11 bg-body-tertiary shadow border rounded p-5 d-flex flex-column align-items-center justify-content-around' style={{height: '60vh'}}>
                  <h2 className='text-capitalize mb-4'>Bar chart</h2>
                  <SimpleBarChart />
                </div>
              </div>

            </div>

            <Footer />
          </main>
        </div>
      </div>
    </div>
  );
}

export default App;
