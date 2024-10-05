export default function PageLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <section>
      <div className="p-8">{children}</div>
    </section>
  );
}
