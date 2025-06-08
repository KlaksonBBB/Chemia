const headerHTML = `
<header>
        <nav>
            <a href="index.html" class="icona"><img src="icona.png" alt=""></a>
            <div class="dropdown">
                <a href="definicje.html" class="h1_text">Definicje</a>
                <ul>
                    <li><a href="definicje.html#teoria">Teorie kwasów</a></li>
                    <li><a href="definicje.html#Klasyfikacja">Klasyfikacja kwasów</a></li>
                    <li><a href="definicje.html#podział">Podział kwasów</a></li>
                    <li><a href="definicje.html#mocne">Kwasy mocne i słabe</a></li>
                </ul>
            </div>
            <div class="dropdown">
                <a href="właściwości.html" class="h1_text">Właściwości</a>
                <ul>
                    <li><a href="właściwości.html#fizyczne">Właściwości fizyczne</a></li>
                    <li><a href="właściwości.html#wła1">Właściwości chemiczne 1</a></li>
                    <li><a href="właściwości.html#wła2">Właściwości chemiczne 2</a></li>
                    <li><a href="właściwości.html#spec">Reakcje specyficzne</a></li>
                </ul>
            </div>
            <div class="dropdown">
                <a href="przykłady.html" class="h1_text">Przykłady</a>
                <ul>
                    <li><a href="przykłady.html#nieorganiczne">Kwasy nieorganiczne</a></li>
                    <li><a href="przykłady.html#organiczne">Kwasy organiczne</a></li>
                    <li><a href="przykłady.html#medycyna">Kwasy w medycynie</a></li>
                    <li><a href="przykłady.html#przemysł">Zastosowania przemysłowe</a></li>
                </ul>
            </div>
            <div class="dropdown">
                <a href="zagrożenia.html" class="h1_text">Zagrożenia</a>
                <ul>
                    <li><a href="zagrożenia.html">Toksyczność</a></li>
                    <li><a href="zagrożenia.html">Zasady bezpieczeństwa</a></li>
                    <li><a href="zagrożenia.html">Reakcje niebezpieczne</a></li>
                    <li><a href="zagrożenia.html">Neutralizacja</a></li>
                </ul>
            </div>
        </nav>
        <div class="menu2">
            <img class="img_menu" src="icona.png" alt="">
            <div class="hamburger" id="hamburger">&#x2630;</div>
            <div class="side-menu" id="sideMenu">
                <a href=""><img class="img_menu2" src="icona.png" alt=""></a>
                <a href="./StronyWWW/strony.html">Definicje</a>
                <a href="./portfolio/portfolio.html">Właściwości</a>
                <a href="./cennik/cennik.html">Przykłady</a>
                <a href="./kontakt/kontakt.html">Zagrożenia</a>
            </div>
        </div>
    </header>

`;

const footerHTML = `
 <footer><h1>&copy;2025 by kwas</h1></footer>

`;

const styles = `
html {
    scroll-behavior: smooth;
}
    * {
      box-sizing: border-box;
      margin: 0;
      padding: 0;
    }

body {
    margin: 0;
    padding: 0;
    font-family: "Outfit", sans-serif;
    font-optical-sizing: auto;
    font-weight: 600;
    font-style: normal;
}
nav {
    display: flex;
    justify-content:space-evenly;
    align-items: center;
    width: 100%;
    background-color: #0D51D9;
    height: 100px;
}
.h1_text {
    display: inline-flex;
    justify-content: center;
    align-items: center;
    width: 99%;
    text-decoration: none;
    color: black;
    font-size: 27px;
    background: linear-gradient(#D8E8F2,#66ADD9);
    background-clip: text;
    -webkit-text-fill-color: transparent;
    transition: 0.5s ease;
}
@media screen and (max-width: 800px) {
    .h1_text {
        font-size: 21px;
    }
}
.h1_text:hover {
    scale: 1.05;
}
.icona {
    width: 5%;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    margin: 10px;
    margin-left: 15px;
}
@media screen and (max-width:1024px) {
    .icona {
        margin: 30px;
    }
}
.icona img {
    height: 80px;
    border-radius: 20px;
}
.dropdown {
    display: inline-flex;
    position: relative;
    width: 24%;
    z-index: 1000;
}
.dropdown ul {
    width: 100%;
    position: absolute;
    display: none;
    list-style-type: none;
    padding: 0;
    margin-top: 30px;
    background-color: #0D51D9;
    border-radius: 20px;
}
.dropdown ul li {
    margin: 0;
    padding: 5px;
}
.dropdown ul li a {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
    text-decoration: none;
    color: black;
    font-size: 21px;
    text-align: center;
    background: linear-gradient(#D8E8F2,#66ADD9);
    background-clip: text;
    -webkit-text-fill-color: transparent;
    transition: 0.5s ease;
}
.dropdown ul li a:hover {
    scale: 1.02;
}
.dropdown ul li:hover {
    background-color: #2A6BBF;
    border-radius: 20px;
}

.dropdown a:focus + ul,
.dropdown a:hover + ul,
.dropdown ul:hover {
    display: block;
}
@media screen and (max-width:767px) {
    nav {
        display: none;
    }
}
.menu2 {
    background-color: #0D51D9;
    display: flex;
    justify-content: space-between;
    align-items: center;
    display: none;
}
@media screen and (max-width:767px) {
    .menu2 {
        display: flex;
    }
}
.img_menu {
    width: 10%;
    height: 10%;
    margin: 10px;
    border-radius: 20px;
}
.img_menu2 {
    width: 30%;
    border-radius: 20px;
}
.hamburger {
    font-size: 28px;
    cursor: pointer;
    display: none;
    margin-right: 30px;
}

.side-menu {
    position: fixed;
    top: 0;
    left: -250px;
    width: 250px;
    height: 100%;
    background-color: white;
    box-shadow: 2px 0 5px rgba(0,0,0,0.1);
    padding: 60px 20px;
    transition: left 0.3s ease;
    z-index: 1000;
}

.side-menu a {
    display: block;
    margin-bottom: 20px;
    text-decoration: none;
    color: #111;
    font-size: 18px;
    background: linear-gradient(#0D51D9,#66ADD9);
    background-clip: text;
    -webkit-text-fill-color: transparent;
    transition: 0.5s ease;
}

.side-menu.open {
    left: 0;
}

@media (max-width: 767px) {
    nav {
    display: none;
}

    .hamburger {
    display: block;
    }
}


footer {
    width: 100%;
    background-color: #0D51D9;
    display: flex;
    justify-content: center;
    align-items: center;
    margin-top: 10px;
}
footer h1 {
    background:linear-gradient(#D8E8F2,#66ADD9);
    background-clip: text;
    -webkit-text-fill-color: transparent;
    font-size: 21px;
}
`;


document.body.insertAdjacentHTML("afterbegin", headerHTML);
document.body.insertAdjacentHTML("beforeend", footerHTML);

const styleSheet = document.createElement("style");
styleSheet.type = "text/css";
styleSheet.innerText = styles;
document.head.appendChild(styleSheet);

const hamburger = document.getElementById('hamburger');
const sideMenu = document.getElementById('sideMenu');

hamburger.addEventListener('click', () => {
  sideMenu.classList.toggle('open');
});

document.addEventListener('click', (e) => {
  if (!sideMenu.contains(e.target) && !hamburger.contains(e.target)) {
    sideMenu.classList.remove('open');
  }
});




