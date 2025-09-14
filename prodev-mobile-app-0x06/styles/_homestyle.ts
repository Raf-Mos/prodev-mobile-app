import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#f5f5f5",
  },
  searchGroup: {
    backgroundColor: "white",
    padding: 16,
    paddingTop: 50,
  },
  searchFormGroup: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#f8f8f8",
    borderRadius: 30,
    padding: 4,
  },
  searchControlGroup: {
    flex: 1,
    paddingHorizontal: 16,
  },
  searchFormText: {
    fontSize: 16,
    color: "#333",
  },
  searchControl: {
    fontSize: 14,
    color: "#666",
    marginTop: 4,
  },
  searchButton: {
    backgroundColor: "#34967C",
    width: 40,
    height: 40,
    borderRadius: 20,
    alignItems: "center",
    justifyContent: "center",
  },
  filterGroup: {
    flexDirection: "row",
    paddingHorizontal: 16,
    alignItems: "center",
    gap: 20,
  },
  filterContainer: {
    alignItems: "center",
    justifyContent: "center",
    width: 60,
    height: 60,
    gap: 4,
  },
  listingContainer: {
    flex: 1,
    paddingHorizontal: 16,
    paddingTop: 16,
  },
  paginationContainer: {
    paddingVertical: 20,
    alignItems: "center",
  },
  showMoreButton: {
    backgroundColor: "#34967C",
    paddingHorizontal: 30,
    paddingVertical: 12,
    borderRadius: 25,
  },
  showMoreButtonText: {
    color: "white",
    fontSize: 16,
    fontWeight: "500",
  },
});

export { styles };