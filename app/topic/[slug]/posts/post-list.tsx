import React from 'react'
import { Card, CardDescription, CardHeader, CardTitle } from '../../../../components/ui/card'
import { PostWithData } from '../../../../lib/query/post'
import Link from 'next/link'

type PostListProps = {
  fetchData: () => Promise<PostWithData[]>;
  slug?: string;
};

const PostList = async ({ fetchData, slug }: PostListProps) => {
  const posts = await fetchData();

  return (
    <div className="flex flex-col gap-2 mt-4">
      {posts.map((post) => {
        const isFakeSlug = !slug || slug === "heyyy";

        return (
          <div key={post.id}>
            {isFakeSlug ? (
              // ----------- NO LINK -----------
              <Card className="cursor-default">
                <CardHeader>
                  <CardTitle>{post.title}</CardTitle>
                  <CardDescription className="flex items-center justify-between">
                    <h1>By {post.user?.name}</h1>
                    <h1>{post._count.comments} comments</h1>
                  </CardDescription>
                </CardHeader>
              </Card>
            ) : (
              // ----------- WITH LINK ----------
              <Link href={`/topic/${slug}/posts/${post.id}`}>
                <Card>
                  <CardHeader>
                    <CardTitle>{post.title}</CardTitle>
                    <CardDescription className="flex items-center justify-between">
                      <h1>By {post.user?.name}</h1>
                      <h1>{post._count.comments} comments</h1>
                    </CardDescription>
                  </CardHeader>
                </Card>
              </Link>
            )}
          </div>
        );
      })}
    </div>
  );
};

export default PostList;
