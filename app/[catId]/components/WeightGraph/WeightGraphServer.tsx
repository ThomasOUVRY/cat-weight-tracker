import { fetchWeightRecordsAndBirthDate } from "@/lib/data";
import WeightGraphClient from "./WeightGraphClient";

export default async function WeightGraphServer({ catId }: { catId: string }) {
  const { birthDate, weightRecords } = await fetchWeightRecordsAndBirthDate(
    catId
  );
  return (
    <>
      <WeightGraphClient weights={weightRecords} birthDate={birthDate} />
    </>
  );
}
