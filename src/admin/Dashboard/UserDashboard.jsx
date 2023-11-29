import { useQuery } from "@tanstack/react-query";
import { useMemo } from "react";
import DataTable from "../components/DataTable";
import { getUsers } from "../../services/starWarsCharater";

const UserDashboard = () => {
  const { data, isLoading } = useQuery({
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

export default UserDashboard;
