import './App.css';
import PowerTimeSeriesLineChart from "./PowerTimeSeriesLineChart";

function App() {
    return (
        <div className="App">
            <main>
                <div style={{height: "400px", width: "100%"}}>
                    <PowerTimeSeriesLineChart/>
                </div>

            </main>
        </div>
    );
}

export default App;
