import { Box, Link, Typography } from "@mui/material";

import ChevronRightIcon from "@mui/icons-material/ChevronRight";
import { CardFeatured } from "../../components/cardFeatured";

import Featured1 from "../../assets/images/featured1.png";
import Featured2 from "../../assets/images/featured2.png";
import Featured3 from "../../assets/images/featured3.png";
import Featured4 from "../../assets/images/featured4.png";

export const FeaturedPurodcts = () => {
  return (
    <Box
      sx={{
        padding: {
          xs: "0 20px 40px",
          sm: "0 24px 35px",
          md: "0 24px 50px",
        },
        background: "#FFFFFF",
      }}
    >
      <Box
        sx={{
          padding: { xs: "40px 0 20px", sm: "45px 0 25px", md: "60px 0 30px" },
          display: "flex",
          justifyContent: { xs: "center", sm: "space-between" },
        }}
      >
        <Typography
          variant="h4"
          sx={{
            fontFamily: "Work Sans",
            fontWeight: 700,
            fontSize: { xs: "32px", sm: "40px", md: "48px" },
            lineHeight: { xs: "36px", sm: "45px", md: "56px" },
            color: "#0A083A",
          }}
        >
          Featured products
        </Typography>

        <Link
          href="#"
          underline="none"
          sx={{
            display: { xs: "none", sm: "flex" },
            alignItems: "center",
            fontFamily: "Work Sans",
            fontWeight: 600,
            fontSize: { xs: "14px", sm: "18px", md: "20px" },
            lineHeight: { xs: "23px", sm: "29px", md: "32px" },
            color: "#FF3C78",
          }}
        >
          View all
          <ChevronRightIcon sx={{ ml: "8px" }} />
        </Link>
      </Box>
      <Box
        sx={{
          display: "flex",
          justifyContent: "space-between",
          flexWrap: { xs: "wrap", md: "nowrap" },
          width: "100%",
        }}
      >
        <Box
          sx={{
            display: "flex",
            justifyContent: { xs: "center", sm: "space-around" },
            flexDirection: { xs: "column", sm: "row" },
            alignItems: "center",
            width: "100%",
          }}
        >
          <CardFeatured
            img={Featured1}
            title="Adidas Falcon Shoes for men - 2021 Edition"
            price="$120.50"
          />

          <CardFeatured
            img={Featured2}
            title="Adidas Falcon Shoes for men - 2021 Edition"
            price="$160.99"
          />
        </Box>

        <Box
          sx={{
            display: "flex",
            justifyContent: { xs: "center", sm: "space-around" },
            flexDirection: { xs: "column", sm: "row" },
            alignItems: "center",
            width: "100%",
          }}
        >
          <CardFeatured
            img={Featured3}
            title="Adidas Falcon Shoes for men - 2021 Edition"
            price="$230.50"
          />

          <CardFeatured
            img={Featured4}
            title="Adidas Falcon Shoes for men - 2021 Edition"
            price="$420.00"
          />
        </Box>

        <Link
          href="#"
          underline="none"
          sx={{
            display: { xs: "flex", sm: "none" },
            alignItems: "center",
            justifyContent: "center",
            width: "100%",
            fontFamily: "Work Sans",
            fontWeight: 600,
            fontSize: { xs: "14px", sm: "18px", md: "20px" },
            lineHeight: { xs: "23px", sm: "29px", md: "32px" },
            color: "#FF3C78",
          }}
        >
          View all
          <ChevronRightIcon sx={{ ml: "8px" }} />
        </Link>
      </Box>
    </Box>
  );
};
