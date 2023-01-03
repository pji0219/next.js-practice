// 중첩된 동적 라우트
import { useRouter } from 'next/router';
import React from 'react';

function CientProjectPage() {
  const router = useRouter();

  console.log(router.query);

  const loadProjectHandler = () => {
    // load data...
    router.push('/clients/kyj/projecta');
  };

  return (
    <div>
      <h1>해당 클라이언트와의 프로젝트</h1>
      <button onClick={loadProjectHandler}>프로젝트 A 불러오기</button>
    </div>
  );
}

export default CientProjectPage;
