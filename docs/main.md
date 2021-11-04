# 安装

### npm

> npm install shirkhan-alphabet

### yarn

> yarn add shirkhan-alphabet

# 使用

直接从库中导入需要使用的功能进行调用即可.
如:

```javascript
import { Alphabet, u2uly } from "shirkhan-alphabet";

const alpha = new Alphabet();

console.log(alpha.getTable());

console.log('u2uly("شىرخان") :', u2uly("شىرخان"));
```
