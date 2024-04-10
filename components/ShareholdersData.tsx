import ShareDetailsPopup from "@/components/Forms/Data/ShareDetailsPopup";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { shareholdersContent, shareholdersRows } from "@/lib/constants";
import { cn } from "@/lib/utils";

const ShareholdersData = () => {
  return (
    <>
      <Table className="w-full">
        <TableHeader>
          <TableRow>
            {shareholdersRows.map((row) => (
              <TableHead
                key={row.for}
                className={cn({
                  hidden:
                    row.for === "classOfShares" || row.for === "totalShares",
                })}
              >
                {row.label}
              </TableHead>
            ))}
            <TableHead>Share Details</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {shareholdersContent.map((item) => (
            <TableRow
              key={item.id}
              className={cn({
                "text-destructive": item.name === "Riotsu",
              })}
            >
              <TableCell>{item.type}</TableCell>
              <TableCell>{item.surname}</TableCell>
              <TableCell>{item.name}</TableCell>
              <TableCell>{item.idNo}</TableCell>
              <TableCell>{item.address}</TableCell>
              <TableCell>{item.email}</TableCell>
              <TableCell>{item.phone}</TableCell>
              <TableCell>
                <ShareDetailsPopup name={item.name} surname={item.surname} />
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </>
  );
};

export default ShareholdersData;
