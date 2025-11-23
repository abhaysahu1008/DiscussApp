import React from "react";
import PostList from "../topic/[slug]/posts/post-list";
import { fetchPostBySearch } from "../../lib/query/post";

type SearchPageProps = {
  searchParams: { term?: string };
};

const SearchPage: React.FC<SearchPageProps> = ({ searchParams }) => {
  const term = searchParams?.term ?? "";

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
