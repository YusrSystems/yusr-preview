export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex h-screen">
      <div className="flex flex-col flex-1">{children}</div>
    </div>
  );
}
