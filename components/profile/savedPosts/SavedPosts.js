import PostCard from "@/components/postCard/PostCard";

const SavedPosts = () => {
  return (
    <div className="flex flex-col gap-y-8">
      <PostCard />
      <PostCard />
      <PostCard />
      <PostCard />
    </div>
  );
};

export default SavedPosts;
