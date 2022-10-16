import React, { useEffect, useState } from 'react';

import './App.css';
import PowerTimeSeriesLineChart from './PowerTimeSeriesLineChart';

function App() {
  const [totalPower, setTotalPower] = useState([]);

  useEffect(() => {
    fetch('http://localhost:8000/grid/flow')
      .then((response) => response.json())
      .then((data) => setTotalPower(data));
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
