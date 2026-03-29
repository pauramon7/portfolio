import { Card, CardContent, Typography } from '@mui/material';

type EducationProps = {
  degree: string;
  institution: string;
  period: string;
};

const EducationCard = ({ degree, institution, period }: EducationProps) => (
  <Card sx={{ mb: 2 }}>
    <CardContent>
      <Typography variant="h6" sx={{ fontWeight: 'bold' }}>
        {degree}
      </Typography>
      <Typography variant="body2" sx={{ color: 'text.secondary' }}>
        {institution}, {period}
      </Typography>
    </CardContent>
  </Card>
);

export default EducationCard;
