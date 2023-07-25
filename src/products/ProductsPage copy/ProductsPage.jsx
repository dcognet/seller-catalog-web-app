import { Box } from "@mui/system";
import { DataGrid } from "@mui/x-data-grid";
import ProductImage from "../ProductImage";
import ProductPrice from "../ProductPrice";
import ProductCondition from "../ProductCondition";
import { withRow } from "../../hoc";
import { LinearProgress } from "@mui/material";
import { useProducts } from "../../hooks";
import ProductDescription from "../ProductDescription";

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

export default function ProductsPage() {
  const { isLoading, products } = useProducts();

  if (isLoading) return <LinearProgress />;

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
