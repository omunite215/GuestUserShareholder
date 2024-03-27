import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import Shareholders from "./Forms/ShareholderMain";

const Main = () => {
  return (
    <Card className="my-6">
      <CardHeader className="flex flex-row justify-between items-center">
        <CardDescription>Guest Shareholder</CardDescription>
        <CardTitle>Minamoto Riotsu</CardTitle>
        <CardDescription>Person</CardDescription>
      </CardHeader>
      <CardContent>
        <Shareholders />
      </CardContent>
    </Card>
  );
};

export default Main;
