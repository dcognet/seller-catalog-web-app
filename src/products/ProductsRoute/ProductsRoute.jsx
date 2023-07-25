import { Box } from "@mui/system";
import { DataGrid } from "@mui/x-data-grid";
import ProductImage from "../ProductImage";
import ProductPrice from "../ProductPrice";
import ProductCondition from "../ProductCondition";
import { withRow } from "../../hoc";
import {
  Button,
  InputAdornment,
  LinearProgress,
  TextField,
} from "@mui/material";
import { useProducts } from "../../hooks";
import ProductDescription from "../ProductDescription";
import Page from "./../../ds/Pages";
import { Search } from "@mui/icons-material";
import { useState } from "react";
import { useSearchParams } from "react-router-dom";

const columns = [
  {
    field: "imageUrl",
    headerName: "Image",
    renderCell: withRow(ProductImage),
  },
  {
    field: "productDescription",
    headerName: "Produit",
    renderCell: withRow(ProductDescription),
    flex: 1,
  },
  {
    field: "condition",
    headerName: "Condition",
    renderCell: withRow(ProductCondition),
  },
  { field: "price", headerName: "Prix", renderCell: withRow(ProductPrice) },
  { field: "stock", headerName: "Stock", type: "number" },
];

export default function ProductsRoute() {
  const [searchParams, setSearchParams] = useSearchParams();

  const [search, setSearch] = useState(searchParams.get("q") || "");
  const { isLoading, products, refetch } = useProducts({ search });

  if (isLoading) return <LinearProgress />;

  return (
    <>
      <Page title="Gestion du catalog">
        <Box sx={{ ml: 21, py: 8 }}>
          <TextField
            value={search}
            onChange={(event) => setSearch(event.currentTarget.value)}
            id="input-with-icon-textfield"
            placeholder="Recherche par GTIN/SKU"
            InputProps={{
              startAdornment: (
                <InputAdornment position="start">
                  <Search />
                </InputAdornment>
              ),
            }}
            sx={{ width: 630 }}
            onKeyDown={(event) => {
              console.log(event.key);
              if (event.key == "Enter") {
                setSearchParams({ q: search });
                refetch();
              }
            }}
            autoComplete="off"
          />
          <Button
            sx={{ ml: 1 }}
            onClick={() => {
              setSearchParams({ q: search });
              refetch();
            }}
          >
            Rechercher
          </Button>
        </Box>
        <Box sx={{ height: "100%", width: "100%" }}>
          <DataGrid
            columns={columns}
            rows={products}
            initialState={{
              pagination: {
                paginationModel: {
                  pageSize: 15,
                },
              },
            }}
            pageSizeOptions={[15]}
            disableRowSelectionOnClick
          />
        </Box>
      </Page>
    </>
  );
}
