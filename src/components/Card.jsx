export default function Card() {
  return (
    <>
      <div style={styledDiv}>
        <img
          style={styledImg}
          width="200px"
          height="250px"
          src="img/autos.png"
        ></img>
        <h2 style={styledTitle}>Autos y camionetas</h2>
        <p style={styledTitle}>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Eos, ad
          dolores nobis fugiat a illum nisi, iusto velit assumenda et,
          consequuntur quas modi unde maiores rem. Beatae, et? Fugit, placeat
        </p>
      </div>
      <div style={styledDiv}>
        <img style={styledImg} src="img/camiones.png"></img>
        <h2 style={styledTitle}>Camiones</h2>
        <p style={styledTitle}>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Eos, ad
          dolores nobis fugiat a illum nisi, iusto velit assumenda et,
          consequuntur quas modi unde maiores rem. Beatae, et? Fugit, placeat
        </p>
      </div>
      <div style={styledDiv}>
        <img style={styledImg} src="img/agricola.png"></img>
        <h2 style={styledTitle}>Agricola</h2>
        <p style={styledTitle}>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Eos, ad
          dolores nobis fugiat a illum nisi, iusto velit assumenda et,
          consequuntur quas modi unde maiores rem. Beatae, et? Fugit, placeat
        </p>
      </div>
    </>
  );
}

const styledImg = {
  objectFit: "cover",
  width: "100%",
  height: "300px",
  marginBottom: "0.5rem",
};

const styledDiv = {
  backgroundColor: "white",
  width: "400px",
  flexDirection: "column",
  justifyContent: "center",
  alignItems: "center",
  margin: "2rem 0.5rem",
  borderRadius: "0.3rem",
  padding: "1rem",
  boxShadow: "0px 20px 20px 0px rgba(0, 0, 0, 0.158)",
  transition: "all ease 0.5s",
  cursor: "pointer",
};

const styledTitle = {
  color: "black",
};
