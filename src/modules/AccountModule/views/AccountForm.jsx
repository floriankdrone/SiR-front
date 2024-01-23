import { useForm } from "react-hook-form";
import * as React from "react";
import Avatar from "@mui/material/Avatar";
import Button from "@mui/material/Button";
import CssBaseline from "@mui/material/CssBaseline";
import TextField from "@mui/material/TextField";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import { AccountCircle } from "@mui/icons-material";

const AccountForm = ({ handleSave, defaultData }) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  return (
    <Container component="main" maxWidth="xs">
      <CssBaseline />
      <Box
        sx={{
          marginTop: 8,
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
        }}
      >
        <Avatar sx={{ m: 1, bgcolor: "secondary.main" }}>
          <AccountCircle />
        </Avatar>
        <Typography component="h1" variant="h5">
          Set Up Your Account
        </Typography>
        <Box
          component="form"
          noValidate
          onSubmit={handleSubmit((formData) => handleSave(formData))}
          sx={{ mt: 3 }}
        >
          <Grid container spacing={2}>
            <Grid item xs={12}>
              <TextField
                error={!!errors?.username}
                fullWidth
                id="username"
                label="Username"
                name="username"
                value={defaultData.username}
                autoComplete="username"
                helperText={errors?.username?.message}
                focused
                {...register("username", {
                  required: "This field is required",
                  minLength: 3,
                  maxLength: 50,
                })}
              />
            </Grid>
          </Grid>
          <Button
            type="submit"
            fullWidth
            variant="contained"
            sx={{ mt: 3, mb: 2 }}
          >
            Save
          </Button>
        </Box>
      </Box>
    </Container>
  );
};

export default AccountForm;
