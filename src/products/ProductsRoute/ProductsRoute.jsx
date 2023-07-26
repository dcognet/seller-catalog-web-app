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
import { useProducts, useSearch } from "../../hooks";
import ProductDescription from "../ProductDescription";
import Page from "./../../ds/Pages";
import { Search } from "@mui/icons-material";

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
  const [searchTerm, { onSearchChange, searchSubmit }] = useSearch();
  const { isLoading, products, refetch } = useProducts({ search: searchTerm });

  if (isLoading) return <LinearProgress />;

  return (
    <>
      <Page title="Gestion du catalog">
        <Box
          sx={{ ml: 21, py: 8 }}
          component="form"
          onSubmit={searchSubmit(refetch)}
        >
          <TextField
            value={searchTerm}
            onChange={onSearchChange}
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
            autoComplete="off"
          />
          <Button sx={{ ml: 1 }} onClick={searchSubmit(refetch)}>
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
