import './index.css'

const Bannerdata = props => {
  const {banneritems} = props
  const {headerText, description, className} = banneritems
  return (
    <li className={className}>
      <div>
        <h1>{headerText}</h1>
        <p>{description}</p>
        <button type="button">Show more</button>
      </div>
    </li>
  )
}

export default Bannerdata

