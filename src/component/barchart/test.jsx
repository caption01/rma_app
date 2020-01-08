import React from 'react'

import Line from 'chart.js'


const line = {
    labels: [],
    datasets: [
        {
            label: 'My First dataset',
            fill: false,
            data: []
        }
    ]
};

class LineChart extends React.Component {

    constructor(props) {
        super(props);

        this.props.config = line;
        setInterval(function(){
            this.props.config.labels.push(Math.floor(Math.random() * 100));
            this.props.config.datasets[0].data.push(Math.floor(Math.random() * 100));
            this.props.changeHandler();
        }, 5000);

    }


    render() {
        return (
            <div className="chart">
                <Line
                    data={this.state}
                    height={5}
                    width={20}
                />
            </div>
        )
    }
}


export default LineChart;