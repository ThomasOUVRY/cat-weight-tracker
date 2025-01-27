"use server";

import { Card, CardContent, CardTitle } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import { getCatAge } from "@/lib/catUtils";
import { Calendar, Sun } from "lucide-react";

type CatAgeProps = {
  birthDate: Date;
};

export default async function CatAge({ birthDate }: CatAgeProps) {
  const { years, months, days, weeks } = await getCatAge(birthDate);

  return (
    <div className="mt-4 flex flex-col gap-4">
      <CardTitle>Age</CardTitle>
      <Card>
        <CardContent className="p-6 flex flex-col gap-2 items-center">
          <div className="flex items-center gap-6">
            <Calendar className="h-6 w-6 text-primary" />
            {years > 0 && (
              <div className="flex flex-col items-center">
                <div className="text-2xl font-bold">{years}</div>
                <p className="text-sm text-muted-foreground">
                  {years <= 1 ? "année" : "années"}
                </p>
              </div>
            )}

            {months > 0 && (
              <div className="flex flex-col items-center">
                <div className="text-2xl font-bold">{months}</div>
                <p className="text-sm text-muted-foreground">
                  {months <= 1 ? "mois" : "mois"}
                </p>
              </div>
            )}

            {days > 0 && (
              <div className="flex flex-col items-center">
                <div className="text-2xl font-bold">{days}</div>
                <p className="text-sm text-muted-foreground">
                  {days <= 1 ? "jour" : "jours"}
                </p>
              </div>
            )}
          </div>

          <Separator className="my-2" />

          <div className="flex items-center gap-6">
            <Sun className="h-6 w-6 text-primary" />
            <div className="flex flex-col items-center">
              <div className="text-2xl font-bold">{weeks}</div>
              <p className="text-sm text-muted-foreground">
                {weeks <= 1 ? "semaine" : "semaines"}
              </p>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
