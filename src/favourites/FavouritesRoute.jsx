import { DataGrid } from "@mui/x-data-grid";
import Page from "../ds/Pages";
import { productColumns } from "../products/productColumns";
import { Box } from "@mui/material";
import { useReducer } from "react";

export default function FavouritesRoute() {
  const [products] = useReducer(() => {}, []);

  return (
    <Page title="Mes favoris">
      <Box sx={{ height: "100%", width: "100%" }}>
        <DataGrid
          columns={productColumns}
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
          autoHeight
        />
      </Box>
    </Page>
  );
}
