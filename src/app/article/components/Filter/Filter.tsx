"use client";
import { FilterConfig, FilterData } from "@/types/common";
import { Autocomplete, Box, Button, TextField } from "@mui/material";

interface FilterProps {
  filterData: FilterData;
  filterConfig: FilterConfig;
  setFilterConfig: (filterConfig: FilterConfig) => void;
}

const Filter = ({ filterData, filterConfig, setFilterConfig }: FilterProps) => {
  console.log(filterData);
  return (
    <Box
      sx={{
        display: "flex",
        flexWrap: "wrap",
      }}
    >
      <Box
        sx={{
          marginRight: {
            lg: 3,
          },
          marginBottom: {
            xs: 2,
          },
        }}
      >
        <Autocomplete
          onChange={(event, value) => {
            setFilterConfig({
              ...filterConfig,
              category: value || "",
            });
          }}
          options={filterData.categories || []}
          sx={{ width: 300 }}
          renderInput={(params) => <TextField {...params} label="Category" />}
        />
      </Box>
      <Box
        sx={{
          marginRight: {
            lg: 3,
          },
          marginBottom: {
            xs: 2,
          },
        }}
      >
        <Autocomplete
          onChange={(event, value) => {
            setFilterConfig({
              ...filterConfig,
              sort_by: value || "",
            });
          }}
          options={filterData.sortBy || []}
          sx={{ width: 300 }}
          renderInput={(params) => <TextField {...params} label="Sort by" />}
        />
      </Box>
      <Box
        sx={{
          marginRight: {
            lg: 3,
          },
          marginBottom: {
            xs: 2,
          },
        }}
      >
        <Button>Reset all</Button>
      </Box>
    </Box>
  );
};

export default Filter;
