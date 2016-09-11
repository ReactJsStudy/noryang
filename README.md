# Noryangjin Project

[노량진 프로젝트]  
실전 연습을 위한 ReactJS 스터디 프로젝트입니다.

## Commands
```cmd
> npm i          // 설치
> npm start      // dev server, watch, hmr
> npm run build  // build
> npm run lint   // es-lint
```

## 폴더구조
```cmd
> devtools                 // express, webpack settings
  server.js
  webpack.config.dev.js
  webpack.config.prod.js
> dist                     // build folder
> src                      // develop folder
  > App                      // WRAPPER. 최상위 폴더.
    App.js                     // indexRoute
    constants.js               // action types
    Gnb.js                     // Links
    reducers.js                // combine All reducers
    routes.js                  // routes information
    store.js                   // createStore
  > Home                     // Main Page
  > Gomugom                  // Gomugom Page (이하 개별페이지)
    > actions
    > components
    > reducers
  > scss                     // sass
  index_build.html           // 배포용
  index.html                 // 개발용
  index.js                   // entry point
.babelrc                   // babel config
.env                       // NODE_ENVs
.eslintrc                  // eslint config
package.json
```

## Role
- 정재남 : 개발환경 및 폴더구조 세팅
- 천명기 :
- 황원준 :
- 정재필 :
- 최태산 :
- 이창규 :
