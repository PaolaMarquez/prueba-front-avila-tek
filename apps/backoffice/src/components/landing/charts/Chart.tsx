import DoughnutChart from "./DoughnutChart";
import LineChart from "./LineChart";

export default function Chart() {
  return (
    <>
      <div className="">
        <div className="flex justify-center mt-32 p-8 max-w-4xl">
          <div className="flex rounded-md shadow-lg p-4 w-11/12 h-96 text-base">
            <LineChart />
          </div>
        </div>
        <div className="flex justify-center items-center p-4 pb-12 w-min min-h-72 rounded-full bg-white">
          <DoughnutChart />
        </div>
      </div>
    </>
  );
}
