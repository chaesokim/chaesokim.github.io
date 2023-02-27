import naviDB from '../json/navidb.json';
import '../css/Hd.css'

function Home(){
    return(
        <section id="home" class="">
            <Banner></Banner>
            <UpdateDate></UpdateDate>
            <div className="homebottom d-flex">
            <Career></Career>
            </div>
            
        </section>
)}

function Banner(){
return(
    <div class="flow-container">
        <div class="flow-text">
            <div class="flow-wrap">CHAEHYUN’S PORTFOLIO </div>
            <div class="flow-wrap">CHAEHYUN’S PORTFOLIO </div>
            <div class="flow-wrap">CHAEHYUN’S PORTFOLIO </div>
            <div class="flow-wrap">CHAEHYUN’S PORTFOLIO </div>
            <div class="flow-wrap">CHAEHYUN’S PORTFOLIO </div>
        </div>
    </div>
)}

function UpdateDate(){
    return(
    <div className="updateDate d-flex align-items-center px-5">
        <img src="./img/shape1.png" alt=""/>
        <div>LAST UPDATE IS<br></br>FEB 27, 2023</div>
        
    </div>
)}

function Career(){
    return(
        <div id="career" class="col-md-5 px-5">
            <h3 className="subtitle letter-spacing px-3 font-yes text-align-right">Career & Certificate</h3>
            <div dir="ltr" className="scrollBar px-3 nanumgothic">
                <p>○ iKamper 웹퍼블리싱 프리랜서(23.01~23.02)</p>
                <p>○ 마이다스아이티 사무보조 (21.11~22.02)</p>
                <p>○ 삼성전자 Assistant Engineer (19.05~21.07)</p>
                <p>○ 웹디자인기능사 필기 (취득)</p>
                <p>○ 컴퓨터활용능력 2급 (취득)</p>
                <p>○ 자동차운전면허증 2종 보통  (취득)</p>
                <p>○ 전자기기기능사 (취득)</p>
                <p>○ 한국사능력검정시험 2급 (취득)</p>
                <p>○ 생산자동화기능사 (취득)</p>
                <p>○ 전기기능사 (취득)</p>                
            </div>            
        </div>
)}

export default Home;