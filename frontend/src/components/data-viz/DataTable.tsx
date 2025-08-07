interface DataTableProps {
  data: any[];
  columns: { key: string; title: string }[];
}

export const DataTable = ({ data, columns }: DataTableProps) => {
  return (
    <div className="overflow-x-auto">
      <table className="min-w-full divide-y divide-secondary-gray">
        <thead className="bg-primary-gray">
          <tr>
            {columns.map((column) => (
              <th
                key={column.key}
                scope="col"
                className="px-6 py-3 text-left text-xs font-medium uppercase tracking-wider text-text-secondary"
              >
                {column.title}
              </th>
            ))}
          </tr>
        </thead>
        <tbody className="divide-y divide-secondary-gray bg-primary-dark">
          {data.map((row, rowIndex) => (
            <tr key={rowIndex}>
              {columns.map((column) => (
                <td
                  key={column.key}
                  className="whitespace-nowrap px-6 py-4 text-sm text-text-primary"
                >
                  {row[column.key]}
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};