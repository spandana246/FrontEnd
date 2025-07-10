// src/utils/chartUtils.ts
export const prepareSentimentChartData = (data: { [label: string]: number }) => {
  return {
    labels: Object.keys(data),
    datasets: [
      {
        data: Object.values(data),
        backgroundColor: ['#36A2EB', '#FF6384', '#FFCE56']
      }
    ]
  };
};
