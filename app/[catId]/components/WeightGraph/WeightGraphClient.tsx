"use client";

import { Cat, TrendingUp } from "lucide-react";
import { CartesianGrid, Line, LineChart, XAxis, YAxis } from "recharts";

import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  ChartConfig,
  ChartContainer,
  ChartTooltip,
  ChartTooltipContent,
} from "@/components/ui/chart";
import { WeightRecord } from "@/lib/definition";

export default function WeightGraphClient({
  weights = [],
  birthDate,
}: {
  weights: WeightRecord[];
  birthDate: Date;
}) {
  const chartData = weights.map((weight) => ({
    date: weight.measurement_date,
    weight: weight.weight_kg,
  }));

  console.log(chartData);

  const chartConfig = {
    weight: {
      label: "Weight",
      color: "hsl(var(--chart-1))",
    },
  } satisfies ChartConfig;

  const CustomDot = (props: any) => {
    const { cx, cy } = props;
    return <Cat className="h-4 w-4" />;
  };

  return (
    <ChartContainer config={chartConfig}>
      <LineChart accessibilityLayer data={chartData}>
        <CartesianGrid vertical={true} />
        <XAxis
          dataKey="date"
          tickLine={false}
          axisLine={false}
          tickMargin={8}
          tickFormatter={(value) => {
            // week number from birth date
            const diffTime = Math.abs(Date.now() - birthDate.getTime());
            const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));
            const weekNumber = Math.ceil(diffDays / 7);
            return `${weekNumber}`;
          }}
        />
        <YAxis
          domain={["dataMin - 1", "dataMax + 1"]}
          tickLine={false}
          axisLine={false}
          tickMargin={8}
          tickFormatter={(value) => `${value} kg`}
        />

        <ChartTooltip
          cursor={false}
          content={<ChartTooltipContent hideLabel />}
        />
        <Line
          dataKey="weight"
          type="natural"
          stroke="hsl(var(--chart-1))"
          strokeWidth={2}
          dot={<CustomDot />}
        />
      </LineChart>
    </ChartContainer>
  );
}
