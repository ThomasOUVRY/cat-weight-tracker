import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Form, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { addWeight, deleteWeight, updateWeight } from "@/lib/data";
import { WeightRecord } from "@/lib/definition";
import { CatParam } from "@/types/PageParam";
import { zodResolver } from "@hookform/resolvers/zod";
import { format } from "date-fns";
import { Plus } from "lucide-react";
import { useParams, useRouter } from "next/navigation";
import { useEffect } from "react";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { WeightSchema } from "../../schema/WeightSchema";

interface WeightDialogProps {
  open: boolean;
  setOpen: (open: boolean) => void;
  weight?: WeightRecord;
}

export default function WeightDialog({ open, setOpen, weight }: WeightDialogProps) {
  const router = useRouter();
  const { catId } = useParams<CatParam>();

  const form = useForm<z.infer<typeof WeightSchema>>({
    resolver: zodResolver(WeightSchema),
    defaultValues: {
      weight: 0,
      date: new Date(),
      id: undefined,
    },
  });

  useEffect(() => {
    if (weight) {
      form.reset({
        weight: weight.weight_kg,
        date: weight.measurement_date,
        id: weight.record_id,
      });
    } else {
      form.reset();
    }
  }, [weight, form]);

  const onSubmit = async (data: z.infer<typeof WeightSchema>) => {
    if (data.id) {
      await updateWeight(data.id, data.weight, data.date.toISOString());
    } else {
      await addWeight(catId, data.weight, data.date.toISOString());
    }

    router.refresh();
    setOpen(false);
  };

  const handleDelete = async () => {
    if (weight?.record_id) {
      await deleteWeight(weight.record_id);
      router.refresh();
      setOpen(false);
    }
  };

  const showAddButton = !weight;

  return (
    <Dialog open={open} onOpenChange={setOpen} modal>
      {showAddButton && (
        <DialogTrigger asChild>
          <Button variant="outline">
            <Plus />
            Ajouter un poids
          </Button>
        </DialogTrigger>
      )}

      <DialogContent>
        <DialogTitle>{weight ? "Modifier le poids" : "Ajouter un poids"}</DialogTitle>
        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)}>
            <DialogDescription className="flex flex-col gap-4 my-4">
              <FormField
                control={form.control}
                name="weight"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Poids</FormLabel>
                    <Input
                      {...field}
                      type="number"
                      placeholder="Weight"
                      onChange={(e) => field.onChange(+e.target.value)}
                    />
                    <FormMessage />
                  </FormItem>
                )}
              />

              <FormField
                control={form.control}
                name="date"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Date</FormLabel>
                    <Input {...field} type="date" value={format(field.value, "yyyy-MM-dd")} />
                    <FormMessage />
                  </FormItem>
                )}
              />
            </DialogDescription>
            <DialogFooter className="flex gap-2">
              {weight && (
                <Button type="button" variant="destructive" onClick={handleDelete}>
                  Supprimer
                </Button>
              )}
              <Button type="submit">{weight ? "Modifier" : "Ajouter"}</Button>
            </DialogFooter>
          </form>
        </Form>
      </DialogContent>
    </Dialog>
  );
}
