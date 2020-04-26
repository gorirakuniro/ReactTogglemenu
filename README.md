## 🍔メニューを作成しました。


---
下記のサイトのハンバーガーメニューをReactに変換する作業をしました  
https://tech-dig.jp/hamburger-global-nav/  


------------------------------------------------

この上のをReactに直す作業

### 難しかった点
#### 1

`
const [toggle, setToggle] = useState(false);  <br>
const togglebtn = () => setToggle(!toggle);  <br>
useEffect(() => {  <br>
        if(toggle === true){  <br>
            document.body.classList.remove("nav-open");  <br>
        }else if(toggle === false){  <br>
            document.body.classList.add("nav-open");  <br>
        }  <br>
 },[toggle]);  <br>
   `
useState,useEffectの使い方にまだ慣れていないためとても時間がかかった  
#### 2  
`
className={`black-bg ${toggle ? "" : "nav-open"}`}  
  `
クラスに代入するのに?のif文の使い方がわからなかった  

### 参考になったサイト  
https://teratail.com/questions/112538
