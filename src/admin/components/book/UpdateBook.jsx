import { useQuery } from "@tanstack/react-query";
import { useMemo } from "react";
import DataTable from "../DataTable";
import { getallBooks } from "../../../services/starWarsCharater";
import { useNavigate } from "react-router-dom";
import axiosInstance from "../../../../axiosInstance";

const UpdateBook = () => {
  const navigate = useNavigate();
  const { data, isLoading, refetch } = useQuery({
    queryKey: ["starWarsCharacters"],
    queryFn: () => getallBooks(),
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
          return <div>{String(isAvailable)}</div>;
        },
      },

      {
        accessorKey: "actions",
        header: "Edit User",
        cell: ({ row }) => {
          const bookId = row.original.bookId;

          const handleEdit = () => {
            // console.log("Edit clicked for ID:", bookId);
            navigate(`/admin/edit-book/${bookId}`);
          };

          return (
            <div>
              <button
                className="btn btn-primary"
                style={{ background: "#36c971" }}
                onClick={() => handleEdit(bookId)}
              >
                Update
              </button>
            </div>
          );
        },
      },

      {
        accessorKey: "actions",
        header: "Delete Book",
        cell: ({ row }) => {
          const bookId = row.original.bookId;

          const handleDelete = () => {
            console.log("Delete clicked for ID:", bookId);
            const confirmDelete = window.confirm(
              "Are you sure you want to delete this user?"
            );
            if (confirmDelete) {
              axiosInstance
                .delete(`/book/${bookId}`)
                .then(() => {
                  refetch();
                  console.log("Delete successful for ID:", bookId);
                  // window.confirm("Deleted Successfully....");
                  window.alert("Successfully deleted");
                })
                .catch((error) => {
                  console.error("Error deleting user:", error);
                  window.alert("Could not delete the data");
                });
            }
          };

          return (
            <div>
              <button
                className="btn btn-danger"
                style={{ background: "#fa5768" }}
                onClick={() => handleDelete(bookId)}
              >
                Delete
              </button>
            </div>
          );
        },
      },
    ];
  }, [navigate, refetch]);

  if (isLoading) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      <DataTable columns={columns} data={data?.data?.response ?? []} />
    </div>
  );
};

export default UpdateBook;
