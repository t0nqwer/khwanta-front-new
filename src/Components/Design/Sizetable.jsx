import { useEffect, useState } from "react";
import { Table } from "flowbite-react";

const Sizetable = ({ SizeRow, SizeHead, EditSizeFunc }) => {
  // const Edittrigger = () => {
  //   setIsEdit(!IsEdit);
  // };

  const editS = () => {
    EditSizeFunc(true);
  };
  return (
    <div className=" mt-5">
      <Table className="table-auto">
        <Table.Head>
          <Table.HeadCell className=" text-base bg-white text-center">
            รายละเอียดไซส์
          </Table.HeadCell>
          {SizeHead.map((e, i) => (
            <Table.HeadCell key={i} className=" text-base    bg-white text-center ">
              {e}
            </Table.HeadCell>
          ))}
        </Table.Head>
        <Table.Body className="divide-y">
          {SizeRow.map((e, i) => (
            <Table.Row
              key={i}
              className="bg-white dark:border-gray-700 dark:bg-gray-800  text-center"
            >
              <Table.Cell className="whitespace-nowrap font-medium p-5 text-gray-900 dark:text-white">
                {e?.sizename}
              </Table.Cell>
              {e?.Sizedata?.map((p, i) => (
                <Table.Cell key={i}>{p}</Table.Cell>
              ))}
            </Table.Row>
          ))}
        </Table.Body>
      </Table>
      {/* {!IsEdit ? (
        <a className="font-medium text-blue-600 hover:underline dark:text-blue-500" onClick={Edittrigger}>
          Edit
        </a>
      ) : (
        <a className="font-medium text-blue-600 hover:underline dark:text-blue-500" onClick={Edittrigger}>
          X
        </a>
      )} */}
  
    </div>
  );
};

export default Sizetable;
