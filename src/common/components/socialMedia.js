import Box from '@material-ui/core/Box';
import FacebookIcon from '@material-ui/icons/Facebook';
import InstagramIcon from '@material-ui/icons/Instagram';
import TwitterIcon from '@material-ui/icons/Twitter';
import PinterestIcon from '@material-ui/icons/Pinterest';
import YouTubeIcon from '@material-ui/icons/YouTube';
import Link from '@material-ui/core/Link';

export default function SocialMedia(props) {
  const MediaLink = (props) => {
    const { path, children } = props;
    return (
      <Link href={path} color='inherit' target='_blank' rel='noopener'>
        {children}
      </Link>
    );
  };

  return (
    <>
      <Box
        bgcolor='secondary.dark'
        color='primary.contrastText'
        display='flex'
        justifyContent='space-between'
        width='200px'
        mr={0}
        ml={'auto'}
        p={1}
      >
        <MediaLink path='https://www.facebook.com/'>
          <FacebookIcon />
        </MediaLink>
        <MediaLink path='https://www.instagram.com/'>
          <InstagramIcon />
        </MediaLink>
        <MediaLink path='https://twitter.com/?lang=en'>
          <TwitterIcon />
        </MediaLink>
        <MediaLink path='https://in.pinterest.com/'>
          <PinterestIcon />
        </MediaLink>
        <MediaLink path='https://www.youtube.com/'>
          <YouTubeIcon />
        </MediaLink>
      </Box>
    </>
  );
}
