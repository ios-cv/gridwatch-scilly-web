import React, { useEffect, useState } from 'react';
import { DateTime } from 'luxon';

import './App.css';

import PowerTimeSeriesLineChart from './PowerTimeSeriesLineChart.jsx';

function App() {
  const [totalPower, setTotalPower] = useState([]);

  useEffect(() => {
    fetch('http://localhost:8000/grid/flow')
      .then((response) => response.json())
      .then((data) => {
        const d = data.map((i) => ({
          power: i.power,
          time: DateTime.fromISO(i.time)
            .toSeconds(),
        }));
        setTotalPower(d);
      });
  }, []);

  return (<div className="App">
      <header>
        <h1
          className={'text-center text-green-600 font-bold text-4xl m-8'}
        >
          Gridwatch Isles of Scilly
        </h1>
      </header>
      <main>
        <div style={{
          height: '400px',
          width: '100%',
        }}
        >
          <PowerTimeSeriesLineChart data={totalPower}/>
        </div>

      </main>
    </div>);
}

export default App;
