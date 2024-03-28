import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { directorsContent, directorsRows } from "@/lib/constants";

const DirectorsData = () => {
  return (
    <Table>
      <TableHeader>
        <TableRow>
          {directorsRows.map((item) => (
            <TableHead key={item.for}>{item.label}</TableHead>
          ))}
        </TableRow>
      </TableHeader>
      <TableBody>
        {directorsContent.map((item) => (
          <TableRow key={item.id}>
            <TableCell>{item.type}</TableCell>
            <TableCell>{item.surname}</TableCell>
            <TableCell>{item.name}</TableCell>
            <TableCell>{item.idNo}</TableCell>
            <TableCell>{item.address}</TableCell>
            <TableCell>{item.email}</TableCell>
            <TableCell>{item.phone}</TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
  );
};

export default DirectorsData;
