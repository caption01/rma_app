import React from 'react'

import Chart from 'chart.js'

// ant-design
import { DatePicker, Button, Icon } from 'antd';

import './bar-chart.style.scss'


class BarChart extends React.Component {

    constructor(props){
        super(props)
        this.chartRef = React.createRef();
        this.state = {
            start: '',
            end: '',
            index: 1,
            title: ['food', 'drink', 'desert'],
            myBar: ''
        }
    }

    onChange = (value, dateString) => {
        if (dateString[0]==='' || dateString[1]===''){
        } else {
            this.setState({
                start: new Date(dateString[0]).toISOString(),
                end: new Date(dateString[1]).toISOString()
            })
        } 
      }
      
    onOk = (value) => {
        this.props.fetchHistoryWithDate(this.state.start, this.state.end)
      }

    handleChartIndexChange = (value) => {
        this.props.setIndexSelector(value)
    }

    onShowClick = (propsDataName, propsDataStatic) => {

        this.state.myBar.data.labels = propsDataStatic.map(data => data.name)

        this.state.myBar.data.datasets = [
            {
                label: propsDataName,
                data: propsDataStatic.map(data => data.count),
                backgroundColor: propsDataName==='food' ? 'red' : propsDataName==='drink' ? 'blue' : 'green'
            }
        ]

        this.state.myBar.update()
    }

    componentDidMount() {


        const myChartRef = this.chartRef.current.getContext('2d')

        const {foodDataStatic, foodDataName} = this.props

        console.log(foodDataStatic)

        const myBarChart = new Chart(myChartRef, {
                type: "bar",
                data: {
                    //Bring in data
                    labels: foodDataStatic.map(data => data.name),
                    datasets: [
                        {
                            label: foodDataName,
                            data: foodDataStatic.map(data => data.count),
                            backgroundColor: 'red'
                        }
                    ]
                },
                options: {
                    //Customize chart options
                }
            })

            this.setState({
                myBar: myBarChart
            })
        }

    render(){

        const { RangePicker } = DatePicker;

        const { foodDataName, foodDataStatic } = this.props

        return(
            <div className='bar-chart-container' style={{display: 'flex'}}>
                <div className='bar-chart-display' style={{width: '50%', padding: '10px'}}>
                    <canvas ref={this.chartRef} />
                    <div className='date-pick-container' style={{textAlign: 'center', padding: '10px 10px'}}>
                        <RangePicker
                            showTime={{ format: 'HH:mm' }}
                            format="YYYY-MM-DD HH:mm"
                            placeholder={['Start Time', 'End Time']}
                            onChange={(value,dateString)=>this.onChange(value,dateString)}
                            onOk={()=>this.onOk()}
                            style={{padding: '0px 10px'}}
                        />
                    </div>
                </div>
                <div className='bar-chart-table' style={{}} >
                    <div className='bar-chart-table-content'>
                        <h2>Select Menu Summary Graph</h2>
                        <div style={{marginBottom: '0.5em'}}>
                            {
                                this.state.title.map((title, idx) => 
                                 <span 
                                 key={idx} 
                                 style={
                                    this.props.historyIndex === idx ? 
                                     {fontSize: '2em', margin: '2px'}: 
                                     {margin: '2px'}
                                     }
                                 >     
                                    {title}
                                </span>
                                )
                            }
                        </div>
                        <div style={{marginBottom: '0.5em'}}>
                            <Button.Group size={"large"}>
                                <Button type="primary" onClick={()=>this.handleChartIndexChange(-1)}>
                                    <Icon type="left" />
                                    Backward
                                </Button>
                                <Button type="primary" onClick={()=>this.handleChartIndexChange(1)}>
                                    Forward
                                    <Icon type="right" />
                                </Button>
                            </Button.Group>
                        </div>
                        <div>
                            <Button type="primary" onClick={()=>this.onShowClick(foodDataName, foodDataStatic)}>Show</Button>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default BarChart