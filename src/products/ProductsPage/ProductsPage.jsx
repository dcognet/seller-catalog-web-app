import { Box } from "@mui/system";
import { DataGrid } from "@mui/x-data-grid";
import ProductImage from "../ProductImage";
import ProductPrice from "../ProductPrice/";
import ProductCondition from "./../ProductCondition/";
import { withRow } from "../../hoc";
import { CircularProgress, Backdrop } from "@mui/material";
import { useProducts } from "../../hooks";

const columns = [
  {
    field: "imageUrl",
    headerName: "Image",
    renderCell: withRow(ProductImage),
  },
  {
    field: "productDescription",
    headerName: "Produit",
    valueGetter: ({ row }) => `${row.name} ${row.description}`,
  },
  {
    field: "condition",
    headerName: "Condition",
    renderCell: withRow(ProductCondition),
  },
  { field: "price", headerName: "Prix", renderCell: withRow(ProductPrice) },
  { field: "stock", headerName: "Stock", type: "number" },
];

export default function ProductsPage() {
  const { isLoading, products } = useProducts();

  if (isLoading) {
    return (
      <Backdrop
        sx={{ color: "#fff", zIndex: (theme) => theme.zIndex.drawer + 1 }}
        open={true}
      >
        <CircularProgress color="inherit" />
      </Backdrop>
    );
  }

  return (
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
  );
}
