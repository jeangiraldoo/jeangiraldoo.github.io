# Personal website

This is my personal website, built with just HTML, CSS and JavaScript.

## Design rationale

I've seen really cool portfolio/personal sites, including games, entire operating systems and so on.

Why is it my site so simple then?

I wanted a design that was easy to maintain, felt techy, and would allow me to focus on the content of the site.

### Blog

My personal blog serves as an artistic outlet for me. Check out [my first post](https://jeangiraldoo.github.io/blog/posts/hello_blog/)
which is an in-depth explanation about the ideas behind the blog!

Supports the following features:

[x] Posts are written in plain text (Markdown)
[x] Post are automatically sorted by date
[ ] Comment section
[ ] Aproximate reading time per post should be calculated and displayed
[ ] RSS support

There is a script which turns all Markdown files at `blog/markdown/` into static HTML pages. It can be run using the following command:

```bash
npm run build-blog
```
