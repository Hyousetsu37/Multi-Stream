import { Link } from 'react-router';

export const Headbar = () => {
  return (
    <div>
      <div>Logo</div>
      <nav>
        <ul>
          <li>
            <Link to={'/'}>Start</Link>
          </li>
          <li>
            <Link to={'/'}>Start</Link>
          </li>
        </ul>
      </nav>
    </div>
  );
};
