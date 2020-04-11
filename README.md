## 🍔メニューを作成しました。

下記のサイトのハンバーガーメニューをReactに変換する作業をしました
https://tech-dig.jp/hamburger-global-nav/


------------------------------------------------

この上のをReactに直す作業

### 難しかった点
#### 1
const [toggle, setToggle] = useState(false);
const togglebtn = () => setToggle(!toggle);
useEffect(() => {
        if(toggle === true){
            document.body.classList.remove("nav-open");
        }else if(toggle === false){
            document.body.classList.add("nav-open");
        }
 },[toggle]);
 
useState,useEffectの使い方にまだ慣れていないためとても時間がかかった
#### 2
className={`black-bg ${toggle ? "" : "nav-open"}`}

クラスに代入するのに?のif文の使い方がわからなかった

###　参考になったサイト
https://teratail.com/questions/112538
