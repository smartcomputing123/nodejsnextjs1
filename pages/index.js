// pages/index.js
import Link from 'next/link';
import MyComponent from './MyComponent';
import Card from './Card';

export default function Home() {
  return (
    <div>
      <h1>Home Page</h1>
      <Link href="/about">Go to About Page</Link>
      <br/>
      <Link href="/contact">Go to Contact Page</Link>
      <br/>
      <ul>
        <li><Link href="/posts/1">Post 1</Link></li>
        <li><Link href="/posts/2">Post 2</Link></li>
        <li><Link href="/posts/3">Post 3</Link></li>
      </ul>
      <MyComponent>
        <p>This is a child element!</p>
      </MyComponent>
      <Card title="Card 1">
        <p>This is the content of Card 1.</p>
      </Card>
      <Card title="Card 2">
        <p>This is the content of Card 2.</p>
      </Card>
    </div>
  );
}
