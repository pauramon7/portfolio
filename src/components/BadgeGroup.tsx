import { Box, Chip } from "@mui/material";

const BadgeGroup = ({ items }: { items: string[] }) => (
  <Box display="flex" flexWrap="wrap" gap={1}>
    {items.map((item, index) => (
      <Chip key={index} label={item} sx={{ fontFamily: "cursive" }} />
    ))}
  </Box>
);

export default BadgeGroup;
