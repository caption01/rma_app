import React from 'react'

import Chart from 'chart.js'


// ant-design
import { DatePicker, Button } from 'antd';



class UserChart extends React.Component {

    constructor(props){
        super(props)
        this.chartRef2 = React.createRef();
        this.state = {
        }
    }

    onChange = (value, dateString) => {
        if (dateString[0]==='' || dateString[1]===''){
        } else {
            this.setState({
                start: new Date(dateString[0]).toISOString(),
                end: new Date(dateString[1]).toISOString()
            }, () => {console.log(this.state)})
        } 

      }

    onShowClick = () => {

        this.state.userChart.data.labels = this.props.userData.map(user => user.date)

        this.state.userChart.data.datasets = [
            {
                label: 'total user',
                data: this.props.userData.map(user => user.size)
            }
        ]

        this.state.userChart.update()
    }
      
    onOk = (value) => {
        this.props.fetchHistoryUserWithDate(this.state.start, this.state.end)
      }


    componentDidMount() {

        const myChartRef2 = this.chartRef2.current.getContext('2d')

        const { userData } = this.props

        const myUserChart2 = new Chart(myChartRef2, {
                type: "line",
                data: {
                    datasets: [
                        {
                            label: 'total user',
                            data: userData.map(user => user.size)
                        }
                    ],
                    labels: userData.map(user => user.date)
                },
                options: {
                    //Customize chart options
                }
            })

            this.setState({
                userChart: myUserChart2
            })
        }

    render(){

        const { RangePicker } = DatePicker;

        return(
            <div className='user-chart-container' style={{display: 'flex', justifyContent: 'center', textAlign: 'center'}}>
                <div className='user-chart-display' style={{width: '50%', padding: '10px'}}>
                    <canvas ref={this.chartRef2} />
                    <div className='date-pick-container' style={{padding: '10px 10px'}}>
                        <RangePicker
                            showTime={{ format: 'HH:mm' }}
                            format="YYYY-MM-DD HH:mm"
                            placeholder={['Start Time', 'End Time']}
                            onChange={(value,dateString)=>this.onChange(value,dateString)}
                            onOk={()=>this.onOk()}
                            style={{padding: '0px 10px'}}
                        />
                    </div>
                    <div>
                        <Button type="primary" onClick={()=>this.onShowClick()}>Show</Button>
                    </div>
                </div>
            </div>
        )
    }
}

export default UserChart