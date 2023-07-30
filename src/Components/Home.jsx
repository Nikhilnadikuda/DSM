import {React,useEffect} from 'react'
// import { useState} from 'react'
// import About from '../About'
// import './styles.css'
import { Link } from 'react-router-dom'
import logo from '../assets/logo1.png'

const Home = (props) => {
  useEffect(()=>{
    document.title=props.title
    
    return ()=>document.title=props.title;
  },[props.title])
  // const [selectedPicture, setSelectedPicture] = useState(null);

  // const handlePictureClick = (e,picture) => {
  //   e.preventDefault();
  //   setSelectedPicture(picture);
  // };

  // const handleCloseClick = () => {
  //   setSelectedPicture(null);
  // };

  const players=[
    {
      id:1,
      mm_id:'Sachin_1479',
      name:' D💲♏ Master avi',
      profile:require('../assets/mavi.jpg'),
      age:26,
    },
    {
      id:2,
      mm_id:'Abhinav_541',
      name:' D💲♏ Beard Man',
      profile:require('../assets/beard.jpg'),
      age:27,
    },
    {
      id:3,
      mm_id:'Ramu_7',
      name:' D💲♏ Sniper 414',
      profile:require('../assets/snip.jpg'),
      age:25,
    },
    {
      id:4,
      mm_id:'Jugal_36',
      name:' D💲♏ The Pro Noobie',
      profile:require('../assets/pro.jpg'),
      age:17,
    },
    {
      id:5,
      mm_id:'Ankit_2352',
      name:' D💲♏ Nobbie',
      profile:require('../assets/noobie.jpg'),
      age:21,
    },
    {
      id:6,
      mm_id:'Karthik_1764',
      name:' D💲♏ Oggy',
      profile:require('../assets/oggy.jpg'),
      age:22,
    },
    {
      id:7,
      mm_id:'',
      name:' D💲♏ Vips',
      profile:require('../assets/vips.jpg'),
      age:19,
    },
    {
      id:8,
      mm_id:'Saksham_1',
      name:' D💲♏ Beast',
      profile:require('../assets/beast.jpg'),
      age:20,
    },
    {
      id:9,
      mm_id:'Arjun_3929',
      name:' D💲♏ Avada',
      profile:require('../assets/avada.jpg'),
      age:22,
    },
    {
      id:10,
      mm_id:'',
      name:' D💲♏ The Great',
      profile:require('../assets/great.jpg'),
      age:21,
    },
    {
      id:11,
      mm_id:'Dev_957',
      name:' D💲♏ Limdo Limited',
      profile:require('../assets/limdo.jpg'),
      age:19,
    },

    {
      id:12,
      name:' D💲♏ Robb',
      mm_id:'Nikhil_6989',
      profile:require('../assets/robb.png'),
      age:21,
    },
    {
      id:13,
      mm_id:'Reena_1696',
      name:' D💲♏ Aarav',
      profile:require('../assets/aarav.jpg'),
      age:15,
    },
    {
      id:14,
      name:' D💲♏ MR.NOBODY GAMING',
      profile:require('../assets/robb.png'),
      age:20,
    },
    {
      id:15,
      mm_id:'Goutham_1037',
      name:' D💲♏ Black Devil',
      profile:require('../assets/blackdevil.jpg'),
      age:19,
    },
    {
      id:16,
      mm_id:'',
      name:' D💲♏ Blast',
      profile:require('../assets/blast.jpg'),
      age:17,
    },
    {
      id:17,
      mm_id:'NOOBIE_7911771',
      name:' D💲♏ Yaduveer',
      profile:require('../assets/yaduveer.jpg'),
      age:23,
    },
  ]
  return (
    <>
    <marquee style={{width:'100%',height:'80px',background:'#e5eb34'}}><h2 className="display-5 text-light fw-bold  text-italic text-center my-2" style={{textShadow:'2px 2px 8px #FF0000'}}>Welcome to D💲♏ Family</h2></marquee>
    <div className='container'>
    <img src={logo} style={{height:'20em',width:'100%'}} className="rounded mx-auto d-block img-fluid" alt="..." />
    <table style={{borderSpacing:'20px'}} className="table table-dark table-striped rounded rounded-3 overflow-hidden my-2">
    <tbody>
        <tr>
        <th style={{width:'20%',textAlign:'center'}}>S.no</th>
        <th style={{width:'50%',textAlign:'center'}}>Player Name</th>
        <th style={{width:'30%',textAlign:'center'}}>Age</th>
        </tr>
        {players.map((player)=>{
          return <tr key={player.id+Math.random(10)}>
            <td style={{textAlign:'center'}}>{player.id}</td>
            <td ><Link to="/about" onClick={()=>props.handleProfile(player)} style={{textDecoration:'none'}}>{player.name}</Link></td>
            {/* <td> */}
            {/* <img
            src={player.profile}
            alt={player.name}
            onClick={() => handlePictureClick(player.profile)}
          /> */}
            {/* </td> */}
            <td style={{textAlign:'center'}}>{player.age}</td>
           </tr>
        })}
        </tbody>
</table>

    </div>
     <div className="my-5 d-flex flex-column justify-content-center align-items-center text-light  bg-dark" style={{width: '90%',marginLeft: '5%',borderRadius:'30px'}}>
      <h3 className=' fw-bold my-3'>About D💲♏ {">"} </h3>
      <div className="container ms-2 mt-2 me-1 p-3 text-light">
         <p className='display-7'>DSM stands for Desert Storm Militians.DSM always plays a fair game and if anyone commits taunts or misuse clan then immediate action taken against them and we respect each and every clan members and in return expecting the same. We welcome you to this D💲♏ clan.D💲♏is a family of soldiers where we will discuss strategies, develop our skills and play with eachother to know our partner’s game play.We will enter in clan wars. Respect each other.</p>
      </div>
     </div>
     {/* {selectedPicture && (
            <div className="modal">
              <img src={selectedPicture} alt="Selected" />
              <button onClick={handleCloseClick}>X</button>
            </div>
          )} */}
    </>
  )
}

export default Home