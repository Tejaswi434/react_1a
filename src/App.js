import Userprofile from './Components/UserProfile/index'

const userdetailslist = [
  {
    uniqueid: 1,
    imageurl: 'https://assets.ccbp.in/frontend/react-js/floyd-miles-img.png',
    name: 'tony',
    role: 'software',
  },
  {
    uniqueid: 2,
    imageurl: 'https://assets.ccbp.in/frontend/react-js/floyd-miles-img.png',
    name: 'tony_2',
    role: 'software',
  },
  {
    uniqueid: 3,
    imageurl: 'https://assets.ccbp.in/frontend/react-js/floyd-miles-img.png',
    name: 'tony_2',
    role: 'software',
  },
]

const App = () => (
  <ul className="list-container">
    <div className="title">
      <h1>userslist</h1>
      <ul>
        {userdetailslist.map(eachitem => (
          <Userprofile userdetails={eachitem} key={eachitem.uniqueid} />
        ))}
      </ul>
    </div>
  </ul>
)

export default App
