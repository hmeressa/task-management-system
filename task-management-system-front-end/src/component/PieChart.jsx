import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";
import { Doughnut } from "react-chartjs-2";

ChartJS.register(ArcElement, Tooltip, Legend);

const PieChart = ({labelValue,dataValue}) => {
    const data = {
      labels: labelValue,
      datasets: [
        {
          data: dataValue, 
          backgroundColor: ['indigo', 'gray', 'violet'], 
        },
      ],
    };
  
    const options = {
    };
  
    return (
      <div className="doughnut-chart">
        <Doughnut  data={data} options={options} />
      </div>
    );
  };
  export default PieChart;