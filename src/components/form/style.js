import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  formContext: {
    // flex: 1,
    height: "100%",
    backgroundColor: "#fff",
    // alignItems: "center",
    paddingTop: 30,
    borderTopLeftRadius: 30,
    borderTopRightRadius: 30,
  },
  form: {
    width: "100%",
  },
  formLabel: {
    color: "#000",
    fontSize: 18,
    paddingLeft: 20,
  },
  input: {
    width: "90%",
    borderRadius: 50,
    backgroundColor: "#f6f6f6",
    height: 40,
    margin: 12,
    paddingLeft: 10,
  },
  buttonCalculador: {
    borderRadius: 50,
    // alignItems: "center",
    justifyContent: "center",
    width: "90%",
    backgroundColor: "#ff0043",
    paddingTop: 14,
    paddingBottom: 14,
    marginLeft: 12,
    margin: 30,
  },
  textButtonCalculator: {
    fontSize: 20,
    color: "#fff",
    width: "100%",
    textAlign: "center",
    paddingHorizontal: 40,
  },
  errorMessage: {
    fontSize: 12,
    color: "red",
    fontWeight: "bold",
    paddingLeft: 20,
  },
  exhibitonResultImc: {
    width: "100%",
    overflow: "visible",
  },
});

export default styles;
