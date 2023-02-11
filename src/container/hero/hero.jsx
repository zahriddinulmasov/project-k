import { Button, CardMedia, IconButton, Typography } from "@mui/material";
import { Box } from "@mui/system";
import Checkbox from "@mui/material/Checkbox";
import FavoriteBorder from "@mui/icons-material/FavoriteBorder";
import Favorite from "@mui/icons-material/Favorite";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";
import RadioButtonUncheckedIcon from "@mui/icons-material/RadioButtonUnchecked";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";

import HeroDesktop from "../../assets/images/hero.png";
import HeroTablet from "../../assets/images/heroTablet.png";
import HeroMobile from "../../assets/images/heroMobile.png";

const label = { inputProps: { "aria-label": "Checkbox demo" } };

export const Hero = () => {
  return (
    <Box
      sx={{ background: "#F5F5F5", pb: { xs: "20px", sm: "40px", md: "60px" } }}
    >
      <Box
        sx={{
          padding: {
            xs: "0 20px",
            sm: "0 24px",
            md: "0 24px",
          },
          overflow: "hidden",
        }}
      >
        <Box
          sx={{
            display: { xs: "block", sm: "flex" },
            alignItems: "center",
            justifyContent: { xs: "none", sm: "space-between" },
          }}
        >
          <Box
            sx={{
              maxWidth: "600px",
              minWidth: "293px",
              width: "100%",
              paddingTop: { xs: "50px", sm: "70px", md: "100px" },
            }}
          >
            <Box>
              <Typography
                variant="h1"
                sx={{
                  mr: { xs: "0", sm: "-150px", md: "-180px" },
                  mb: { xs: "20px", sm: "28px" },
                  fontFamily: "Work Sans",
                  fontWeight: 700,
                  fontSize: { xs: "32px", sm: "48px", md: "58px", lg: "72px" },
                  lineHeight: { xs: "40px", sm: "60px", lg: "80px" },
                  color: "#0A083A",
                  textAlign: { xs: "center", sm: "left" },
                }}
              >
                Get your awesome sneakers
              </Typography>

              <Typography
                variant="body2"
                sx={{
                  mb: "28px",
                  maxWidth: { xs: "100%", sm: "429px" },
                  fontFamily: "Work Sans",
                  fontWeight: 500,
                  fontSize: { xs: "16px", sm: "20px" },
                  lineHeight: { xs: "21px", sm: "21px", lg: "32px" },
                  color: "#6C6B6B",
                  textAlign: { xs: "center", sm: "left" },
                }}
              >
                We offer the best deals in our shop. Check them out now. We have
                awesome stuff on sale for you.
              </Typography>
            </Box>

            <Box
              sx={{
                mb: "30px",
                display: "flex",
                justifyContent: { xs: "center", sm: "start" },
              }}
            >
              <Button
                variant="contained"
                sx={{
                  mr: { xs: "33px", lg: "48px" },
                  textTransform: "capitalize",
                  fontFamily: "Work Sans",
                  background: "#FF3C78",
                }}
              >
                Shop Now
              </Button>
              <Checkbox
                style={{ color: "#FF3C78" }}
                {...label}
                icon={<FavoriteBorder />}
                checkedIcon={<Favorite />}
              />
            </Box>

            <Box
              sx={{
                ml: "-12px",
                display: "flex",
                justifyContent: { xs: "center", sm: "flex-start" },
                flexDirection: { xs: "column", sm: "row" },
                alignItems: "center",
              }}
            >
              <Box
                sx={{
                  mr: { xs: "0", sm: "8px", md: "18px", lg: "48px" },
                  display: "flex",
                  alignItems: "center",
                }}
              >
                <Checkbox
                  defaultChecked
                  sx={{ mr: { xs: "4px", lg: "12px" } }}
                  icon={
                    <RadioButtonUncheckedIcon
                      sx={{ width: "35px", height: "35px", color: "#02BE83" }}
                    />
                  }
                  checkedIcon={
                    <CheckCircleIcon
                      sx={{ width: "35px", height: "35px", color: "#02BE83" }}
                    />
                  }
                />
                <Typography
                  variant="caption"
                  sx={{
                    fontFamily: "Work Sans",
                    fontWeight: 500,
                    fontSize: "16px",
                    lineHeight: "24px",
                    color: "#6C6B6B",
                  }}
                >
                  Free shipping
                </Typography>
              </Box>

              <Box sx={{ display: "flex", alignItems: "center" }}>
                <Checkbox
                  defaultChecked
                  sx={{ mr: { xs: "4px", lg: "12px" } }}
                  icon={
                    <RadioButtonUncheckedIcon
                      sx={{ width: "35px", height: "35px", color: "#02BE83" }}
                    />
                  }
                  checkedIcon={
                    <CheckCircleIcon
                      sx={{ width: "35px", height: "35px", color: "#02BE83" }}
                    />
                  }
                />
                <Typography
                  variant="caption"
                  sx={{
                    fontFamily: "Work Sans",
                    fontWeight: 500,
                    fontSize: "16px",
                    lineHeight: "24px",
                    color: "#6C6B6B",
                  }}
                >
                  Free returns .
                </Typography>
              </Box>
            </Box>
          </Box>

          <Box>
            <CardMedia
              component="img"
              image={HeroDesktop}
              sx={{
                ml: "-278px",
                display: { xs: "none", lg: "flex" },
                width: "800px",
                height: "600px",
                position: "relative",
                right: "-180px",
              }}
            />

            <CardMedia
              component="img"
              image={HeroTablet}
              sx={{
                ml: "-200px",
                display: { xs: "none", sm: "flex", lg: "none" },
                width: { xs: "450px", md: "600px" },
                height: "550px",
                position: "relative",
                right: "-30px",
                top: "30px",
              }}
            />

            <CardMedia
              component="img"
              image={HeroMobile}
              sx={{
                display: { xs: "inline", sm: "none", lg: "none" },
                mt: "-80px",
              }}
            />
          </Box>
        </Box>
      </Box>

      <Box textAlign="center" mt="-20px">
        <IconButton
          aria-label="fingerprint"
          sx={{
            mr: "20px",
            border: "2px solid #C1C0C0",
            "&:hover": { color: "blue", border: "2px solid blue" },
          }}
        >
          <ArrowBackIcon color="#C1C0C0" sx={{}} />
        </IconButton>

        <IconButton
          aria-label="fingerprint"
          sx={{
            border: "2px solid #C1C0C0",
            "&:hover": { color: "blue", border: "2px solid blue" },
          }}
        >
          <ArrowForwardIcon color="#C1C0C0" sx={{}} />
        </IconButton>
      </Box>
    </Box>
  );
};
