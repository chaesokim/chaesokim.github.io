import Scrollspy from "react-scrollspy";
import naviDB from '../json/navidb.json';

function Navi(){
    const naviDb = naviDB.naviDBjson
    return(
      <Scrollspy className="d-flex mb-0 gnb_ul " items={[naviDb[0].naviLink,naviDb[1].naviLink,naviDb[2].naviLink] } currentClassName="is-current">
     {
        naviDb.map((item, index) =>{
          return(
            <li id={ 'naivID'+index } key={ 'naivID'+index } ><a href={item.naviLink} className="text-decoration-none ps-md-3 px-3 font-yes">{item.naviText}</a></li>
          )
        }
     )} 
      </Scrollspy>
    )
  }

  export default Navi;