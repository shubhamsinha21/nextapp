## Lectures

1. Basic introduction
2. Rendering UI
3. Imperative vs Declarative
4. React Components
5. Props and State
6. Why nextjs is needed
7. Installation of next js + understanding folder structure
8. App router
9. Pages and nested layouts
10. Navigation Vs useRouter
11. Dynamic routes
12. Query and search params


### Pre-rendering issue's

"" 
Next.js is trying to prerender /contact, but your page fetches data that Next.js considers uncached. In this situation, Next.js recommends either using <Suspense>, caching the data, or opting out of prerendering for that route.
""

or we can use this -
```
export const instant = false;
```