# uSecure Technical Test
This is Tom Moore's tech test, please contact me if you've got any questions.
## Start up
1. Install Bun: https://bun.sh/docs/installation
2. Install packages:
```bash
bun install
```
4. Open dev server:
```bash
 bun run dev
```

## Tech choices
Besides React and Typescript, I've not really used any of these technologies in a professional capacity before, but a tech stack of NextJS and Redux seemed like overkill to me.  Especially when SEO isn't important an SPA seems much more appropriate so I chose:
- Vite - As this app is only small, doesn't require SEO or server side logic a lightweight SPA server is the better choice.  Also, I know you use Vite, as well as Tan Router, which cannot be used with Vite.
- Tan Router - I've not used this before, it's only recently become production ready and on a project this size and for what I needed it for it probably doesn't make much difference over the traditional React Router.  But, I know it's what uSecure use, I trust the TanStack and it's another thing to learn so why not.
- TypeScript - I cannot not use TypeScript anymore.  Main reason is it saves time by catching bugs early.
- Tailwind - I know it's quick to build, run, and easily customisable.
- Zustand - Zustand is an incredible lightweight state manager with minimal setup and better performance than (as far as I know) than all other Context/Provider based state managers.  Perfect for this kind of task where no backend was needed.

## Potential improvements
With a bit more time I would:
- Persist the store so the page could be refreshed and keep the same information about the journey, either by using the zustand `persist` middleware or a backend.
- Write tests.
- Add icons (just remembered, but I'd rather hand it in now).
