import TextField from "@mui/material/TextField";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import { useForm } from "react-hook-form";

const Form = ({ handlePostCreation }) => {
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitSuccessful },
    setValue,
  } = useForm();

  return (
    <Box
      component="form"
      sx={{
        position: "fixed",
        bottom: 0,
        left: 0,
        right: 0,
        backgroundColor: "white",
      }}
    >
      <Grid container spacing={0} style={{ paddingLeft: "10px" }}>
        <Grid item xs={10}>
          <TextField
            fullWidth
            margin="dense"
            id="outlined-basic"
            label="Content"
            variant="filled"
            multiline
            placeholder="Type something…"
            {...register("content", { required: true, maxLength: 10 })}
          />
        </Grid>
        <Grid item xs={2} style={{ alignSelf: "center" }}>
          <Button
            variant="contained"
            onClick={handleSubmit((formData) => {
              handlePostCreation(formData);
              setValue("content", "");
            })}
          >
            SayIt!
          </Button>
        </Grid>
      </Grid>
    </Box>
  );
};

export default Form;
