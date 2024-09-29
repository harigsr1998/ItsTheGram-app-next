import getData from "@/data/getDataWithoutAPI";

const ProfileCaption = async () => {
  const data = await getData();

  return (
    <p className="mt-3 shrink-0 grow-0 font-semibold sm:mt-4">
      {data[Math.floor(Math.random() * 10)].caption.text.slice(0, 100)}
    </p>
  );
};

export default ProfileCaption;
