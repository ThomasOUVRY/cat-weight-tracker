import { ChartConfig } from "@/components/ui/chart";

export const PERCENTILES = [
  "0.4",
  "2",
  "10",
  "25",
  "50",
  "75",
  "90",
  "98",
  "99.6",
] as const;

export type Percentile = (typeof PERCENTILES)[number];

type WeightTrack = {
  week: number;
} & Record<Percentile, number>;

export const WEIGHT_TACKS: WeightTrack[] = [
  {
    week: 10,
    "0.4": 0.64,
    "2": 0.74,
    "10": 0.87,
    "25": 1.02,
    "50": 1.18,
    "75": 1.35,
    "90": 1.52,
    "98": 1.75,
    "99.6": 1.98,
  },
  {
    week: 15,
    "0.4": 1.0,
    "2": 1.14,
    "10": 1.32,
    "25": 1.51,
    "50": 1.71,
    "75": 1.95,
    "90": 2.21,
    "98": 2.52,
    "99.6": 2.85,
  },
  {
    week: 20,
    "0.4": 1.27,
    "2": 1.44,
    "10": 1.68,
    "25": 1.89,
    "50": 2.13,
    "75": 2.41,
    "90": 2.75,
    "98": 3.11,
    "99.6": 3.43,
  },
  {
    week: 25,
    "0.4": 1.48,
    "2": 1.67,
    "10": 1.9,
    "25": 2.17,
    "50": 2.43,
    "75": 2.75,
    "90": 3.08,
    "98": 3.51,
    "99.6": 3.9,
  },
  {
    week: 30,
    "0.4": 1.63,
    "2": 1.8,
    "10": 2.07,
    "25": 2.37,
    "50": 2.67,
    "75": 2.98,
    "90": 3.41,
    "98": 3.83,
    "99.6": 4.26,
  },
  {
    week: 35,
    "0.4": 1.7,
    "2": 1.89,
    "10": 2.18,
    "25": 2.49,
    "50": 2.82,
    "75": 3.15,
    "90": 3.6,
    "98": 4.04,
    "99.6": 4.49,
  },
  {
    week: 40,
    "0.4": 1.75,
    "2": 1.95,
    "10": 2.25,
    "25": 2.57,
    "50": 2.91,
    "75": 3.26,
    "90": 3.72,
    "98": 4.18,
    "99.6": 4.64,
  },
  {
    week: 45,
    "0.4": 1.78,
    "2": 1.98,
    "10": 2.29,
    "25": 2.62,
    "50": 2.97,
    "75": 3.33,
    "90": 3.8,
    "98": 4.27,
    "99.6": 4.74,
  },
  {
    week: 50,
    "0.4": 1.8,
    "2": 2.0,
    "10": 2.32,
    "25": 2.65,
    "50": 3.01,
    "75": 3.37,
    "90": 3.85,
    "98": 4.33,
    "99.6": 4.81,
  },
  {
    week: 55,
    "0.4": 1.81,
    "2": 2.02,
    "10": 2.34,
    "25": 2.67,
    "50": 3.03,
    "75": 3.4,
    "90": 3.88,
    "98": 4.37,
    "99.6": 4.85,
  },
];

export const MITAINE_WEIGHT_TACKS: { week: number; weight: number }[] = [
  { week: 15, weight: 1.5 },
  { week: 18, weight: 1.62 },
  { week: 19, weight: 1.7 },
  { week: 20, weight: 1.85 },
  { week: 21, weight: 2 },
  { week: 22, weight: 2.1 },
  { week: 23, weight: 2.23 },
  { week: 24, weight: 2.3 },
  { week: 25, weight: 2.4 },
];

export function buildFullTrackData() {
  const array = [];
  for (let i = 5; i <= 55; i++) {
    const mitaine = MITAINE_WEIGHT_TACKS.find((m) => m.week === i);
    const weightTrack = WEIGHT_TACKS.find((t) => t.week === i);

    if (weightTrack || mitaine) {
      array.push({
        mitaine: mitaine?.weight ?? undefined,
        ...(weightTrack ?? {
          week: i,
          "0.4": undefined,
          "2": undefined,
          "10": undefined,
          "25": undefined,
          "50": undefined,
          "75": undefined,
          "90": undefined,
        }),
      });
    }
  }

  return array;
}
export const CHART_CONFIG: Record<
  Percentile,
  { label: string; color: string }
> = {
  "0.4": {
    label: "Lower",
    color: "hsl(var(--chart-1))",
  },
  "2": {
    label: "2%",
    color: "hsl(var(--chart-2))",
  },
  "10": {
    label: "10%",
    color: "hsl(var(--chart-3))",
  },
  "25": {
    label: "25%",
    color: "hsl(var(--chart-4))",
  },
  "50": {
    label: "50%",
    color: "hsl(var(--chart-5))",
  },
  "75": {
    label: "75%",
    color: "hsl(var(--chart-6))",
  },
  "90": {
    label: "90%",
    color: "hsl(var(--chart-8))",
  },
  "98": {
    label: "98%",
    color: "hsl(var(--chart-9))",
  },
  "99.6": {
    label: "99.6%",
    color: "hsl(var(--chart-10))",
  },
} satisfies ChartConfig;
