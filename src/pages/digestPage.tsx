import NavBar from "../components/navbar";
import { useState } from "react";

import {
  Table,
  TableHeader,
  TableColumn,
  TableBody,
  TableRow,
  TableCell,
  getKeyValue,
  Button,
  Input,
} from "@nextui-org/react";
import axios from "axios";

const rows = [
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
    key: "amount_of_files",
    label: "AMOUNT OF FILES",
  },
];

const DigestPage = () => {
  const [path, setPath] = useState("");
  const [inputErr, setInputErr] = useState<boolean>(false);
  const [fieldColor, setFieldColor] = useState(0);
  const variations = ["primary", "success", "danger"];

  const handlePathInput = (pathStr: string) => {
    let slashCounter = 0;
    let modifiedString = "";

    if (pathStr.length < 1) {
      setFieldColor(2);
      setInputErr(true);
      return;
    } else {
      setFieldColor(0);
      setInputErr(false);
    }

    for (let i = 0; i < pathStr.length; i++) {
      if (pathStr[i] === "\\") {
        slashCounter += 1;
      }
    }

    if (slashCounter < 1) {
      setInputErr(true);

      setFieldColor(2);
      return;
    } else {
      setFieldColor(0);
      setInputErr(false);
    }
    for (let j = 0; j < slashCounter; j++) {
      for (let i = 0; i < pathStr.length; i++) {
        if (pathStr[i] === "\\") {
          modifiedString = pathStr.replace("\\", "\\\\");
        } else {
          continue;
        }
      }
    }

    if (modifiedString[modifiedString.length] === "\\") {
      modifiedString = modifiedString.concat("\\");
    }
    if (modifiedString[modifiedString.length] !== "\\") {
      modifiedString = modifiedString.concat("\\\\");
    } else if (modifiedString[modifiedString.length] === "\\\\") {
      null;
    }
    console.log(modifiedString);
    setPath(modifiedString);
    setFieldColor(1);
  };

  const submitFolder = async () => {
    if (!inputErr) {
      await axios.post(
        "http://localhost:8000/directory/add",
        {
          directoryToTarget: path,
        },
        { withCredentials: false }
      );
    } else {
      return;
    }
  };

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
        <Input
          isClearable
          className="w-9/12 mt-5"
          color={variations[fieldColor]}
          variant="bordered"
          onClear={() => console.log("input cleared")}
          label={"Copy your directory path, and paste"}
          onValueChange={(value) => handlePathInput(value)}
        ></Input>
        <Button
          className="mt-5 ml-2"
          onClick={async () => await submitFolder()}
        >
          digest
        </Button>
      </div>
    </>
  );
};
export default DigestPage;
