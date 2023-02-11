import { Hero } from "../../container/hero";

import { Box } from "@mui/system";
import { FeaturedPurodcts } from "../../container/featuredPurodcts";
import { SportsTypes } from "../../container/sportsTypes";
import { Sellek } from "../../container/sellek";

export const Footwear = () => {
  return (
    <Box>
      <Hero />
      <FeaturedPurodcts />
      <SportsTypes />
      <Sellek />
    </Box>
  );
};
