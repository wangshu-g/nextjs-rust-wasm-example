# react-nextjs-rust-wasm-example

前端调用 rust wasm 简单小案例

``` sh

# wasm build

cd rust-wasm

sh build.sh

cp -r pkg ../web/src/

# nextjs

cd web

npm i

npm run dev

# click the button named by "Wasm Example". type in any text.

```