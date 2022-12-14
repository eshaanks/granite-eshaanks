import React from "react";

import TableHeader from "./TableHeader";
import TableRow from "./TableRow";

const Table = ({
  type = "pending",
  data,
  destroyTask,
  showTask,
  handleProgressToggle,
  starTask,
}) => (
  <div className="mt-10 flex flex-col">
    <div className="my-2 overflow-x-auto sm:-mx-6 lg:-mx-8">
      <div
        className="inline-block min-w-full py-2
            align-middle sm:px-6 lg:px-8"
      >
        <div
          className="border-b shadow
              md:custom-box-shadow overflow-hidden border-gray-200"
        >
          <table className="divide-y min-w-full divide-gray-200">
            <TableHeader type={type} />
            <TableRow
              data={data}
              destroyTask={destroyTask}
              handleProgressToggle={handleProgressToggle}
              showTask={showTask}
              starTask={starTask}
              type={type}
            />
          </table>
        </div>
      </div>
    </div>
  </div>
);

export default Table;
