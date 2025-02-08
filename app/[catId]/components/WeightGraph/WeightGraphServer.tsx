import { fetchWeightRecordsAndBirthDate } from "@/lib/data";
import {
  Legend,
  Line,
  LineChart,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
} from "recharts";
import WeightGraphClient from "./WeightGraphClient";

export default async function WeightGraphServer({ catId }: { catId: string }) {
  const { birthDate, weightRecords } = await fetchWeightRecordsAndBirthDate(
    catId
  );
  return <WeightGraphClient weights={weightRecords} birthDate={birthDate} />;
}
