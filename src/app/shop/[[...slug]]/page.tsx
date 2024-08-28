export default function ShopSlug({ params }: { params: { slug: string[] } }) {
  const { slug } = params;
  if (!slug) return <h2>NO SLUG!!</h2>;
  return <h3 className="text-2xl">ShopSlug - {slug?.join()}</h3>;
}
