import Card from "@/components/Card";
export default function Cards() {
  return (
    <div style={cardContainer}>
      <Card />
    </div>
  );
}

const cardContainer = {
  //backgroundColor: "red",
  display: "flex",
  alignItems: "center",
  flexDirection: "row",
  justifyContent: "center",
  width: "90vw",
  padding: "1rem",
  flexWrap: "nowrap",
  margin: "0 ",
};
