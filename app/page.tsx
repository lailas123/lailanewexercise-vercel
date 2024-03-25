import { allPosts } from "@/.contentlayer/generated"
import Link from "next/link"

export default function Home() {
  return (
    <div className="prose dark:prose-invert">
      {allPosts
  .sort((a, b) => new Date(a.date).getTime() - new Date(b.date).getTime()) // Sort posts by date in ascending order
  .map((post) => (
     <article key={post._id}>
      <Link href={post.slug}>
        <h2>{post.title}</h2>
      </Link>
      {post.description && <p>{post.description}</p>}
    </article>
  ))}
    </div>
  )
}
