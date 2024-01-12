import { Chart, registerables } from "chart.js";
import React from 'react';
import { Bar, Doughnut } from 'react-chartjs-2';

// storing data as array of objects
const records = [
    {
        "number": "$300,000",
        "text": "My Goal"
    },
    {
        "number": "59%",
        "text": "Goal Achieved"
    },
    {
        "number": "$300",
        "text": "Est. Monthly Income"
    }

]

function Middle() {
    const data = {
        labels: ['20', '23', '25', '28', '30', '33', '35', '38', '40', '50', '60', '63', '65'],
        datasets: [
            {
                label: 'Employer: $73,500',
                backgroundColor: "#0900A2",
                borderWidth: 0,
                hoverBackgroundColor: '#0900A2',
                data: [20, 25, 30, 35, 40, 50, 55, 60, 65, 70, 75, 80, 90],
            },
            {
                label: 'Employee: $52,500',
                backgroundColor: '#4A34FF',
                borderWidth: 0,
                hoverBackgroundColor: '#4A34FF',
                data: [20, 25, 30, 35, 40, 50, 55, 60, 65, 70, 75, 80, 90],
            },
            {
                label: 'Total Interest: $244, 313',
                backgroundColor: "#86AFFF",
                borderWidth: 0,
                hoverBackgroundColor: '#86AFFF',
                data: [20, 25, 30, 35, 40, 50, 55, 60, 65, 70, 75, 80, 90],
            },

        ],
    };

    // Chart configuration
    const options = {
        scales: {
            x: { stacked: true },
            y: { stacked: true },
        },
    };

    const data1 = {
        labels: ['Average'],
        datasets: [
            {
                data: [78, 22],
                backgroundColor: ['#25D2A7', '#D6F5EC',], // Single color for all segments
                borderWidth: 0,
            },
        ],
    };
    const data2 = {
        labels: ['Top'],
        datasets: [
            {
                data: [95, 5],
                backgroundColor: ['#25D2A7', '#D6F5EC',], // Single color for all segments
                borderWidth: 0,
            },
        ],
    };
    const data3 = {
        labels: ['Me'],
        datasets: [
            {
                data: [59, 41],
                backgroundColor: ['#25D2A7', '#D6F5EC',], // Single color for all segments
                borderWidth: 0,
            },
        ],
    };

    // Chart configuration
    const options2 = {
        cutout: '85%', // Adjust the size of the center hole
        responsive: true,
        maintainAspectRatio: true,
    };


    Chart.register(...registerables);


    return (
        <>
            <div className="middle-container m-5">
                <span>Retirement Income</span>
                <h3>Starting Year 2056</h3>
                <div className="d-md-flex">
                    {
                        records.map((e) => {
                            return (
                                <div className="col-3 mt-4 cards">
                                    <h4><b>{e.number}</b></h4>
                                    <div className="sub-head line">{e.text}</div>
                                </div>
                            )
                        })
                    }

                </div>
                <div className="mt-5">
                    <h6>Contributions Overtime</h6>
                    <Bar data={data} options={options} />
                </div>

                <div className="mt-4">
                    <h6>How do I compare to my peers?</h6>
                    <div className="sub-head">These numbers represent current goal achievment</div>
                    <div className="d-flex mt-4" style={{ height: "7rem" }}>

                        <Doughnut data={data1} options={options2} />
                        <Doughnut data={data2} options={options2} />
                        <Doughnut data={data3} options={options2} />
                    </div>

                </div>
            </div>
        </>
    )
}
export default Middle;