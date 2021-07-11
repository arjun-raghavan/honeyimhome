import React from 'react';
import CardMedia from '@material-ui/core/CardMedia';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';

import CursiveHeading from '../cursiveHeading';

export default function RecipeReviewCard(props) {
  const { title, subTitle, description, imageSrc, imageAltText } = props.data;

  const CardImage = () => (
    <CardMedia
      component='img'
      alt={imageAltText}
      image={imageSrc}
      // style={{
      //   paddingBottom: '56.25%' /* 16:9 */,
      //   paddingTop: 25,
      //   width: '100%',
      // }}
    />
  );

  return (
    <Box display='flex' justifyContent='center' alignItems='center'>
      <Box
        display='flex'
        flexDirection='column'
        justifyContent='center'
        alignItems='center'
        textAlign='center'
        flex={1}
        padding={1}
      >
        <CursiveHeading content={title} showDivider />
        <Box display={{ xs: 'none', lg: 'block' }}>
          <CardImage />
        </Box>
        <Typography variant='h6' fontWeight='fontWeightBold' gutterBottom>
          {subTitle}
        </Typography>
        <Typography variant='body1'>{description}</Typography>
      </Box>
      <Box display={{ md: 'block', lg: 'none' }} width='100%' flex={1}>
        <CardImage />
      </Box>
    </Box>
  );
}
