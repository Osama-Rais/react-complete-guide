import React from "react";
import "./Chart.css";

const ChartBar = props => {
let barFillHeight = '0%';
if(props.max>0){
    barFillHeight = Maths.round((props.value / props.maxValue)* 100) + '%';
}
    return (

    <div className="chart-bar">
        <div className='chart-bar___innner'>
      
    <div className = 'chart-bar__fill_' style={{height:barFillHeight}}></div>
    </div>
    <div className='chart-bar__label'>{props.label}</div>
    </div>
    );
}

export default ChartBar;