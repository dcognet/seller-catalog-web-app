import { node } from "prop-types";
import { Box } from "@mui/system";

export default function LargeField({ children }) {
  return <Box sx={{ overflow: "hidden" }}>{children}</Box>;
}

LargeField.propTypes = {
  children: node,
};
