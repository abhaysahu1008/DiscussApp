import React from 'react'
import PostShow from '../../../../../components/posts/post-show';
import CommentCreateForm from '../../../../../components/comments/comment-create-form';
import Link from 'next/link';
import { ChevronLeft } from 'lucide-react';
import { Button } from '../../../../../components/ui/button';
import CommentList from '../../../../../components/comments/CommentList';

type PostShowPageProps = {
  params: Promise<{ slug: string; postId: string }>
}

const PostShowPage: React.FC<PostShowPageProps> = async ({ params }) => {

  const { slug, postId } = await params;
  console.log("slug :", slug);

  return (
    <div className='space-y-3'>
      <Link href={`/topic/${slug}`} className=''>
        <Button variant={'link'}>
          <ChevronLeft />
          Back to {slug}
        </Button>
      </Link>
      <PostShow postId={postId} />
      <CommentCreateForm postId={postId} startOpen />
      <CommentList postId={postId} />
    </div>
  )
}

export default PostShowPage
