import React, { Component } from 'react';
import CanvasJSReact from '@canvasjs/react-charts';
//var CanvasJSReact = require('@canvasjs/react-charts');
const PieChart = ({data}) => {

    var CanvasJS = CanvasJSReact.CanvasJS;
    var CanvasJSChart = CanvasJSReact.CanvasJSChart;
    
    //console.log(data)

    const options = {
        theme: "light2", // "light1", "light2", "dark1", "dark2"
        animationEnabled: true,
        data: [{
            type: "pie",
            startAngle: 25,
            toolTipContent: "<b>{label}</b>: {y} €",
            legendText: "{label}",
            indexLabelFontSize: 16,
            indexLabel: "{label} - {y} €",
            dataPoints: data,
        }]
    }
    return (
        <div>
        <CanvasJSChart options = {options}
          /* onRef = {ref => this.chart = ref} */
        />
        </div>
    )
}
export default PieChart