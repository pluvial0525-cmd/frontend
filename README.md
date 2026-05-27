refc
rafce
node-modules 다시 설치 : npm install
server 띄우기 : npm run dev

[git 처음 설정]
git init
git add README.md
git commit -m "start frontend"
git branch -M main
git remote add origin https://github.com/pluvial0525-cmd/frontend.git
git push -u origin main

[git저장]
git add .
git commit -m ""
git push -u origin main


router : npm install react-router-dom
CSS(스타일) : npm install styled-components
아이콘: npm install react-icons

reducer
dispatch: 함수를 실행하는 함수
action: 전체 object 인수
action.type: 함수의 타입 (어떤함수인지)
action.payload: state를 변화시킬수 있는 인수

useState => userReducer => useContext => redux

context: state, 내부함수(reducers) 관리
redux: state, 내부함수(reducers), 외부함수(extraReducers: Api) 관리


