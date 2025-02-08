"use client";

import { Cat } from "@/lib/definition";

interface CatAgeClientProps {
  cat: Cat;
}

export default function CatAgeClient({ cat }: CatAgeClientProps) {
  return <div>CatAge: {cat.birth_date.toLocaleDateString("fr-FR")}</div>;
}
