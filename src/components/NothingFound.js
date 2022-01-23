import Hero from "./Hero";

const NothingFound = () => {
  return (
    <>
      <Hero text="404" />
      <h1 className="text-center shadow m-4 p-3">Nothing found</h1>
    </>
  );
};

export default NothingFound;
