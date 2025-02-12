"use client";
import { Autocomplete, Box, Button, TextField } from "@mui/material";
import { API } from "@/utils/endpoints";
import { useEffect, useState } from "react";
import https from "@/utils/http";
import { getFilterConfig } from "@/redux/actions/common";
import { useDispatch } from "react-redux";
interface FilterConfig {
  categories: string[];
  sortBy: string[];
  orderDate: string[];
}

const Filter = () => {
  const dispatch = useDispatch();
  const [filterConfig, setFilterConfig] = useState<FilterConfig>({
    categories: [],
    sortBy: [],
    orderDate: [],
  });

  useEffect(() => {
    const fetchFilterConfig = async () => {
      try {
        const response = await https.get(API.COMMON.GET_FILTER_CONFIG);
        setFilterConfig(response.data);
      } catch (error) {
        console.error("Error fetching filter config:", error);
      }
    };

    fetchFilterConfig();
  }, []);

  console.log(filterConfig);
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
          options={filterConfig.categories || []}
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
          options={filterConfig.sortBy || []}
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
        <Autocomplete
          options={filterConfig.orderDate || []}
          sx={{ width: 300 }}
          renderInput={(params) => <TextField {...params} label="Order date" />}
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
