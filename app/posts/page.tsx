// async function getPOsts() {
//   const res = await fetch(`https://jsonplaceholder.typicode.com/posts`);
//   return res.json();
// }

// export default async function Page() {
//   const posts = await getPOsts();
//   return (
//     <div>
//       <h1>Posts</h1>
//       {posts.slice(0, 5).map((post) => (
//         <p key={post.id}> {post.title} </p>
//       ))}
//     </div>
//   );
// }

// Why is this a Server Component?
// No "use client" directive.
// Runs on the server.
// Can fetch data directly from APIs or databases.
// HTML is generated on the server and sent to the browser.

export default async function Page() {
  const data = await fetch(`https://api.vercel.app/blog`);
  const posts = await data.json();
  return (
    <ul>
      {posts.map((post: any) => (
        <li key={post.id}>{post.title}</li>
      ))}
    </ul>
  );
}

// fetching data
// To fetch data with the fetch API, turn your component into an asynchronous function, and await the fetch call.
