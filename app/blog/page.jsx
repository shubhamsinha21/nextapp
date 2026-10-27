import Link from "next/link";
export default function BlogPage() {

    const blogs =[
        {slug: "first-blog", title: "First blog"},
        {slug: "second-blog", title: "Second blog"},
        {slug: "third-blog", title: "Third blog"}
    ]
  return (
    <div style={{ padding: 6 }}>
      Blog
      <p>this is the blog page</p>
      <ul>
        {blogs.map((blog) => {
            return (
                <li key={blog.slug}>
                    <Link href={`/blog/${blog.slug}`}>
                        {blog.title}
                    </Link>
                </li>
            )
        })}
      </ul>
    </div>
  )
}
