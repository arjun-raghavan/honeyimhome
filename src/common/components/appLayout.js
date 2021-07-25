import Box from "@material-ui/core/Box";
import Container from "@material-ui/core/Container";
import { makeStyles } from "@material-ui/core/styles";
import NewNav from "./navBar/newNav";
import SocialMedia from "./socialMedia";

const useStyles = makeStyles((theme) => ({
  footer: {
    display: "flex",
    justifyContent: "center",
    padding: "10px",
    background: theme.palette.background.secondary,
    width: "100vw",
    position: "relative",
    marginLeft: "-50vw",
    left: "50%",
  },
}));

export default function AppLayout(props) {
  const classes = useStyles();
  return (
    <>
      <NewNav/>
      <Container maxWidth="lg">{props.children}</Container>
      <div className={classes.footer}>@ 2021 Honey I'm Home</div>
    </>
  );
}
