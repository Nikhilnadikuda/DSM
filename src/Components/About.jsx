import { React, useEffect} from 'react'
import { Link } from 'react-router-dom'
const About = (props) => {
    useEffect(() => {
    document.title = props.title
    return () => document.title = props.title;
  }, [props.title])
  return (
    <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center' }} className=" my-5 about">
      <h3 style={{ marginTop: '50px' }}>{props.player.name}</h3>
      <img className="img-thumbnail my-4" src={props.player.profile} alt="" />
      <Link to="/"><button type="button" className="btn btn-danger  my-2 ms-3" style={{ width: '100px' }} >Back</button></Link>

    </div>
  )
}
export default About
