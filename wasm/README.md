- install wasm-pack
```shell
cargo install wasm-pack
```

- build WASM
```shell
wasm-pack build --target web
```

- js 
```
import init, { hello } from "./wasm/pkg";

init().then(() => {
  console.log(hello()); // 输出 "Hello, World!"
});

```
