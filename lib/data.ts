import { sql } from "@vercel/postgres";
import { Cat } from "./definition";

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
