import React from 'react'
import { Button } from '../../../components/ui/button';
import { PostCreateForm } from '../../../components/posts/PostCreateForm';
import PostList from './posts/post-list';
import { fetchPostByTopicSlug } from '../../../lib/query/post';

type TopicShowPageProps = {
  params: { slug: string }
}

const TopicShowPage = async ({ params }: TopicShowPageProps) => {
  const { slug } = await params;
  console.log(params);

  return (
    <div className=' grid grid-cols-4 gap-4 p-4'>
      <div className='col-span-4'>
        <div className='flex justify-between mt-9'>
          <h1 className='font-bold text-2xl mb-2'>{slug}</h1>
          <div>
            <PostCreateForm slug={slug} />
          </div>
        </div>
        <h1 className='font-semibold my-3'>All posts</h1>
        <PostList fetchData={() => fetchPostByTopicSlug(slug)} slug={slug} />
      </div>
    </div>
  );
};

export default TopicShowPage;
