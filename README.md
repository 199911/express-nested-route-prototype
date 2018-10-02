# Prototype of Express.js with nested routes

## Prototype zero

It is example with root level routers only.
No nested router.
Prefer route base middlewares instead of router base middlewares, so each router is self-contain.

Codes located in folder `/zero`.

## Prototype one

It is example with nested routers.
Prefer router base middlewares.
Although the middleware execution is implicit, it is consistant with the dependencies of nested routers.

Codes located in folder `/one`.
