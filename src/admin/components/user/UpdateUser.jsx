import { useQuery } from "@tanstack/react-query";
import { useMemo } from "react";
import DataTable from "../DataTable";
import { getUsers } from "../../../services/starWarsCharater";
import { useNavigate } from "react-router-dom";
import axiosInstance from "../../../../axiosInstance";

const UpdateUser = () => {
  const navigate = useNavigate();
  const { data, isLoading, refetch } = useQuery({
    queryKey: ["starWarsCharacters"],
    queryFn: () => getUsers(),
  });

  const columns = useMemo(() => {
    return [
      {
        accessorKey: "userId",
        header: "User ID",
        cell: ({ getValue }) => {
          return <div>{getValue()}</div>;
        },
      },
      {
        accessorKey: "username",
        header: "Username",
        cell: ({ getValue }) => {
          return <div>{getValue()}</div>;
        },
      },
      {
        accessorKey: "email",
        header: "User Email",
        cell: ({ getValue }) => {
          return <div>{getValue()}</div>;
        },
      },

      {
        accessorKey: "role",
        header: "Role",
        cell: ({ getValue }) => {
          const isAvailable = getValue();
          return <div>{String(isAvailable)}</div>;
        },
      },

      {
        accessorKey: "actions",
        header: "Edit User",
        cell: ({ row }) => {
          const userId = row.original.userId;

          const handleEdit = () => {
            // console.log("Edit clicked for ID:", userId);
            navigate(`/admin/edit-user/${userId}`);
          };

          return (
            <div>
              <button
                className="btn btn-primary"
                style={{ background: "#36c971" }}
                onClick={() => handleEdit(userId)}
              >
                Update
              </button>
            </div>
          );
        },
      },

      {
        accessorKey: "actions",
        header: "Delete User",
        cell: ({ row }) => {
          const userId = row.original.userId;

          const handleDelete = () => {
            console.log("Delete clicked for ID:", userId);
            const confirmDelete = window.confirm(
              "Are you sure you want to delete this user?"
            );
            if (confirmDelete) {
              axiosInstance
                .delete(`/admin/user/${userId}`)
                .then(() => {
                  refetch();
                  console.log("Delete successful for ID:", userId);
                  // window.confirm("Deleted Successfully....");
                  window.alert("Successfully deleted");
                })
                .catch((error) => {
                  console.error("Error deleting user:", error);
                  window.alert("Could not delete the data");
                });
            }
          }

          return (
            <div>
              <button
                className="btn btn-danger"
                style={{ background: "#fa5768" }}
                onClick={() => handleDelete(userId)}
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

export default UpdateUser;
