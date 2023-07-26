import { DataGrid } from "@mui/x-data-grid";
import Page from "../ds/Pages";
import { productColumns } from "../products/productColumns";
import { Box, LinearProgress } from "@mui/material";
import FavouritesContext from "../contexts";
import { useProductsByIds } from "../hooks";

export default function FavouritesRoute() {
  const { favourites } = FavouritesContext.useContext();
  const { isLoading, products } = useProductsByIds({
    ids: favourites,
  });

  if (isLoading) return <LinearProgress />;

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
