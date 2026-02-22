import * as React from "react";
import { useTheme } from "@mui/material/styles";
import {
  FormControl,
  Select,
  MenuItem,
  OutlinedInput,
  Box,
} from "@mui/material";

const models = ["GPT-4o", "GPT-4 Turbo", "GPT-3.5"];

export default function ChatGPTStyleSelect() {
  const theme = useTheme();
  const [model, setModel] = React.useState("GPT-4o");

  const handleChange = (event) => {
    setModel(event.target.value);
  };

  return (
    <FormControl sx={{ width: 140 }}>
      <Select
        value={model}
        onChange={handleChange}
        input={<OutlinedInput />}
        sx={{
          backgroundColor: "#212121",
          color: "#fff",
          borderRadius: "8px",

          ".MuiOutlinedInput-notchedOutline": {
            border: "none",
          },
          "&:hover .MuiOutlinedInput-notchedOutline": {
            border: "none",
          },
          "&.Mui-focused .MuiOutlinedInput-notchedOutline": {
            border: "none",
          },
          "& .MuiSelect-icon": {
            color: "#ffffff",
          },

          "& .MuiSelect-select": {
            padding: "7.5px 11px",
            borderRadius: "4px",
            cursor: "pointer",
            userSelect: "none",
            WebkitUserSelect: "none",
            MozUserSelect: "none",
            MsUserSelect: "none",
          },

          "&:hover": {
            backgroundColor: "#3a3a3a",
          },
        }}
        MenuProps={{
          PaperProps: {
            sx: {
              backgroundColor: "#2a2a2a",
              color: "#fff",
              borderRadius: "12px",
              mt: 1,
            },
          },
        }}
      >
        {models.map((model) => (
          <MenuItem key={model} value={model}>
            {model}
          </MenuItem>
        ))}
      </Select>
    </FormControl>
  );
}
