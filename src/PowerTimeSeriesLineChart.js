import { LineChart, Line, CartesianGrid, XAxis, YAxis, ResponsiveContainer, Tooltip, Legend} from 'recharts';

const data = [
    {time: '20:55', power: 400,},
    {time: '21:00', power: 300,},
    {time: '21:05', power: 200,},
    {time: '21:10', power: 350,},
    {time: '21:15', power: 500,},
];

const PowerTimeSeriesLineChart = () => (
    <ResponsiveContainer width="100%" height="100%">
        <LineChart
            width={500}
            height={300}
            data={data}
            margin={{
                top: 5,
                right: 30,
                left: 20,
                bottom: 5,
            }}
        >
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="time" />
            <YAxis />
            <Tooltip />
            <Line type="monotone" dataKey="power" stroke="#8884d8" activeDot={{ r: 8 }} />
        </LineChart>
    </ResponsiveContainer>
);

export default PowerTimeSeriesLineChart;
