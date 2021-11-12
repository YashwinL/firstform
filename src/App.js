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
  ]);
  // const handleChangeInput = (index, event) => {
  //   const { name, value } = event.target;
  //   const values = [...InputFields];
  //   values[index][name] = value;
  //   setInputFields(values);
  // };
  const handleInputChange = (e, index) => {
    const { name, value } = e.target;
    const list = [...InputFields];
    list[index][name] = value;
    setInputFields(list);
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
        {InputFields.map((x, i) => (
          <div className="box">
            <TextField
              // name="firstname"
              // label="First Name"
              // variant="filled"
              // value={InputFields.firstName}
              // onChange={(event) => handleChangeInput(index, event)}
              name="firstName"
              placeholder="Enter First Name"
              variant="filled"
              value={x.firstName}
              onChange={(e) => handleInputChange(e, i)}
            />
            <TextField
              // name="lastname"
              // label="Last Name"
              // variant="filled"
              // value={InputFields.lastname}
              // onChange={(event) => handleChangeInput(index, event)}
              className="ml10"
              name="lastName"
              placeholder="Enter Last Name"
              variant="filled"
              value={x.lastName}
              onChange={(e) => handleInputChange(e, i)}
            />
            <IconButton onClick={() => handleAddFields()}>
              <AddIcon />
            </IconButton>
            {InputFields.length !== 1 && (
              <IconButton onClick={() => handleRemoveFields(i)}>
                <RemoveIcon />
              </IconButton>
            )}
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
