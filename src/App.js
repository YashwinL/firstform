import React, { useState } from "react";
import Container from "@material-ui/core/Container";
import TextField from "@material-ui/core/TextField";
import { makeStyles } from "@material-ui/core/styles";
import Button from "@material-ui/core/Button";
import IconButton from "@material-ui/core/IconButton";
import RemoveIcon from "@material-ui/icons/Remove";
import AddIcon from "@material-ui/icons/Add";
import Icon from "@material-ui/core/Icon";

const useStyles = makeStyles((theme) => ({
  root: {
    "& .MuiTextField-root": {
      margin: theme.spacing(1),
    },
  },
  Button: {
    margin: theme.spacing(1),
  },
}));
function App() {
  const classes = useStyles();
  const [InputFields, setInputFields] = useState([
    { firstName: "", lastname: "" },
    { firstName: "", lastname: "" },
  ]);
  const handleChangeInput = (index, event) => {
    console.log(index, event.target.name);
    const values = [...InputFields];
    values[index][event.target.name] = event.target.value;
    setInputFields(values);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("InputFields", InputFields);
  };

  const handleAddFields = () => {
    setInputFields([...InputFields, { firstName: "", lastname: "" }]);
  };

  const handleRemoveFields = (index) => {
    const values = [...InputFields];
    values.splice(index, 1);
    setInputFields(values);
  };
  return (
    <Container>
      <h1>Add New Member</h1>
      <form className={classes.root} onSubmit={handleSubmit}>
        {InputFields.map((InputFields, index) => (
          <div key={InputFields.id}>
            <TextField
              name="firstname"
              label="First Name"
              variant="filled"
              value={InputFields.firstName}
              onChange={(event) => handleChangeInput(index, event)}
            />
            <TextField
              name="lastname"
              label="Last Name"
              variant="filled"
              value={InputFields.lastname}
              onChange={(event) => handleChangeInput(index, event)}
            />
            <IconButton onClick={() => handleRemoveFields(index)}>
              <RemoveIcon />
            </IconButton>
            <IconButton onClick={() => handleAddFields()}>
              <AddIcon />
            </IconButton>
          </div>
        ))}
        <Button
          className={classes.Button}
          variant="contained"
          color="primary"
          type="submit"
          endIcon={<Icon>send</Icon>}
          onClick={handleSubmit}
        >
          Send
        </Button>
      </form>
    </Container>
  );
}

export default App;

// const values = [...InputFields];
//     values[index][event.target.name] = event.target.value;
//     setInputFields(values);
