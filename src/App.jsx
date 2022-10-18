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
          time: DateTime.fromISO(i.time).toSeconds(),
        }));
        setTotalPower(d);
      });
  }, []);

  return (
    <div className="App">
      <main>
        <div style={{
          height: '400px',
          width: '100%',
        }}
        >
          <PowerTimeSeriesLineChart data={totalPower} />
        </div>

      </main>
    </div>
  );
}

export default App;
