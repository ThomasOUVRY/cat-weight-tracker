import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import CatSelector from "./CatSelector";

export default async function CatInfo() {
  return (
    <Card className="h-full">
      <CardHeader>
        <CardTitle>Votre chat</CardTitle>
      </CardHeader>
      <CardContent>
        <CatSelector />
      </CardContent>
    </Card>
  );
}
