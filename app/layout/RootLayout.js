// app/layout.js
import MainHeader from '../components/MainHeader';

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <MainHeader />
        <main>{children}</main>
      </body>
    </html>
  );
}
