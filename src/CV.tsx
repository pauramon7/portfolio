import { Box, Typography, IconButton, Avatar } from "@mui/material";
import { Brightness4, Brightness7 } from "@mui/icons-material";
import Section from "./components/Section";
import ExperienceCard from "./components/ExperienceCard";
import EducationCard from "./components/EducationCard";
import BadgeGroup from "./components/BadgeGroup";
import CertificationList from "./components/CertificationList";
import { useColorMode } from "./theme";

const CV = () => {
  const { toggleColorMode } = useColorMode();

  return (
    <Box
      sx={{
        maxWidth: "md",
        mx: "auto",
        p: 4,
      }}
    >
      <Box
        sx={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          mb: 3,
        }}
      >
        <Box
          sx={{
            display: "flex",
            alignItems: "center",
            gap: 2,
          }}
        >
          <Avatar
            alt="Pau"
            src="./public/images/profile.jpg"
            sx={{ width: 80, height: 80 }}
          />
          <Box>
            <Typography variant="h4" sx={{ fontWeight: "bold" }}>
              Pau Ramon Rodriguez
            </Typography>
            <Typography
              variant="subtitle1"
              sx={{
                color: "text.secondary",
                fontSize: "0.9rem",
              }}
            >
              Software Developer
            </Typography>
            <Typography
              variant="body2"
              sx={{ color: "text.secondary", fontSize: "0.8rem" }}
            >
              Rubi, Barcelona | pauramon7@gmail.com
            </Typography>
          </Box>
        </Box>
        <IconButton onClick={toggleColorMode}>
          <Brightness4 />
        </IconButton>
      </Box>

      <Section title="Work Experience">
        <ExperienceCard
          role="Software Developer Intern"
          company="Qualifyze"
          period="Oct 2024 - Present"
          description="Contributed to development in an agile team, ensuring code quality, performance, and design collaboration."
        />
        <ExperienceCard
          role="Intern"
          company="Socade Informática SL"
          period="Mar 2024 - Jul 2024"
          description="Improved documentation, automated tasks with Microsoft workspace, and led the redesign of the company website for better design."
        />
        <ExperienceCard
          role="Intern"
          company="Power PC"
          period="Apr 2022 - Jul 2022"
          description="Repaired and maintained hardware, managed inventory, led store in supervisor's absence, and resolved technical issues to ensure customer satisfaction"
        />
      </Section>

      <Section title="Education">
        <EducationCard
          degree="CFGS DAW (Development of Web Applications)"
          institution="Gimbernat Formació"
          period="2022 - 2024"
        />
        <EducationCard
          degree="CFGS SMX (Microcomputer Systems and Networks)"
          institution="Gimbernat Formació"
          period="2020 - 2022"
        />
      </Section>

      <Section title="Languages">
        <BadgeGroup
          items={[
            "Spanish (Fluent)",
            "Catalan (Fluent)",
            "English (B2)",
            "French (Basic)",
          ]}
        />
      </Section>

      <Section title="Certifications">
        <CertificationList
          certifications={[
            "First Certificate in English (B2) - Cambridge 2023",
          ]}
        />
      </Section>
    </Box>
  );
};

export default CV;
