"use client";

import { TrendingUp } from "lucide-react";
import { CartesianGrid, Line, LineChart, XAxis } from "recharts";

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
import { useParams } from "next/navigation";
import { fetchWeightRecords } from "@/lib/data";
import { useEffect, useState } from "react";
import { WeightRecord } from "@/lib/definition";

/* const chartData = Array.from({ length: 75 }, (_, index) => ({
  semaine: `${index + 1}`,
  desktop: index + 1,
  mobile: index + 1,
})); */

const mitaineData = [
  {
    semaine: 16,
    poids: 1.5,
  },
  {
    semaine: 18,
    poids: 1.65,
  },
];

const chartConfig = {
  desktop: {
    label: "Desktop",
    color: "hsl(var(--chart-1))",
  },
  mobile: {
    label: "Mobile",
    color: "hsl(var(--chart-2))",
  },
} satisfies ChartConfig;

export default function WeightGraph() {
  const { catId } = useParams<{ catId: string }>();
  const [weightRecords, setWeightRecords] = useState<WeightRecord[]>([]);

  useEffect(() => {
    fetchWeightRecords(catId).then(setWeightRecords);
  }, [catId]);

  // Transform weight records into chart data format
  const chartData = weightRecords
    .sort((a, b) => a.measurement_date.getTime() - b.measurement_date.getTime())
    .map((record) => ({
      date: record.measurement_date.toLocaleDateString(),
      weight: record.weight_kg,
    }));

  return (
    <Card className="h-full">
      <CardHeader>
        <CardTitle>Weight History</CardTitle>
        <CardDescription>Weight measurements over time</CardDescription>
      </CardHeader>
      <CardContent>
        <ChartContainer config={chartConfig}>
          <LineChart
            width={600}
            height={400}
            data={chartData}
            margin={{ top: 5, right: 20, bottom: 5, left: 0 }}
          >
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="date" />
            <ChartTooltip>
              {({ active, payload }) => {
                if (active && payload && payload.length) {
                  return (
                    <ChartTooltipContent>
                      <div className="flex flex-col gap-2">
                        <div className="flex items-center justify-between gap-2">
                          <span className="font-medium">Date:</span>
                          <span>{payload[0].payload.date}</span>
                        </div>
                        <div className="flex items-center justify-between gap-2">
                          <span className="font-medium">Weight:</span>
                          <span>{payload[0].value} kg</span>
                        </div>
                      </div>
                    </ChartTooltipContent>
                  );
                }
                return null;
              }}
            </ChartTooltip>
            <Line
              type="monotone"
              dataKey="weight"
              stroke="hsl(var(--primary))"
              dot={true}
            />
          </LineChart>
        </ChartContainer>
      </CardContent>
    </Card>
  );
}
