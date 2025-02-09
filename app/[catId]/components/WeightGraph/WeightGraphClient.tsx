"use client";

import { Calendar, Cat } from "lucide-react";
import {
  Area,
  CartesianGrid,
  ComposedChart,
  Line,
  LineChart,
  XAxis,
  YAxis,
} from "recharts";

import {
  ChartConfig,
  ChartContainer,
  ChartTooltip,
  ChartTooltipContent,
} from "@/components/ui/chart";
import { WeightRecord } from "@/lib/definition";
import {
  buildFullTrackData,
  CHART_CONFIG,
  Percentile,
  PERCENTILES,
  WEIGHT_TACKS,
} from "@/consts/WeightTrack";
import WeightDialog from "../WeighDialog/WeightDialog";
import { useState } from "react";

export default function WeightGraphClient({
  weights = [],
  birthDate,
}: {
  weights: WeightRecord[];
  birthDate: Date;
}) {
  const [selectedWeight, setSelectedWeight] = useState<
    WeightRecord | undefined
  >();
  const [dialogOpen, setDialogOpen] = useState(false);

  if (weights.length === 0) {
    return (
      <div className="flex h-full w-full items-center justify-center">
        <p className="text-sm text-muted-foreground">No weights recorded</p>
      </div>
    );
  }

  const handleClick = (data: any) => {
    if (data && data.activePayload && data.activePayload[0]) {
      const clickedWeight = data.activePayload[0].payload as WeightRecord;
      setSelectedWeight(clickedWeight);
      setDialogOpen(true);
    }
  };

  console.table(buildFullTrackData());

  return (
    <>
      <ChartContainer config={CHART_CONFIG} className="h-[300px] h-full">
        <ComposedChart accessibilityLayer data={buildFullTrackData()}>
          <CartesianGrid />
          <XAxis
            dataKey="week"
            domain={[0, 55]}
            minTickGap={5}
            label={{ value: "Week", position: "insideBottom" }}
          />
          <YAxis
            tickCount={9}
            label={{
              value: "Weight (kg)",
              angle: -90,
              position: "insideLeft",
            }}
            allowDecimals={false}
          />

          <ChartTooltip
            cursor
            content={<ChartTooltipContent indicator="dot" />}
          />
          {PERCENTILES.map((percentile, index) => (
            <Area
              key={percentile}
              dataKey={percentile}
              type="natural"
              connectNulls
              fillOpacity={0}
              strokeDasharray={index % 2 === 0 ? "3 3" : undefined}
              stackId="stack"
            />
          ))}
          <Line
            dataKey="mitaine"
            stroke="pink"
            dot={false}
            strokeWidth={3}
            additive="sum"
            connectNulls
          />
        </ComposedChart>
      </ChartContainer>

      <WeightDialog
        open={dialogOpen}
        setOpen={setDialogOpen}
        weight={selectedWeight}
      />
    </>
  );
}
