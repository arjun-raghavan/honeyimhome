import Box from '@material-ui/core/Box';
import FacebookIcon from '@material-ui/icons/Facebook';
import InstagramIcon from '@material-ui/icons/Instagram';
import TwitterIcon from '@material-ui/icons/Twitter';
import PinterestIcon from '@material-ui/icons/Pinterest';
import YouTubeIcon from '@material-ui/icons/YouTube';
import Link from '@material-ui/core/Link';

const MediaLink = (props) => {
  const { path, children } = props;
  return (
    <Link href={path} color='inherit' target='_blank' rel='noopener'>
      {children}
    </Link>
  );
};

export const Facebook = () => {
  return (
    <MediaLink path='https://www.facebook.com/'>
      <FacebookIcon />
    </MediaLink>
  );
};

export const Instagram = () => {
  return (
    <MediaLink path='https://www.instagram.com/'>
      <InstagramIcon />
    </MediaLink>
  );
};
export const Twitter = () => {
  return (
    <MediaLink path='https://twitter.com/?lang=en'>
      <TwitterIcon />
    </MediaLink>
  );
};
export const Pinterest = () => {
  return (
    <MediaLink path='https://in.pinterest.com/'>
      <PinterestIcon />
    </MediaLink>
  );
};
export const YouTubeLink = () => {
  return (
    <MediaLink path='https://www.YouTube.com/'>
      <YouTubeIcon />
    </MediaLink>
  );
};
export default function SocialMedia(props) {
  return (
    <>
      <Box
        bgcolor='secondary.dark'
        color='primary.contrastText'
        display='flex'
        justifyContent='space-between'
        width='200px'
        mr={0}
        mt={0.5}
        mb={0.5}
        ml={'auto'}
        padding="7px"
      >
        <Facebook />
        <Instagram />
        <Twitter />
        <Pinterest />
        <YouTubeLink />
      </Box>
    </>
  );
}
