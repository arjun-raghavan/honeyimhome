import React from "react";

import FullWidthContainer from "./fullWidthContainer";
import theme from "../../theme";
import Container from "@material-ui/core/Container";
import YouTubePlayer from "./youTubePlayer";

const secondSectionData = {
    heading: "Featured Video",
    title: "Grilled Zucchini With Big Beans, Kale &amp; Mustard Vinaigrette",
    description:
      "Bean salads often get a bad reputation. This tangy, refreshing, lightning-fast recipe will change that forever.",
    buttonTitle: "Get the Recipe",
    buttonLink: "./recipes",
    youTubeId: "k1F9qTSEods",
    allRecipesLink: 'https://www.youtube.com/channel/UC1b2d9J4rKEaBXk8UYMB9ew/videos',
    allRecipesContent: 'See All Videos >'
  };

export default function SecondSection() {

  return (
    <FullWidthContainer
      style={{
        backgroundColor: theme.palette.background.tertiary,
      }}
    >
      <Container maxWidth="lg">
          <YouTubePlayer recipeData={secondSectionData} />
      </Container>
    </FullWidthContainer>
  );
}
