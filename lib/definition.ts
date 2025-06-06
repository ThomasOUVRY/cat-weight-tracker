export type Cat = {
  cat_id: string;
  user_id: string;
  name: string;
  birth_date: Date;
  breed: string;
  sex: "M" | "F";
  created_at: Date;
};

export type WeightRecord = {
  record_id: string;
  cat_id: string;
  weight_kg: number;
  measurement_date: Date;
  notes: string;
  created_at: Date;
};

export type User = {
  user_id: string;
  email: string;
  created_at: string;
};
