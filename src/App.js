// import axios from 'axios';
// import React, { useState } from 'react'
// import './App.css';

// function App() {
//   const [data, setData] = useState({})
//   const [location, setLocation] = useState('')

//   const url =`http://api.openweathermap.org/data/2.5/weather?q=${location}&APPID=5b6efc31d9df5b58c06a64f0cba78094`;

//   const searchLocation = (e) => {
//     if (e.key === 'Enter') {
//       axios.get(url).then((res) => {
//         setData(res.data)
//         console.log(res.data)
//       })
//       setLocation('')
//     }
//   }
//   return (
//     <div className="app">
//     <div className="search">
//       <input
//         value={location}
//         onChange={event => setLocation(event.target.value)}
//         onKeyPress={searchLocation}
//         placeholder='Enter City'
//         type="text" />
//     </div> 
//     <div className="container">
//         <div className="top">
//           <div className="location">
//             <p>{data.name}</p>
//           </div>
//           <div className="temp">
//             {data.main ? <h1>{data.main.temp.toFixed()}°F</h1> : null}
//           </div>
//           <div className="description">
//             {data.weather ? <p>{data.weather[0].main}</p> : null}
//           </div>
//         </div>

//         {data.name !== undefined &&
//           <div className="bottom">
//             <div className="feels">
//               {data.main ? <p className='bold'>{data.main.feels_like.toFixed()}°F</p> : null}
//               <p>Feels Like</p>
//             </div>
//             <div className="humidity">
//               {data.main ? <p className='bold'>{data.main.humidity}%</p> : null}
//               <p>Humidity</p>
//             </div>
//             <div className="wind">
//               {data.wind ? <p className='bold'>{data.wind.speed.toFixed()} MPH</p> : null}
//               <p>Wind Speed</p>
//             </div>
//           </div>
//         }



//       </div>
//     </div>
//   );
// }
      
  
// export default App;
import Wea from './Wea';
import './App.css';
import Switch from './Switch';
function App() {
  return (
    <>
    <div className="app">
        <nav className="navbar navbar-expand-lg bg-dark navbar-dark">
          <div className="container-fluid">
            <div className="collapse navbar-collapse " id="navbarNav">
              <ul className="navbar-nav ">
                <li className="nav-item">
                  <a className="nav-link " aria-current="page" href="/">
                    Home
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="/">
                    About
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="/">
                    Contact
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </nav>
        </div>

        <div className="top-container">
          <div className="row">
            <div className="typography col col-3">
              <h4>
                Weather Forecast <br />
                of Kathmandu
              </h4>
            </div>
            <div className="toggle col col-3">
           <strong> Show In: &nbsp; {" "} <Switch/></strong> </div> 

            <div className="form col col-3">
              <Wea/>
             </div>
           

            <div className="top col col-3">
              <div className="btn-group" role="group" aria-label="Basic outlined">
                <button type="button" className="btn btn-outline-primary" disabled>
                  Previous Day
                </button>
                <button type="button" className="btn btn-outline-primary" href="#">
                  Next Day
                </button>
              </div>
            </div>
          </div>
        </div>
   
           

    
  

     
   

  
</>
 
  );
}

export default App;
