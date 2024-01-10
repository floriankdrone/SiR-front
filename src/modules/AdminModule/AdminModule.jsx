import Avatar from "@mui/material/Avatar";
import Stack from "@mui/material/Stack";
import Table from "@mui/material/Table";
import Typography from "@mui/material/Typography";
import TableContainer from "@mui/material/TableContainer";
import TableRow from "@mui/material/TableRow";
import TableHead from "@mui/material/TableHead";
import TableCell from "@mui/material/TableCell";
import useAdminModuleController from "./useAdminModuleController";

function AdminModule() {
  const { users } = useAdminModuleController();

  return (
    <>
      <h1>Admin</h1>
      <TableContainer sx={{ overflow: "unset" }}>
        <Table sx={{ minWidth: 800 }}>
          <TableHead>
            <TableRow>
              <TableCell key="name" align="left">
                Name
              </TableCell>
              <TableCell key="numberOfPosts" align="left">
                Number Of Posts
              </TableCell>
              <TableCell key="totalDonations" align="left">
                Total Donations
              </TableCell>
              <TableCell key="status" align="left">
                Status
              </TableCell>
              <TableCell key="createdAt" align="left">
                Created At
              </TableCell>
              <TableCell key="updatedAt" align="left">
                Updated At
              </TableCell>
            </TableRow>
          </TableHead>
          {users?.map(
            ({
              name,
              numberOfPosts,
              createdAt,
              updatedAt,
              isDeleted,
              totalDonations,
            }) => (
              <TableRow hover tabIndex={-1}>
                <TableCell component="tr" scope="row" padding="none">
                  <Stack direction="row" alignItems="center" spacing={2}>
                    <Avatar
                      alt={name}
                      src="https://media.istockphoto.com/vectors/default-profile-picture-avatar-photo-placeholder-vector-illustration-vector-id1223671392?k=6&m=1223671392&s=170667a&w=0&h=zP3l7WJinOFaGb2i1F4g8IS2ylw0FlIaa6x3tP9sebU%3D"
                    />
                    <Typography variant="subtitle2" noWrap>
                      {name}
                    </Typography>
                  </Stack>
                </TableCell>
                <TableCell>{numberOfPosts}</TableCell>
                <TableCell>{totalDonations}</TableCell>
                <TableCell>{isDeleted ? "Deleted" : "Active"}</TableCell>
                <TableCell>{createdAt}</TableCell>
                <TableCell>{updatedAt}</TableCell>
              </TableRow>
            )
          )}
        </Table>
      </TableContainer>
    </>
  );
}

export default AdminModule;
