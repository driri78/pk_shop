# routes

1. /account/login
2. /product/doll

# onBlur와 onClick의 순서

1. onBlur => onClick
   패스워드 전체 삭제 버튼 기능

LoginItem.jsx

```js
<input
  type={user.type === "password" && view ? "text" : user.type}
  id={user.id}
  name={user.id}
  ref={user.ref}
  onFocus={() => setFocus(true)}
  onBlur={() => {
    if (!val) {
      setFocus(false);
    }
  }}
  onChange={(e) => setVal(e.target.value)}
  value={val}
/>
```

PasswordView.jsx

```js
<div
  className="password_deleteBtn"
  onClick={() => {
    setVal("");
  }}
>
  <TiDelete />
</div>
```

input focus상태에서 div를 클릭했을시 나타나는 이벤트

1. div를 클릭함과 동시에 input의 onBlur이벤트가 먼저 발생
2. 그뒤 div onClick 이벤트가 발생

해결방안 onClick 대신 onMouseDown이벤트 사용
PasswordView.jsx

```js
<div
  className="password_deleteBtn"
  onMouseDown={() => {
    setVal("");
  }}
>
  <TiDelete />
</div>
```

// spring boot 대신 json 사용
ProductContext.js => getData
paging.jsx => getPage
ProductDetailContext.js => getData
DollMenu.jsx => getTotal
