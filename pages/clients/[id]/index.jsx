// 중첩된 동적 라우트
import { useRouter } from 'next/router';
import React from 'react';

function CientProjectPage() {
  const router = useRouter();

  console.log(router.query);

  return (
    <div>
      <h1>해당 클라이언트와의 프로젝트</h1>
    </div>
  );
}

export default CientProjectPage;
