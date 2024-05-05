import {
    Box,
    TextField,
    CardMedia,
    Card,
    Paper,
    CardContent,
    Typography, Button,
  } from "@mui/material";
function JobCard() {
  return (
    <Card sx={{ maxWidth: "360px" }}>
      <Paper elevation={3} rounded>
        <CardContent>
          <Box sx={{ display: "flex", columnGap: "8px" }}>
            <Box>
              <img
                src="https://storage.googleapis.com/weekday-assets/airtableAttachment_1714542815382_7w5g1.jpg"
                alt="companyPhoto"
                width={"24px"}
                height={"40px"}
              />
            </Box>
            <Box
              sx={{
                display: "flex",
                flexDirection: "column",
                rowGap: "8px",
              }}
            >
              <div>FlexWash Technologies</div>
              <div>Senior Engineer</div>
              <div>India | Exp : 5.5years</div>
            </Box>
          </Box>
          <Typography>Estimated Salary : $ 20 - 40 LPA ✅</Typography>
          <div>About Company :</div>
          <div>This is a sample text</div>
          <div>Minimum Experience</div>
          <div>5 years</div>
          <Box>
            <Button className="applyBtn">⚡ Easy Apply</Button>
          </Box>
        </CardContent>
      </Paper>
    </Card>
  );
}

export default JobCard;
