---
title: Determining if a Component is a Client Component in Next 15
category: blog
posted: Oct. 25, 2024
---

This isn't one of my normal blog posts, but I spent all day trying to find a way to determine if a component that is about to be rendered will render on the client or the server. No one else seems to have ever had this problem, so I decided to share my (admittedly very hacky) solution.

The secret is that trying to execute the imported component directly on the server throws an error. I felt even dirtier relying on an exception being thrown and possibly causing side-effects, so I used `toString()` instead. The module contents, line number etc, are returned if the component is a server component, but error text is returned if the component is marked as `"use client"`;.

```typescript
import React, { type FC } from "react";
import ItemA from "./ItemA";
import ItemB from "./ItemB";
import ItemC from "./ItemC";

export default function Home() {
  const children = [ItemA, ItemB, ItemC];

  return (
    <div className="text-xl">
      {children.map((PossiblyChild, i) => (
        <PossiblyChild
          key={i}
          message={
            isClientComponent(PossiblyChild)
              ? "No secret for you!"
              : "Some secret"
          }
        />
      ))}
    </div>
  );
}

function isClientComponent<T>(C: FC<T>): boolean {
  return !C.toString().includes("fileName");
}
```

ItemA.tsx has a `"use client";` directive, while ItemB.tsx has a plain function component with no directive, and ItemC.tsx has an async function component with a `"use server";` directive.

This solution probably shouldn't be treated as production-grade, but it will work (for now at least) in a pinch.

Update: From what I can tell, this only works with TurboPack, WebPack throws an error just using `.toString()`.
