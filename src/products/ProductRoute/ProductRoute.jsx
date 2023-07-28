import { useParams } from "react-router-dom";
import { useProducts } from "../../hooks";
import {
  Alert,
  AlertTitle,
  Button,
  LinearProgress,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableRow,
  Typography,
} from "@mui/material";
import Page from "../../ds/Pages/";
import { Edit, Favorite, FavoriteBorder } from "@mui/icons-material";
import { Box } from "@mui/system";
import { Price } from "../../ds/atoms";
import ProductCondition from "../ProductCondition/";
import CustomFavouritesContext from "./../../contexts/";

const defaultRenderCell = ({ value }) => value;

export default function ProductRoute() {
  let { id } = useParams();
  const { favourites, toggleFavourites } = CustomFavouritesContext.useContext();

  const { isLoading, products: product } = useProducts({ id });

  const isFav = favourites.includes(id);

  if (isLoading) return <LinearProgress />;

  const productProperties = [
    { name: "Nom", value: product.name },
    { name: "Prix", value: product.price, type: "number", renderCell: Price },
    {
      name: "Condition",
      value: product.condition == "used",
      renderCell: ProductCondition,
    },
    { name: "Stock", value: product.stock, type: "number" },
  ];

  return (
    <Page title={`Product: ${product.name}`}>
      <Alert severity="success">
        <AlertTitle>Votre fiche produit a été enrichie avec succées</AlertTitle>
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Consequatur
        voluptatibus vel inventore earum, dignissimos voluptate consectetur
        officia saepe impedit, cupiditate doloribus aliquam dolorem minus error.
        Beatae quia excepturi tempora accusantium.
      </Alert>
      <Box sx={{ display: "flex", justifyContent: "flex-end", gap: 1, my: 2 }}>
        <Button
          variant="outlined"
          startIcon={isFav ? <Favorite /> : <FavoriteBorder />}
          onClick={() => toggleFavourites({ id })}
        >
          {isFav ? "Retirer des favoris" : "Ajouter aux favoris"}
        </Button>

        <Button startIcon={<Edit />}>Editer</Button>
      </Box>

      <Box component="article" sx={{ display: "flex", gap: 2 }}>
        <img src={product.imageUrl} alt={product.name} width="300" />
        <TableContainer>
          <Typography variant="h6">Propriétés</Typography>
          <Table sx={{ minWidth: 650 }} aria-label="Fiche produit">
            <TableBody>
              {productProperties.map(
                ({ name, value, type, renderCell = defaultRenderCell }) => (
                  <TableRow
                    key={name}
                    sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
                  >
                    <TableCell component="th" scope="row">
                      {name}
                    </TableCell>
                    <TableCell
                      align={type === "number" ? "right" : "left"}
                      sx={{ fontWeight: "bold" }}
                    >
                      {renderCell({ value })}
                    </TableCell>
                  </TableRow>
                )
              )}
            </TableBody>
          </Table>
        </TableContainer>
      </Box>
    </Page>
  );
}
