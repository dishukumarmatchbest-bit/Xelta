export default function text() {
  return (
    <section className="h-screen flex items-center justify-center bg-black">
        <h1
          className="transcend-text text-7xl md:text-9xl font-extrabold text-transparent bg-clip-text"
          style={{
            backgroundImage: "url('/banner/hero-image.png')", 
            backgroundSize: "cover",
            backgroundPosition: "center",
            WebkitBackgroundClip: "text",
            WebkitTextFillColor: "transparent",
          }}
        >
          Transcend
        </h1>
      </section>
  );
}
