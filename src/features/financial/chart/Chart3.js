import React from "react";

// install (please make sure versions match peerDependencies)
// yarn add @nivo/core @nivo/radar
import { ResponsiveRadar } from "@nivo/radar";
// make sure parent container have a defined height when using
// responsive component, otherwise height will be 0 and
// no chart will be rendered.
// website examples showcase many properties,
// you'll often use just a few of them.
const Chart3 = ({ data /* see data tab */ }) => (
  <ResponsiveRadar
    data={data}
    keys={["여자", "남자", "합계"]}
    indexBy="taste"
    maxValue="auto"
    margin={{ top: 60, right: 250, bottom: 30, left: 70 }}
    curve="linearClosed"
    borderWidth={2}
    borderColor={{ from: "color" }}
    gridLevels={10}
    gridShape="circular"
    gridLabelOffset={50}
    enableDots={true}
    dotSize={10}
    dotColor={{ theme: "background" }}
    dotBorderWidth={2}
    dotBorderColor={{ from: "color" }}
    enableDotLabel={true}
    dotLabel="value"
    dotLabelYOffset={-12}
    colors={{ scheme: "nivo" }}
    fillOpacity={0.25}
    blendMode="multiply"
    animate={true}
    motionConfig="wobbly"
    isInteractive={true}
    legends={[
      {
        anchor: "top-left",
        direction: "column",
        translateX: -50,
        translateY: -40,
        itemWidth: 80,
        itemHeight: 20,
        itemTextColor: "#999",
        symbolSize: 12,
        symbolShape: "circle",
        effects: [
          {
            on: "hover",
            style: {
              itemTextColor: "#000",
            },
          },
        ],
      },
    ]}
  />
);

export default Chart3;
