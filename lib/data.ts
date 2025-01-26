import { sql } from "@vercel/postgres";
import { Cat } from "./definition";

export const fetchUsersCats = async (userId: string) => {
  const cats = await sql<Cat>`SELECT * FROM cats WHERE user_id = ${userId}`;

  return cats.rows.map((cat) => cat.name);
};

export const fetchCatList = async () => {
  return (await sql<Cat>`SELECT * FROM cats`).rows;
};
