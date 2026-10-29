export const instant = false;
// interface for blogs data we will fetch from the api

interface BlogPageProps {
    params: {
        slug: string;
    }
}

const blogData: Record<string, {title: string, content: string}> = {
    "first-blog": { 
        title: "First Blog", 
        content: "This is the content of the first blog." },
    "second-blog": {
        title: "Second Blog",
        content: "This is the content of the second blog." },
    "third-blog": {
        title: "Third Blog",
        content: "This is the content of the third blog." },
};
// recording blogdata as a string

export default async function BlogDetailPage({params}: BlogPageProps) {
    // async function h
    // we will use await to pick params

    const {slug} = await params;
    const blog = blogData[slug] 

    if (!blog) {
        return <h1>Blog not found</h1>
    }

    return (
        <div style={{ padding: 6 }}>
            <h1>{blog.title}</h1>
            <p style={{color: 'gray'}}>{blog.content}</p>
            <p> Slug URL: {slug}</p>
        </div>
    )
}