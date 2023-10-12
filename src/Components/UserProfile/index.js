import './index.css'

const Userprofile = props => {
  const {userdetails} = props
  const {imageurl, name, role} = userdetails
  return (
    <li className="user-card-container">
      <img src={imageurl} className="avatar" alt="avatar" />
      <div className="user-details-container">
        <h1 className="user-name">{name}</h1>
        <p className="user-designation">{role}</p>
      </div>
    </li>
  )
}

export default Userprofile
