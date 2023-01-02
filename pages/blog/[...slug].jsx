// catch all 라우트: ...연산자로 여러 url을 배열로 받아서 렌더링 함
import { useRouter } from 'next/router';

function BlogPostPage() {
  const router = useRouter();

  console.log(router.query);

  return (
    <div>
      <h1>블로그 포스트들</h1>
    </div>
  );
}

export default BlogPostPage;
