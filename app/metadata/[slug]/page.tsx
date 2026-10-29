export const instant = false;
import type { Metadata } from "next";

type Props = {
    params: Promise<{slug: string}>
}

async function getPostData(slug:string) { 
    // we took out post from params
    return {
        title: `Post about ${slug}`,
        description: `This is a post about ${slug}`
    }
}

// dynamic SEO
// we will use async coz we'r picking url

export async function generateMetadata({params}: Props): Promise<Metadata>{
    const {slug} = await params;
    // unwraped promise 

    const post = await getPostData(slug);

    return {
        title: post.title,
        description: post.description
    }
}

// page content

export default async function Metadata({params}: Props) {

    const {slug} = await params;
  return (
    <div>
        Metadata: {slug}
    </div>
  )
}
