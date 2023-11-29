import {
  getCoreRowModel,
  useReactTable,
  flexRender,
} from "@tanstack/react-table";

const DataTable = ({ columns = [], data = [] }) => {
  const table = useReactTable({
    data,
    columns,
    getCoreRowModel: getCoreRowModel(),
  });
  return (
    <div >
      <table className="table">
        <thead>
          {table.getHeaderGroups().map((headerGroup, idx) => (
            <tr key={idx}>
              {headerGroup.headers.map((header, id) => (
                <th key={id}>
                  {header.isPlaceholder
                    ? null
                    : flexRender(
                        header.column.columnDef.header,
                        header.getContext()
                      )}
                </th>
              ))}
            </tr>
          ))}
        </thead>
        <tbody>
          {table.getRowModel().rows.map((row, idx) => (
            <tr key={idx}>
              {row.getVisibleCells().map((cell, id) => (
                <td key={id}>
                  {flexRender(cell.column.columnDef.cell, cell.getContext())}
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default DataTable;
