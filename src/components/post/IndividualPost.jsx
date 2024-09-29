import PostBody from "./PostBody";
import PostFooter from "./PostFooter";
import PostHeader from "./PostHeader";

const IndividualPost = ({ post, index }) => {
  return (
    <div className="p-2 2xl:py-3">
      <PostHeader
        user={post.user}
        location={post.location}
        user_has_bookmarked={post.user_has_bookmarked}
      />
      <PostBody randomId={index + 1} />
      <PostFooter
        likes={post.likes}
        caption={post.caption}
        comments={post.comments}
        user_has_liked={post.user_has_liked}
        index={index}
        createdTime={post.created_time}
      />
    </div>
  );
};

export default IndividualPost;
