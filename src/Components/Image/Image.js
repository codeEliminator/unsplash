import "./image.css"
export default function Image(props) {
  return (
    <>
      <div className='imageBack'>
        <img className="image" src={props.urls.full} alt={props.alt_description}  onClick={(evt) => {props.updateData(true, evt.target.src )}}></img>
        <div className='userContainer'>
          <a href={`https://www.instagram.com/${props.user.social.instagram_username}/`} target="_blank"><img className='user' src={props.user.profile_image.medium} alt={props.id} ></img></a>
          <span className='name'>@{props.user.first_name}</span>
        </div>
        
      </div>
      
    </>
  )
}
