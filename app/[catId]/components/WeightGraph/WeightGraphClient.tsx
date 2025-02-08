"use client";

import { Calendar, Cat } from "lucide-react";
import { CartesianGrid, Line, LineChart, XAxis, YAxis } from "recharts";

import {
  ChartConfig,
  ChartContainer,
  ChartTooltip,
  ChartTooltipContent,
} from "@/components/ui/chart";
import { WeightRecord } from "@/lib/definition";
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

  const chartConfig = {
    weight_kg: {
      label: "Weight",
      color: "hsl(var(--chart-1))",
      icon: Cat,
    },
  } satisfies ChartConfig;

  const handleClick = (data: any) => {
    if (data && data.activePayload && data.activePayload[0]) {
      const clickedWeight = data.activePayload[0].payload as WeightRecord;
      setSelectedWeight(clickedWeight);
      setDialogOpen(true);
    }
  };

  return (
    <>
      <ChartContainer config={chartConfig} className="min-h-[300px] h-full">
        <LineChart accessibilityLayer data={weights} onClick={handleClick}>
          <CartesianGrid vertical={true} />
          <XAxis
            dataKey="measurement_date"
            tickLine={false}
            axisLine={true}
            tickMargin={8}
            domain={[0, "dataMax + 1"]}
            tickFormatter={(value) => {
              const date = new Date(value);
              const diffTime = Math.abs(date.getTime() - birthDate.getTime());
              const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));
              const weekNumber = Math.floor(diffDays / 7);
              return `${weekNumber}`;
            }}
          />
          <YAxis
            domain={["dataMin - 1", "dataMax + 1"]}
            tickLine={false}
            axisLine={true}
            tickMargin={8}
            tickFormatter={(value) => `${value} kg`}
          />

          <ChartTooltip
            cursor={false}
            content={<ChartTooltipContent hideLabel />}
          />
          <Line
            dataKey="weight_kg"
            type="natural"
            stroke="hsl(var(--chart-1))"
            strokeWidth={2}
          />
        </LineChart>
      </ChartContainer>

      <WeightDialog
        open={dialogOpen}
        setOpen={setDialogOpen}
        weight={selectedWeight}
      />
    </>
  );
}
