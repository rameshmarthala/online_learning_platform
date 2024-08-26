import './globals.css';
export default function Layout({ children }) {
  return (
    <html lang="en">
      <head>
        <title>Your Online Learning Platform</title>
        <meta charSet="UTF-8" />
        <meta name="viewport" content="width=device-width,
         initial-scale=1.0" />
      </head>
      <body>
      <header className="bg-gray-800 text-white p-4 text-center">
        Online Learning Platform</header>
        {children}
        <footer className="bg-gray-800 text-white p-4 text-center">
          © 2024 Learning Platform</footer>
      </body>
    </html>
  );
}
