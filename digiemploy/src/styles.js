import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  container: {
    backgroundColor: theme.palette.background.paper,
    padding: theme.spacing(8, 0, 10),
  },
  navigationBar: {
    display: "flex",
    justifyContent: "space-around",
  },
  sectionone: {
    display: "flex",
  },
  sectiontwo: {
    display: "flex",
    gap: "10px",
  },
  icons: {
    marginRight: "11px",
  },
  icon: {
    marginRight: "15px",
  },
  cardGrid: { padding: "28px 0", marginBottom: "5rem" },
  card: { height: "100%", display: "flex", flexDirection: "column" },
  cardMedia: { paddingTop: "56.25%" },
  cardContent: {
    flexGrow: "1",
    textAlign: "center",
  },
  jobtitle: { color: "#1b3764", marginBottom: "2rem" },
  jobdetails: { textAlign: "left" },
  footer: {
    backgroundColor: theme.palette.background.paper,
    padding: "5px 0",
  },
  buttonGrid: {
    color: "#1b3764",
    marginLeft: "3.8rem",
  },
  jobdetail: {
    borderTop: "2px solid black",
    paddingTop: "11px",
  },
}));
export default useStyles;
