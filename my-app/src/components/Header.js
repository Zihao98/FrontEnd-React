
const Header = ({title}) => {
  return (
    <header className = 'header'>
        <h1>{title}</h1>
        <button className ='btn'>Search</button>
    </header>
  )
}

Header.defaultProps = {
    title: 'Task Tracker',
}
//CSS in js
// const headingStyle = {
//     color: 'red',
//     backgroundColor: 'black',
// }


export default Header
