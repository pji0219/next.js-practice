import Link from 'next/link';

function HomePage() {
  return (
    <div>
      <h1>홈 페이지!</h1>;
      <ul>
        <li>
          <Link href='/portfolio'>포트폴리오</Link>
        </li>
        <li>
          <Link href='/clients'>클라이언트</Link>
        </li>
      </ul>
    </div>
  );
}

export default HomePage;
