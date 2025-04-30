import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  resultImc: {
    marginTop: 20,
    paddingTop: 15,
    alignItems: "center",
    width: "100%",
  },
  numberImc: {
    fontSize: 48,
    color: "#ff0043",
    fontWeight: "bold",
  },
  info: {
    width: "100%",
    textAlign: "center",
    fontSize: 18,
    color: "#ff0043",
    fontWeight: "bold",
  },
  boxShareButton: {
    width: "40%",
  },
  shared: {
    borderColor: "red",
    borderWidth: 2,
    width: "100%",
    alignItems: "center",
    marginTop: 10,
    backgroundColor: "#1817f2",
    borderRadius: 50,
    paddingTop: 5,
    paddingBottom: 5,
  },
  sharedText: {
    borderColor: "red",
    borderWidth: 2,
    width: "100%",
    textAlign: "center",
    color: "#fff",
    fontWeight: "bold",
    paddingHorizontal: 40,
  },
});

export default styles;
