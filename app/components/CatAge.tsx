import CatAgeClient from "./CatAgeClient";

export default function CatAge() {
  return (
    <CatAgeClient
      cat={{
        cat_id: "1",
        user_id: "1",
        name: "Médor",
        birth_date: new Date("2020-01-01"),
        breed: "Unknown",
        sex: "M",
        created_at: new Date("2020-01-01"),
      }}
    />
  );
}
