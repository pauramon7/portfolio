import { Card, CardContent, Typography } from "@mui/material";

type EducationProps = {
  degree: string;
  institution: string;
  period: string;
};

const EducationCard = ({ degree, institution, period }: EducationProps) => (
  <Card sx={{ mb: 2 }}>
    <CardContent sx={{ fontFamily: "cursive" }}>
      <Typography variant="h6" sx={{ fontFamily: "inherit" }}>
        {degree}
      </Typography>
      <Typography
        variant="body2"
        sx={{ fontFamily: "inherit", color: "text.secondary" }}
      >
        {institution}, {period}
      </Typography>
    </CardContent>
  </Card>
);

export default EducationCard;
