import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { Box, IconButton, Rating } from "@mui/material";
import AddCircleIcon from "@mui/icons-material/AddCircle";

export const CardFeatured = (props) => {
  const propsCard = { ...props };

  return (
    <Card
      sx={{
        margin: { xs: "4px 4px 16px", sm: "4px 4px 10px" },
        maxWidth: { xs: 350, sm: 267, lg: 300 },
        boxShadow: "none",
      }}
    >
      <Box sx={{ textAlign: { xs: "center", sm: "left" } }}>
        <CardMedia
          component="img"
          image={propsCard.img}
          alt="Photo krasovki"
          sx={{ height: { xs: "180px", md: "140px", lg: "180px" } }}
        />

        <Box sx={{ mt: "-60px", display: "flex", flexDirection: "column" }}>
          <IconButton aria-label="delete" size="large" sx={{ padding: "0" }}>
            <AddCircleIcon
              sx={{
                color: "#8AA8F8",
                width: { xs: "50px", sm: "42px" },
                height: { xs: "42px", sm: "50px" },
              }}
            />
          </IconButton>

          <Rating
            name="half-rating"
            defaultValue={4}
            precision={0.5}
            sx={{
              p: "37px 16px 0",
              display: "flex",
              justifyContent: { xs: "center", sm: "flex-start" },
            }}
          />
        </Box>
        <CardContent>
          <Typography
            gutterBottom
            variant="h5"
            sx={{
              mb: "8px",
              fontFamily: "Work Sans",
              fontWeight: 500,
              fontSize: { xs: "16px", lg: "18px" },
              lineHeight: { xs: "24px", lg: "32px" },
              color: "#0A083A",
            }}
          >
            {propsCard.title}
          </Typography>
          <Typography
            variant="subtitle1"
            sx={{
              fontFamily: "Work Sans",
              fontWeight: 700,
              fontSize: "32px",
              lineHeight: "40px",
              color: "#0A083A",
            }}
          >
            {propsCard.price}
          </Typography>
        </CardContent>
      </Box>
    </Card>
  );
};
