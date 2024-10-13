import '../../styles/global.css';
import '../../styles/tailwind.css';

export default function PagesLayout({ children }) {
  return (
    <div className="relative flex min-h-screen flex-col">
      <main>{children}</main>
    </div>
  );
}
