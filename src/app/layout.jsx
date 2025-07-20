export const metadata = {
  title: "TaskHub",
  description: "اپلیکیشن مدیریت تسک‌ها با Next.js",
};

export default function RootLayout({ children }) {
  return (
    <html lang="fa">
      <body style={{ fontFamily: "sans-serif", padding: "2rem" }}>
        <header>
          <h1 style={{ color: "darkblue" }}>🌟 TaskHub</h1>
          <hr />
        </header>
        <main>{children}</main>
      </body>
    </html>
  );
}
