export const instant = false;

export default async function ContactPage() {

  const res = await fetch("https://jsonplaceholder.typicode.com/posts")
  console.log("Status:", res.status)
  const data = await res.json()
  // console.log(data)
  //.then(console.log) -> returns nothing and then data ka value undefined and hence not executes

  return (
     <div style={{ padding: 6 }}>
      Contact
      <p>this is the contact page</p>
      <ul>
        {data.map(item => (
          <li key={item.id}>
            <h2>{item.title}</h2>
            <p>{item.body}</p>
          </li>
        ))}
      </ul>

    </div>
  )
}
