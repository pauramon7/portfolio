import { PropsWithChildren } from "react";
import { Box, Divider, Typography } from "@mui/material";

const Section = ({ title, children }: PropsWithChildren<{ title: string }>) => (
  <Box mb={6}>
    <Typography
      variant="h5"
      gutterBottom
      sx={{ fontFamily: "cursive", fontWeight: "bold" }}
    >
      {title}
    </Typography>
    <Divider sx={{ mb: 2 }} />
    {children}
  </Box>
);

export default Section;
