"use client";

import { TrendingUp } from "lucide-react";
import {
  Area,
  AreaChart,
  CartesianGrid,
  ComposedChart,
  Line,
  XAxis,
} from "recharts";

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
import { WEIGHT_TACKS } from "@/consts/WeightTrack";

const chartConfig = {
  lower: {
    label: "Lower",
    color: "hsl(var(--chart-1))",
  },
  higher: {
    label: "Higher",
    color: "hsl(var(--chart-2))",
  },
} satisfies ChartConfig;

export default function StackedAreaChart() {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Area Chart - Stacked</CardTitle>
        <CardDescription>
          Showing total visitors for the last 6 months
        </CardDescription>
      </CardHeader>
      <CardContent>
        <ChartContainer config={chartConfig}>
          <ComposedChart
            accessibilityLayer
            data={WEIGHT_TACKS}
            margin={{
              left: 12,
              right: 12,
            }}
          >
            <CartesianGrid vertical={false} />
            <XAxis
              dataKey="week"
              tickLine={false}
              axisLine={false}
              tickMargin={8}
            />
            <ChartTooltip
              cursor={false}
              content={<ChartTooltipContent indicator="dot" />}
            />
            <Area
              dataKey="lower"
              type="natural"
              fill="var(--color-lower)"
              fillOpacity={0}
              stroke="var(--color-lower)"
              stackId="a"
            />
            <Area
              dataKey="higher"
              type="natural"
              fill="var(--color-higher)"
              fillOpacity={0.0}
              strokeDasharray={"3 3"}
              stroke="var(--color-higher)"
              stackId="a"
            />

            <Line
              dataKey="mitaine"
              stroke="pink"
              dot={false}
              strokeWidth={5}
              type={"natural"}
            />
          </ComposedChart>
        </ChartContainer>
      </CardContent>
    </Card>
  );
}
