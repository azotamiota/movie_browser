import Hero from "./Hero";

const NothingFound = () => {
  return (
    <>
      <Hero text="404" />
      <div className="container">
        <h1 className="m-5 text-center">
          Nothing <span className="badge bg-secondary">Found</span>
        </h1>
      </div>
    </>
  );
};

export default NothingFound;
