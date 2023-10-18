import NavBar from "../components/navbar";
import React from "react";
import {
  Table,
  TableHeader,
  TableColumn,
  TableBody,
  TableRow,
  TableCell,
  getKeyValue,
  Button,
} from "@nextui-org/react";

const rows = [
  {
    key: "1",
    name: "Tony Reichert",
    type: "CEO",
    dir: "Active",
    last_checked: "10",
    amount_of_files: "10",
  },
  {
    key: "2",
    name: "Tony Reichert",
    type: "show",
    dir: "Active",
    last_checked: "10",
    amount_of_files: "10",
  },
  {
    key: "3",
    name: "Tony Reichert",
    type: "movie",
    dir: "Active",
    last_checked: "10",
    amount_of_files: "10",
  },
  {
    key: "4",
    name: "Tony Reichert",
    type: "CEO",
    dir: "Active",
    last_checked: "10",
    amount_of_files: "10",
  },
];

const columns = [
  {
    key: "name",
    label: "NAME",
  },
  {
    key: "type",
    label: "TYPE",
  },
  {
    key: "dir",
    label: "DIR",
  },
  {
    key: "last_checked",
    label: "LAST CHECKED",
  },
  {
    key: "amount_of_files",
    label: "AMOUNT OF FILES",
  },
];

// right now just add directories into the db
// add a resolver in the backend to see
// if the media is a show or a movie

const DigestPage = () => {
  return (
    <>
      <NavBar />
      <h1>this is going to be a table view showing all the targeted tables</h1>
      <Table aria-label="Example table with dynamic content">
        <TableHeader columns={columns}>
          {(column) => (
            <TableColumn key={column.key}>{column.label}</TableColumn>
          )}
        </TableHeader>
        <TableBody emptyContent={"No rows to display."} items={rows}>
          {(item) => (
            <TableRow key={item.key}>
              {(columnKey) => (
                <TableCell>{getKeyValue(item, columnKey)}</TableCell>
              )}
            </TableRow>
          )}
        </TableBody>
      </Table>
      <div className="flex items-center justify-center">
        <Button className="w-9/12 mt-5" color="success" onClick={() => {}}>
          <h1>Add Directory</h1>
        </Button>
      </div>
    </>
  );
};
export default DigestPage;
