// 동적 라우트로 네티게이팅 하기
import Link from 'next/link';

function ClientPage() {
  const clients = [
    {
      id: 'ksh',
      name: '김소현',
    },
    {
      id: 'kyj',
      name: '김유정',
    },
  ];

  return (
    <div>
      <h1>클라이언트 페이지!</h1>
      <ul>
        {clients.map((client) => (
          <li key={client.id}>
            <Link href={`clients/${client.id}`}>{client.name}</Link>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default ClientPage;
