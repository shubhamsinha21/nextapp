import Link from "next/link";
import { Suspense } from "react";

interface ProductsPageProps {
  // searchParams comes in async category and will be handled like a promise
  // using async and await

  searchParams: Promise<{
    category?: string;
    sort?: string; // it means sort must have a string value and cant be null
  }>;
}

export const instant = false;

const products = [
  { id: 1, name: "React Course", category: "react" },
  { id: 2, name: "Next Course", category: "next" },
  { id: 3, name: "JavaScript Course", category: "javascript" },
  { id: 4, name: "TypeScript Course", category: "typescript" },
];

// now we will create server component
// we cal it server component because it will be rendered on the server side and not on the client side

async function ProductList({ searchParams }: ProductsPageProps) {
  const { category, sort } = await searchParams;

  let filtered = products;

  if (category) {
    filtered = filtered.filter((product) => product.category === category);
  }

  if (sort === "asc") {
    filtered = [...filtered].sort((a, b) => a.name.localeCompare(b.name));
  }

  return (
    <>
    <p>
        Current Filter: <b>{category || "All"}</b> | Sort:{" "}
        <b>{sort || "Default"}</b>
      </p>

      <ul>
        {filtered.map(product => (
            <li key={product.id}>{product.name} - {product.category}</li>
        ))}
      </ul>
    
    </>
  );
}

  export default function ProductPage({searchParams}: ProductsPageProps)
  {

  return (
    <div>
      <h1>Products Page</h1>

      <div style={{ display: "flex", gap: 12 }}>
        <Link href="/products">All</Link>
        <Link href="/products?category=react">React</Link>
        <Link href="/products?category=next">Next</Link>
        <Link href="/products?category=javascript">Javascript</Link>
        <Link href="/products?category=typescript">Typescript</Link>
        <Link href="/products?sort=asc">Sort A-Z</Link>
      </div>

      <Suspense fallback={<p>Loading products...</p>}>
        <ProductList searchParams={searchParams}/>
      </Suspense>

    </div>
  );
}

