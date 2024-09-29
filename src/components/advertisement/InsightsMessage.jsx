const InsightsMessage = ({ period }) => {
  return (
    <p className="text-xs 2xl:text-base text-gray-400 pt-1 w-[60%]">
      You reached <span className="text-green-500 font-semibold">+12.66%</span>{" "}
      more users compared to last {period}
    </p>
  );
};

export default InsightsMessage;
