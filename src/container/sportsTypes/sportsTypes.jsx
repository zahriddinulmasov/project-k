import { Button, CardMedia, Typography } from "@mui/material";
import { Box } from "@mui/system";

import Football from "../../assets/images/football.png";
import SportLeft from "../../assets/images/sportLeft.png";
import Volley from "../../assets/images/volley.png";
import SportRight from "../../assets/images/sportRight.png";

export const SportsTypes = () => {
  return (
    <>
      <Box sx={{ display: "flex", flexDirection: { xs: "column", sm: "row" } }}>
        <Box
          sx={{
            p: {
              xs: 0,
              sm: "10px 10px 50px 20px",
              md: "0 20px 0 24px",
            },
            maxWidth: "700px",
            width: "100%",
            background: "#02BE83",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            flexDirection: { xs: "column", sm: "row" },
            backgroundImage: `url(${SportLeft})`,
            backgroundSize: "500px 400px",
            backgroundRepeat: "no-repeat",
            overflow: "hidden",
          }}
        >
          <CardMedia
            image={Football}
            sx={{
              m: { xs: "15px 0 -8px ", sm: "0 -12px 0  -18px", md: "0" },
              width: { xs: "290px", sm: "170px" },
              height: { xs: "260px", sm: "170px" },
            }}
          />
          <Box
            sx={{
              mb: { xs: "50px", sm: 0 },
              maxWidth: { xs: "265px", sm: "180px", md: "265px" },
              textAlign: { xs: "center", sm: "start" },
            }}
          >
            <Typography
              variant="subtitle2"
              sx={{
                mb: { xs: "8px", sm: "4px", md: "8px" },
                fontFamily: "Work Sans",
                fontWeight: 500,
                fontSize: { xs: "16px", sm: "16px", md: "16px" },
                lineHeight: { xs: "17px", md: "24px" },
                color: "#0A083A",
              }}
            >
              Accesories
            </Typography>
            <Typography
              variant="h2"
              sx={{
                mb: { xs: "16px", sm: "8px", md: "16px" },
                fontFamily: "Work Sans",
                fontWeight: 700,
                fontSize: { xs: "40px", sm: "32px", md: "40px", lg: "48px" },
                lineHeight: { xs: "40px", md: "56px" },
                color: "#FFFFFF",
              }}
            >
              Football
            </Typography>
            <Typography
              variant="subtitle1"
              sx={{
                mb: { xs: "16px", sm: "8px", md: "16px" },
                fontFamily: "Work Sans",
                fontWeight: 500,
                fontSize: { xs: "14px", md: "15px", lg: "16px" },
                lineHeight: { xs: "17px", md: "24px" },
                color: "#FFFFFF",
              }}
            >
              We receive new sportwear every day. Just take your pick.
            </Typography>
            <Button
              style={{ background: "#0A083A" }}
              sx={{
                p: "6px 24px",
                fontFamily: "Work Sans",
                fontWeight: 500,
                fontSize: { xs: "16px", sm: "11px", md: "15px", lg: "16px" },
                lineHeight: { xs: "24px", sm: "17px", md: "24px" },
                color: "#FFFFFF",
              }}
            >
              Shop Now
            </Button>
          </Box>
        </Box>

        <Box
          sx={{
            p: {
              xs: "1 20px 50px 20px",
              sm: "0 20px 50px 10px",
              md: "0 24px 0 20px",
            },
            maxWidth: "700px",
            width: "100%",
            background: "#0A083A",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            flexDirection: { xs: "column", sm: "row" },
            backgroundImage: `url(${SportRight})`,
            backgroundRepeat: "no-repeat",
          }}
        >
          <CardMedia
            image={Volley}
            sx={{
              width: { xs: "290px", sm: "167px" },
              height: { xs: "260px", sm: "187px" },
              m: { xs: "60px 0 40px", sm: "0 -15px 0  -20px", md: 0 },
            }}
          />
          <Box
            sx={{
              mb: { xs: "50px", sm: "0" },
              maxWidth: { xs: "265px", sm: "180px", md: "265px" },
              textAlign: { xs: "center", sm: "start" },
            }}
          >
            <Typography
              variant="subtitle2"
              sx={{
                mb: { xs: "8px", sm: "4px", md: "8px" },
                fontFamily: "Work Sans",
                fontWeight: 500,
                fontSize: { xs: "16px", sm: "16px", md: "16px" },
                lineHeight: { xs: "17px", md: "24px" },
                color: "#02BE83",
              }}
            >
              Accesories
            </Typography>
            <Typography
              variant="h2"
              sx={{
                mb: { xs: "16px", sm: "8px", md: "16px" },
                fontFamily: "Work Sans",
                fontWeight: 700,
                fontSize: { xs: "40px", sm: "32px", md: "40px", lg: "48px" },
                lineHeight: { xs: "40px", md: "56px" },
                color: "#FFFFFF",
              }}
            >
              Volleyball
            </Typography>
            <Typography
              variant="subtitle1"
              sx={{
                mb: { xs: "16px", sm: "8px", md: "16px" },
                fontFamily: "Work Sans",
                fontWeight: 500,
                fontSize: { xs: "14px", md: "15px", ld: "16px" },
                lineHeight: { xs: "17px", md: "24px" },
                color: "#FFFFFF",
              }}
            >
              We receive new sportwear every day. Just take your pick.
            </Typography>
            <Button
              style={{ background: "#02BE83" }}
              sx={{
                p: "6px 24px",
                fontFamily: "Work Sans",
                fontWeight: 500,
                fontSize: { xs: "16px", sm: "11px", md: "15px", lg: "16px" },
                lineHeight: { xs: "24px", sm: "17px", md: "24px" },
                color: "#FFFFFF",
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
