const Title = ({ page }) => {
  return (
    <h1
      className={`logo font-extrabold ${
        page === "sidebar"
          ? "-mx-2 hidden pb-3 pt-3 text-center text-[39px] xl:block 2xl:-mx-4 2xl:text-5xl"
          : "text-xl"
      }`}
    >
      ItsTheGram
    </h1>
  );
};

export default Title;
