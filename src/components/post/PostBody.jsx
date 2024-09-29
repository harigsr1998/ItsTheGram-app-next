import Image from "next/image";

const PostBody = ({ randomId }) => {
  return (
    <div className="py-[6px] 2xl:py-2">
      <Image
        src={`https://picsum.photos/544/319?random=${randomId}`}
        width={544}
        height={319}
        className="w-full rounded-lg 2xl:rounded-xl"
      />
    </div>
  );
};

export default PostBody;
