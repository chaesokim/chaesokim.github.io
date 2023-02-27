import React, { useState } from 'react';

function About() {
    const [hash, setHash] = useState([true, false, false]);

    return (
        <section id="about">
            <div className="row d-flex align-items-start">
                <div id="" className="col-md-6 lemontitle">I’m Chaehyun
                    <ul className="d-flex hash_grp">
                        <li className={hash[0] ? "hash_active" : "hash_list"}
                            onClick={() => { setHash([true, false, false]); }}># ENFP</li>
                        <li className={hash[1] ? "hash_active" : "hash_list"}
                            onClick={() => { setHash([false, true, false]); }}># 다재다능한</li>
                        <li className={hash[2] ? "hash_active" : "hash_list"}
                            onClick={() => { setHash([false, false, true]); }}># 감각적인</li>
                    </ul>
                    <div className="hash_detail">
                        <p className={hash[0] ? "hash_active" : "hash_list"}>저의 MBTI는 ENFP입니다!<br></br><br></br>진실되고 성실한 제 성격을 바탕으로<br></br>제게 주어진 일은 최선을 다해 수행합니다.<br></br><br></br>또한 풍부한 상상력과 창의력을 바탕으로<br></br>매번 번뜩이는 아이디어로 새로운 방향성을 <br></br>제시할 수 있는 아이디어 뱅크입니다</p>
                        <p className={hash[1] ? "hash_active" : "hash_list"}>마이스터고등학교 자동화시스템 학과 졸업 후<br></br>삼성전자 DS부문에서 화학 공급 시스템 담당자로 2년간 근무하며<br></br><br></br>PLC에서부터 Network, SCADA System, DB/Bigdata<br></br>그리고 WEB을 기반으로한 HMI로 이루어진<br></br>시스템을 운용 및 기획한 경험이 있습니다.<br></br><br></br>이러한 경험을 바탕으로 프론트엔드 개발자이지만<br></br>때로는 기획자처럼,  때로는 개발자 같은<br></br>다재다능한 제 모습을 보여드리겠습니다.</p>
                        <p className={hash[2] ? "hash_active" : "hash_list"}>문화생활을 중시하던 부모님을 따라<br></br>어릴적부터 다양한 음악연주회, 전시회를 다녔습니다<br></br><br></br>이러한 문화 활동은 지금까지도 이어져<br></br>뮤지컬, 연극, 전시회 등의 문화 공연 관람과<br></br>그림그리기, 비즈 공예 등이 제 취미입니다.<br></br><br></br>취미 활동들을 통해 저는 끊임없이 <br></br>관찰하고 경험하고 상상하는 사람이 되었습니다.</p>
                    </div>
                </div>
                <div className="col-md-6 hash_img">
                    {/* 570*500이여야함 */}
                    <img src="./img/kch1.jpg" alt="" className={hash[0] ? "hash_active" : "hash_list"}/>
                </div>
            </div>
        </section>
    )
}


export default About;   