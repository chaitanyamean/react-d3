import AnimatedPieHooks from './AnimatedPieHooks'

import React, { useState, useEffect } from "react";
import * as d3 from "d3";

function ChartWrapper() {

    const generateData = (value, length = 1) =>
    d3.range(length).map((item, index) => ({
      date: index,
      value: value === null || value === undefined ? Math.random() * 100 : value
    }));

  const [data, setData] = useState(generateData(0));
//   const changeData = () => {
//     setData(generateData());
//   };

  useEffect(
    () => {
      setData(generateData());
    },
    [!data]
  );

        return (
            <AnimatedPieHooks
            data={data}
            width={600}
            height={300}
            innerRadius={60}
            outerRadius={100}
            thickness={10}
            margin={10}
            angleRange={0.5 * Math.PI}
          />
        )


    }
export default ChartWrapper; 
