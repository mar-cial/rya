import Link from 'next/link';
import { routes } from './routes';

const Navigation = () => {
  return (
    <nav className={'flex flex-col'}>
      <ul>
        {routes.map((v, i) => (
          <li key={i}>
            <Link href={v.url}>
              <a className={'font-bold'}>{v.text}</a>
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default Navigation;
