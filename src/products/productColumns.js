import { withRow } from "../hoc";
import ProductActions from "../products/ProductActions/";
import ProductPrice from "../products/ProductPrice/";
import ProductCondition from "../products/ProductCondition/";
import ProductDescription from "../products/ProductDescription/";
import ProductImage from "../products/ProductImage/";

export const productColumns = [
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
  {
    field: "action",
    headerName: "Actions",
    sortable: false,
    renderCell: withRow(ProductActions),
  },
];
