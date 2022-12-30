import { useRouter } from 'next/router';

function PortfolioProjectPage() {
  const router = useRouter();

  // 백엔드 api 요청을 보내서 id를 받아온 다음
  // id로 상세 데이터 받아올 때 사용
  const portfolioId = router.query.portfolioId;

  // 라우터가 처음에 즉시 실행 되는데 그 시점에서는 url이 무엇인지 모르기에 undefined로 나오고
  // 그 후에 값이 들어오고 컴포넌트는 다시 렌더링 하고 구체적인 값을 얻음
  console.log(portfolioId);

  return <h1>상세 페이지!</h1>;
}

export default PortfolioProjectPage;
