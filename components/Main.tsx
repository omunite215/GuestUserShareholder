"use client";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
} from "@radix-ui/react-collapsible";
import { useState } from "react";
import Shareholders from "./Forms/ShareholdersMain";
import ShareCapital from "./ShareCapital";
import { buttonVariants } from "./ui/button";
import ShareholdersData from "./ShareholdersData";

const Main = () => {
  const [isOpen, setIsOpen] = useState(true);
  return (
    <Card className="my-3">
      <CardHeader className="flex flex-row justify-between items-center">
        <CardDescription>Tencent Games Pvt. Ltd. / ABCD</CardDescription>
        <CardTitle>Minamoto Riotsu</CardTitle>
      </CardHeader>
      <CardContent className="space-y-6">
        <ShareCapital />
        <Collapsible open={isOpen} onOpenChange={setIsOpen} className="w-full">
          <Card>
            <div className="flex flex-1 justify-between items-center">
              <CardHeader>
                <CardTitle>Shareholders</CardTitle>
                <CardDescription>
                  Here are the details on Shareholders
                </CardDescription>
              </CardHeader>
              <CollapsibleTrigger type="button" className="pr-6">
                <span className={buttonVariants({ variant: "outline" })}>
                  {isOpen ? "-" : "+"}
                </span>
              </CollapsibleTrigger>
            </div>
            <CardContent>
              <CollapsibleContent className="CollapsibleContent">
                <ShareholdersData/>
              </CollapsibleContent>
            </CardContent>
          </Card>
        </Collapsible>
        <Card>
          <CardHeader>
            <CardTitle>Fill in the information for Shareholder</CardTitle>
          </CardHeader>
          <CardContent>
            <Shareholders />
          </CardContent>
        </Card>
      </CardContent>
    </Card>
  );
};

export default Main;
