import Footer from './Footer'
function Contact(){
    return(
        <section id="contact" class="pt-5">
            <section>
                <div className="col-md-12 lemontitle text-align-right px-5">Always Trying</div>
                <div className="col-md-12 juasub text-align-right px-5">#도전적인 #열정적인 #책임감 있는 #리더십 있는<br/>항상 끈임없이 노력하는 프론트엔드 개발자가 되겠습니다. <br/>저에 대해 더 궁금하시다면 아래를 통해 연락주시면 감사하겠습니다.</div>
                <div className="contanct-box px-5 ">
                    <p># E-mail<br></br><span>chaesofedev@gmail.com</span></p>
                    <p># Kakao Talk ID<br></br><span>cogus2085</span></p>
                </div>
            </section>            
            <Footer></Footer>            
        </section>
)}


export default Contact;