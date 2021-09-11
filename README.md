# 使用方法

## 指令
- 開發： `npm start`會打包生成build, 對`build/page`底下的html執行live server  ps.每當新增檔案時需重啟`npm start`
- 生產模式: `npm run build`也會打包成build, 但內容會壓縮且沒有.map檔


## 如何建立新頁面
 -  在 `src/html/page` 新增html, 當需要用到共用component時,在html標籤加上`slot="name"`, name必須與元件同名(元件放在`src/html/component`)
 -  所有頁面的`<head></head>`內容皆共用, 可放套件cdn或設定`<meta>`, 可在`webpack.config.js`的`headTags`設定
    
```html
<!DOCTYPE html>
<html lang="en">
<head>
  <%= htmlWebpackPlugin.tags.headTags %>
</head>
<body>
  <main>
    <div slot="header"></div>
    <div>
      <p>Home</p>
      <img src="../../static/img/logo.png" alt="">
    </div>
    <div slot="footer"></div>
  </main>
</body>
</html>
```
 -  在 `src/js` 新增對應js檔, 以下幾點需注意：
    1. 該頁面用到的`scss`,`圖片`皆需import進來才會打包到build,否則無法使用
    2. 若頁面有用到共用元件, 需先`import slot from './lib/slot.js';`, 並於 DOM ready後呼叫 `await slot.init()`
    範例如下:
```javascript
import slot from './lib/slot.js';
import '../static/reset.css';
import '../scss/page/home.scss';
import '../static/img/logo.png';

$(document).ready(async function () {
  await slot.init()
  // do something
})
```
