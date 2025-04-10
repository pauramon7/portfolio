import { Box, Card, CardContent, Typography } from "@mui/material";

const CertificationList = ({
  certifications,
}: {
  certifications: string[];
}) => (
  <Box>
    {certifications.map((certification, index) => (
      <Card key={index} sx={{ mb: 2 }}>
        <CardContent>
          <Typography variant="body2" sx={{ fontFamily: "cursive" }}>
            {certification}
          </Typography>
        </CardContent>
      </Card>
    ))}
  </Box>
);

export default CertificationList;
