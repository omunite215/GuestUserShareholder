import React from "react";
import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
const AssignedShares = () => {
  return (
    <Table>
      <TableCaption>Note: You have been assigned these shares.</TableCaption>
      <TableHeader>
        <TableRow>
          <TableHead>Class of Shares</TableHead>
          <TableHead>No. of Shares</TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        <TableRow>
          <TableCell className="font-medium">Ordinary Class 1</TableCell>
          <TableCell>800</TableCell>
        </TableRow>
        <TableRow>
          <TableCell className="font-medium">Preferance</TableCell>
          <TableCell>800</TableCell>
        </TableRow>
      </TableBody>
    </Table>
  );
};

export default AssignedShares;
