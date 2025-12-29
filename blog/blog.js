const posts = [
  {
    title: "Why I Document My Learning",
    file: "posts/first-post.md",
    date: "2025-01-05"
  },
  {
    title: "Breaking Down CNNs as a Beginner",
    file: "posts/second-post.md",
    date: "2025-01-10"
  },

  {
    title: "Lady Anuelle: Bridging Tech & Storytelling",
    file: "posts/lady-anuelle-venture.md",
    date: "2025-29-12",
    summary: "The story behind my freelance venture and how I help brands find their digital voice."
  }
];

const container = document.getElementById("posts");

posts.forEach(async post => {
  const res = await fetch(post.file);
  const text = await res.text();

  const article = document.createElement("article");
  article.innerHTML = `
    <h2>${post.title}</h2>
    <small>${post.date}</small>
    <div>${marked.parse(text)}</div>
    <hr />
  `;

  container.appendChild(article);
});
