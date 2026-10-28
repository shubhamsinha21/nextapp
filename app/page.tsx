import Image from "next/image";

export default function HomePage() {
  return (
    <div style={{ padding: 6 }}>
      Home
      <p>this is the home page</p>
      <Image
        //src="/scene.jpg" // taking from public folder
        src="https://images.pexels.com/photos/8470788/pexels-photo-8470788.jpeg"
        alt="scene image"
        width={500}
        height={300}
      />
    </div>
  );
}
