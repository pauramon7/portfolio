import { Card, CardContent, Typography } from "@mui/material";

type ExperienceProps = {
  role: string;
  company: string;
  period: string;
  description: string;
};

const ExperienceCard = ({
  role,
  company,
  period,
  description,
}: ExperienceProps) => (
  <Card sx={{ mb: 2 }}>
    <CardContent sx={{ fontFamily: "cursive" }}>
      <Typography
        variant="h6"
        sx={{ fontSize: "1.1rem", fontWeight: "bold", fontFamily: "inherit" }}
      >
        {role} - {company}
      </Typography>
      <Typography
        variant="body2"
        sx={{
          fontSize: "1rem",
          color: "text.secondary",
          fontFamily: "inherit",
        }}
      >
        {period}
      </Typography>
      <Typography
        variant="body2"
        sx={{ mt: 1, fontSize: "0.9rem", fontFamily: "inherit" }}
      >
        {description}
      </Typography>
    </CardContent>
  </Card>
);

export default ExperienceCard;
