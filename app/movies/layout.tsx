export default function MoviesLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="bg-red-100">
      <h1 className="text-4xl">Layout de movies</h1>
      {children}
    </div>
  );
}
