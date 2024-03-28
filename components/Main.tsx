"use client";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
} from "@radix-ui/react-collapsible";
import { useState } from "react";
import DirectorsData from "./DirectorsData";
import { buttonVariants } from "./ui/button";
import Directors from "./Forms/DirectorsMain";

const Main = () => {
  const [isOpen, setIsOpen] = useState(true);
  return (
    <Collapsible open={isOpen} onOpenChange={setIsOpen} className="w-full">
      <Card>
        <div className="flex flex-1 justify-between items-center">
          <CardHeader>
            <CardTitle>Shareholders</CardTitle>
            <CardDescription>Here are the details on Shareholders</CardDescription>
          </CardHeader>
          <CollapsibleTrigger type="button" className="pr-6">
            <span className={buttonVariants({ variant: "outline" })}>
              {isOpen ? "-" : "+"}
            </span>
          </CollapsibleTrigger>
        </div>
        <CardContent className="space-y-6">
          <CollapsibleContent className="CollapsibleContent">
            <DirectorsData />
          </CollapsibleContent>
          <Directors />
        </CardContent>
      </Card>
    </Collapsible>
  );
};

export default Main;
