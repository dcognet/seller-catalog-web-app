import { Typography } from "@mui/material";
import { number, oneOf } from "prop-types";

const supportedCurrencies = ["EUR", "USD"];
const defaultCurrency = "USD";

export default function Price({ value, currency = "EUR" }) {
  const isoCurrency = supportedCurrencies.includes(currency)
    ? currency
    : defaultCurrency;

  const priceWithCurrency = new Intl.NumberFormat(window.navigator.language, {
    style: "currency",
    currency: isoCurrency,
  }).format(value);

  return <Typography component="span">{priceWithCurrency}</Typography>;
}

Price.propTypes = {
  value: number,
  currency: oneOf(supportedCurrencies),
};
