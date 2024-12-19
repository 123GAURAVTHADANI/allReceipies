import Paper from "@mui/material/Paper";
import InputBase from "@mui/material/InputBase";
import Divider from "@mui/material/Divider";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";
import SearchIcon from "@mui/icons-material/Search";
import DirectionsIcon from "@mui/icons-material/Directions";
import { useDispatch } from "react-redux";
import { inputSearch } from "../../Action/action";
import { debounce } from "../../Utils/debounce";

function TextFieldComponent() {
  const dispatch = useDispatch();

  const handleOnChange = (e) => {
    dispatch(inputSearch(e.target.value));
    // dispatch(debouncedFnc());
    // debouncedFnc();
  };
  return (
    <Paper
      component="form"
      sx={{
        p: "2px 4px",
        display: "flex",
        alignItems: "center",
        width: 400,
      }}
    >
      <InputBase
        sx={{ ml: 1, flex: 1 }}
        placeholder="Find a Receipe or ingredient"
        inputProps={{ "aria-label": "Find a Receipe or ingredient" }}
        onChange={handleOnChange}
      />
      <IconButton type="button" sx={{ p: "10px" }} aria-label="search">
        <SearchIcon />
      </IconButton>
    </Paper>
  );
}
export default TextFieldComponent;
