import { sql } from "@vercel/postgres";
import { Cat, WeightRecord } from "./definition";

export const fetchUsersCats = async (userId: string) => {
  const cats = await sql<Cat>`SELECT * FROM cats WHERE user_id = ${userId}`;

  return cats.rows;
};

export const fetchCatList = async () => {
  return (await sql<Cat>`SELECT * FROM cats`).rows;
};

export const fetchCat = async (catId: string) => {
  return (await sql<Cat>`SELECT * FROM cats WHERE cat_id = ${catId} LIMIT 1`)
    .rows[0];
};

export const addWeight = async (
  catId: string,
  weight: number,
  date: string
) => {
  return await sql`
    INSERT INTO weight_records (cat_id, weight_kg, measurement_date)
    VALUES (${catId}, ${weight}, ${date})
  `;
};

export const fetchWeightRecords = async (catId: string) => {
  return (
    await sql<WeightRecord>`SELECT * FROM weight_records WHERE cat_id = ${catId}`
  ).rows;
};
