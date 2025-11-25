// ...existing code...
import { fetchPostBySearch } from "../../lib/query/post";
import PostList from "../topic/[slug]/posts/post-list";

type SearchPageProps = {
  searchParams: { term?: string } | Promise<{ term?: string }>;
};

const SearchPage = async ({ searchParams }: SearchPageProps) => {
  const resolved = await searchParams;
  const term = resolved?.term ?? "";

  return (
    <div>
      <h1 className="text-blue-600 font-medium italic">
        Search result for {term || "—"}
      </h1>
      <PostList fetchData={() => fetchPostBySearch(term)} />
    </div>
  );
};

export default SearchPage;
// ...existing code...
