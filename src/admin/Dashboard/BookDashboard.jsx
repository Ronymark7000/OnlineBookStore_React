import { useQuery } from "@tanstack/react-query";
import { useMemo } from "react";
import DataTable from "../components/DataTable";
import { getBooks } from "../../services/starWarsCharater";

const BookDashboard = () => {
  const { data, isLoading } = useQuery({
    queryKey: ["starWarsCharacters"],
    queryFn: () => getBooks(),
  });

  const columns = useMemo(() => {
    return [
      {
        accessorKey: "bookId",
        header: "Book ID",
        cell: ({ getValue }) => {
          return <div>{getValue()}</div>;
        },
      },
      {
        accessorKey: "title",
        header: "Book Title",
        cell: ({ getValue }) => {
          return <div>{getValue()}</div>;
        },
      },
      {
        accessorKey: "author",
        header: "Author",
        cell: ({ getValue }) => {
          return <div>{getValue()}</div>;
        },
      },
      {
        accessorKey: "genre",
        header: "Genre",
        cell: ({ getValue }) => {
          return <div>{getValue()}</div>;
        },
      },
      {
        accessorKey: "price",
        header: "Price",
        cell: ({ getValue }) => {
          return <div>{getValue()}</div>;
        },
      },
      {
        accessorKey: "availability",
        header: "Availability",
        cell: ({ getValue }) => {
          const isAvailable = getValue();
          return <div>{String (isAvailable)}</div>;
        },
      },
      
    ];
  }, []);

  if (isLoading) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      <DataTable columns={columns} data={data?.data?.response ?? []} />
    </div>
  );
};

export default BookDashboard;
