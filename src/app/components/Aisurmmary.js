"use client"
import { DotLottieReact } from '@lottiefiles/dotlottie-react';
import { GoogleGenerativeAI } from "@google/generative-ai";
import { useEffect, useState } from 'react';
import { lineChartData } from '../data/waterData';

export const AiInference = () => {
  const [response, setResponse] = useState("");
  const [isLoading, setIsLoading] = useState(true);
  const API_KEY = "AIzaSyDVlfPlzubkQw9orWkmunaTQ2Ku2FQG4Ug"
  const genAI = new GoogleGenerativeAI(API_KEY)

  const dataOne = [...lineChartData.datasets[0].data];
  const labelOne = lineChartData.datasets[0].label;
  const dataTwo = [...lineChartData.datasets[1].data];
  const labelTwo = lineChartData.datasets[1].label;
  const dataThree = [...lineChartData.datasets[2].data];
  const labelThree = lineChartData.datasets[2].label;
  const datafour = [...lineChartData.datasets[3].data];
  const labelfour = lineChartData.datasets[3].label;
  const datafive = [...lineChartData.datasets[4].data];
  const labelfive = lineChartData.datasets[4].label;

  const sleep = (ms) => new Promise((resolve) => setTimeout(resolve, ms));

  const fetchData = async () => {
    try {
      const model = genAI.getGenerativeModel({ model: "gemini-pro" });
      const prompt = `Analyze the following fish pond water health data for the past week, consisting of turbidity, temperature (°C), TDS (%), ammonia(NH3), PH. Provide a brief, actionable summary of the trends and their impact on the health of the fishes based on the data: ${labelOne} ${dataOne} ${labelTwo} ${dataTwo} ${labelThree} ${dataThree} ${labelfour} ${datafour} ${labelfive} ${datafive}, Give a short summary (3-4 sentences) highlighting the overall water health and recommendations for better fish rearing. don't bold the title or text`
      const result = await model.generateContent(prompt);
      await sleep(1000);
      setIsLoading(false)
      setResponse(result.response.text());
    } catch (error) {
      console.log(error);
      setResponse("Error fetching data");

    }
  }

  useEffect(() => {

    fetchData();

  }, []);

  return (
    <div className="w-full h-[48%] flex flex-col rounded-lg px-4 pb-4 items-center bg-white">
      <div className="flex justify-between w-full h-[20%] items-center">
        <h1 className="font-semibold">AI Summary</h1>
        <DotLottieReact
          src="https://lottie.host/858f9d09-390b-4dca-83f3-58b62380a3f1/6EOvvsNKXN.json"
          loop
          autoplay
          className="w-24 h-24 mr-[-30px]"
        />
      </div>
      <div className="flex w-[99.5%] p-4 rounded-md bg-[#8080801a] overflow-y-auto h-[80%]">
        <span className="w-full h-max max-h-full overflow-y-auto">
          {isLoading ? <DotLottieReact
            src="https://lottie.host/84b29f64-08a4-4073-8f17-8e3e578a92b6/UPR6ahml8E.json"
            loop
            autoplay
          /> : response}
        </span>
      </div>
    </div>
  );
};
