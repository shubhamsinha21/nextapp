export const instant = false;
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Api call",
  description: "Making api calls..",
  openGraph: {
    title: "Api call | nextapp",
    description: "posts api call",
    images:["/scene.jpg"]
  },
  twitter: {
    card:"summary_large_image",
    title: "Api call | nextapp",
    description: "posts api call",
    images:["/scene.jpg"]   
  }
}

interface Postprops {
  id: string;
  title: string;
  body: string;
}

export default async function Posts() {
  // const res = await fetch("https://jsonplaceholder.typicode.com/posts")
  const res = await fetch("https://jsonplaceholder.typicode.com/posts", {
    cache: "no-store",
  }); // to not store cache and have dynamic data from api-call
  console.log("Status:", res.status);
  const data = await res.json();
  // console.log(data)
  //.then(console.log) -> returns nothing and then data ka value undefined and hence not executes

  // throw new Error("Failed to fetch"); // simulate an error for testing
    return (
       <div style={{ padding: 6 }}>
        Contact
        <p>this is the contact page</p>
        <ul>
          {data.slice(0,5).map((item : Postprops)  => (
            <li key={item.id}>
              <h4>{item.title}</h4>
              <p>{item.body}</p>
            </li>
          ))}
        </ul>

      </div>
    )
}
