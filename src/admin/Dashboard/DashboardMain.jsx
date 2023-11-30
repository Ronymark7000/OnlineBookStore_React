import "../style/dashboard.css";
// import Chart from "chart.js/auto";
// import { useEffect, useRef } from "react";


function DashboardMain() {
  // const inventoryChartRef = useRef(null);
  // // const orderChartRef = useRef(null);

  // // For Chart of Inventory
  // // eslint-disable-next-line react-hooks/exhaustive-deps
  // const inventoryChartData = {
  //   labels: ["Adventure", "Fiction", "Drama", "Comedy", "Fiction", "Thriller"],
  //   datasets: [
  //     {
  //       label: "Total Genres Of Books",
  //       data: [12, 19, 3, 5, 2, 3],
  //       backgroundColor: ["rgba(225, 195, 103, 0.5)"],
  //       borderColor: ["rgba(225, 195, 103, 0.7)"],
  //       borderWidth: 1,
  //     },
  //   ],
  // };

  // useEffect(() => {
  //   // For Line Chart
  //   if (inventoryChartRef.current) {
  //     new Chart(inventoryChartRef.current, {
  //       type: 'bar',
  //       data: inventoryChartData,
  //       options: { responsive: true },
  //     });
  //   }
  // }, [inventoryChartData]);

  //    // For Chart of Order
  //    // eslint-disable-next-line react-hooks/exhaustive-deps
  //    const orderChartData = {
  //      labels: ["Completed", "Pending", "Left"],
  //      datasets: [
  //        {
  //          label: "Total Orders",
  //          data: [42, 29, 32],
  //          backgroundColor: [
  //            "rgba(176, 217, 177, 0.5)",
  //            "rgba(225, 195, 103, 0.5)",
  //            "rgba(255, 143, 143, 0.5)",
  //          ],
  //          borderColor: [
  //            "rgba(176, 217, 177, 0.6)",
  //            "rgba(225, 195, 103, 0.6)",
  //            "rgba(255, 143, 143, 0.6)",
  //          ],
  //          borderWidth: 1,
  //        },
  //      ],
  //    };

  //    // For Chart of Order
  //    if (orderChartRef.current) {
  //      new Chart(orderChartRef.current, {
  //        type: "doughnut",
  //        data: orderChartData,
  //        options: { responsive: true },
  //      });
  //    }
  //  }, [inventoryChartData, orderChartData]);


  return (
    <>
      <div className="cardBox">
        <div className="card">
          <div>
            <div className="numbers">154</div>
            <div className="cardName">Customers</div>
          </div>

          <div className="iconBx">
            <ion-icon name="person-outline"></ion-icon>
          </div>
        </div>

        <div className="card">
          <div>
            <div className="numbers">290</div>
            <div className="cardName">Books</div>
          </div>

          <div className="iconBx">
            <ion-icon name="podium-outline"></ion-icon>
          </div>
        </div>

        <div className="card">
          <div>
            <div className="numbers">9</div>
            <div className="cardName">Orders</div>
          </div>

          <div className="iconBx">
            <ion-icon name="documents-outline"></ion-icon>
          </div>
        </div>

        <div className="card">
          <div>
            <div className="numbers">NRs 590k</div>
            <div className="cardName">Sales</div>
          </div>

          <div className="iconBx">
            <ion-icon name="cash-outline"></ion-icon>
          </div>
        </div>
      </div>

      {/* <!-- Order Detail List --> */}

      <div className="charts">
        <div className="chart">
          <h2>Inventory Book Scaling</h2>
          <canvas id="barChart"></canvas>
        </div>
        <div className="chart" id="doughnut-chart">
          <h2>Order Ratio</h2>
          <canvas id="piechart"></canvas>
        </div>
      </div>
    </>
  );
}

export default DashboardMain