import { useState } from "react";
import { Button, CardMedia, Rating, Switch, Typography } from "@mui/material";
import { Box } from "@mui/system";

import sellerDesktop from "../../assets/images/sellerDesktop.png";
import sellerTablet from "../../assets/images/sellerTablet.png";
import sellerMobile from "../../assets/images/sellerMobile.png";

export const Sellek = () => {
  const [checked, setChecked] = useState(true);

  const handleChange = (event) => {
    setChecked(event.target.checked);
  };

  return (
    <>
      <Box
        sx={{
          p: {
            xs: "0 20px 30px",
            sm: "0 20px 40px",
            md: "0 24px",
          },
          background: "#FFFFFF",
          overflow: "hidden",
        }}
      >
        <Box
          sx={{
            p: { xs: "30px 0 20px", sm: "40px 0 30px", md: "60px 0 40px" },
            display: "flex",
            justifyContent: { xs: "center", sm: "space-between" },
            alignItems: "center",
            flexDirection: { xs: "column", sm: "row" },
          }}
        >
          <Typography
            variant="h2"
            sx={{
              mb: { xs: "16px", sm: 0 },
              fontFamily: "Work Sans",
              fontWeight: 700,
              fontSize: { xs: "32px", sm: "36px", md: "48px" },
              lineHeight: { xs: "36px", sm: "45px", md: "56px" },
              color: "#0A083A",
            }}
          >
            Best seller this week
          </Typography>

          <Box
            sx={{
              mr: { xs: "0", sm: "10px" },
              display: "flex",
              alignItems: "center",
            }}
          >
            <Typography
              sx={{
                fontFamily: "Work Sans",
                fontWeight: 500,
                fontSize: { xs: "16px", sm: "18px" },
                lineHeight: { xs: "24px", sm: "32px" },
                color: "#0A083A",
              }}
            >
              Men
            </Typography>
            <Switch
              checked={checked}
              onChange={handleChange}
              inputProps={{ "aria-label": "controlled" }}
            />
            <Typography
              sx={{
                fontFamily: "Work Sans",
                fontWeight: 500,
                fontSize: { xs: "16px", sm: "18px" },
                lineHeight: { xs: "24px", sm: "32px" },
                color: "#0A083A",
              }}
            >
              Women
            </Typography>
          </Box>
        </Box>

        <Box
          sx={{
            display: "flex",
            justifyContent: { xs: "space-around", md: "space-evenly" },
            flexDirection: { xs: "column", sm: "row" },
            alignItems: { xs: "center", sm: "start" },
            textAlign: { xs: "center", sm: "start" },
          }}
        >
          <CardMedia
            image={sellerDesktop}
            sx={{
              m: {
                xs: "0 0 -81px -88px",
                md: "0 -30px -72px -148px",
                lg: "0 0 -105px -185px",
              },
              width: { xs: "600px", md: "709px", lg: "929px" },
              height: { xs: "400px", md: "420px", lg: "573px" },
              display: { xs: "none", md: "inline" },
            }}
            title="Photo krasovki"
          />

          <CardMedia
            image={sellerTablet}
            sx={{
              m: { xs: "0 0 -81px -30px", md: "0 0 -81px -72px" },
              width: "389px",
              height: "300px",
              display: { xs: "none", sm: "inline", md: "none" },
            }}
            title="Photo krasovki"
          />

          <CardMedia
            image={sellerMobile}
            sx={{
              m: "-10px 0 -40px",
              display: { xs: "block", sm: "none" },
              width: "400px",
              height: "280px",
            }}
            title="Photo krasovki"
          />

          <Box
            sx={{
              m: { xs: 0, sm: "0 -25px 0 -20px" },
              padding: {
                xs: 0,
                sm: "20px 0  0",
                md: "70px 10px 0  0",
                lg: "100px 10px 0  0",
              },
              maxWidth: { xs: "391px", sm: "220px", md: "291px" },
            }}
          >
            <Rating
              name="half-rating"
              defaultValue={5}
              precision={0.5}
              sx={{
                mb: "16px",
                display: "flex",
                justifyContent: { xs: "center", sm: "flex-start" },
              }}
            />

            <Typography
              sx={{
                mb: "20px",
                fontFamily: "Work Sans",
                fontWeight: 700,
                fontSize: { xs: "24px", sm: "20px", md: "24px" },
                lineHeight: { xs: "24px", md: "32px" },
                color: "#0A083A",
              }}
            >
              Adidas Falcon Shoes for women - 2021 Edition
            </Typography>

            <Typography
              sx={{
                mb: "32px",
                fontFamily: "Work Sans",
                fontWeight: 700,
                fontSize: "24px",
                lineHeight: "32px",
                color: "#0A083A",
              }}
            >
              $120.50
            </Typography>

            <Button
              variant="contained"
              sx={{
                textTransform: "capitalize",
                fontFamily: "Work Sans",
                background: "#315BFF",
              }}
            >
              Shop Now
            </Button>
          </Box>
        </Box>
      </Box>
    </>
  );
};
