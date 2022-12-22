import React from "react";
import './ChartBar';
import './Chart.css'
const Chart = props => {
return ( 
<div className="chart">
{props.allTheData.map((TheData)=> (
<ChartBar
value={TheData.value} 
maxValue={null} 
label={TheData.label}
/>
))}
</div>
);
};

export default Chart;