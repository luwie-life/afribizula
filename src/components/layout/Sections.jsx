const Section = ({
  children,
  maxWidth = "1200px",
}) => {

  return (
    <section
      style={{
        width: "100%",

        padding:
          "6rem 1.5rem",

        display: "flex",

        justifyContent: "center",
      }}
    >

      <div
        style={{
          width: "100%",

          maxWidth,
        }}
      >
        {children}
      </div>

    </section>
  );
};

export default Section;