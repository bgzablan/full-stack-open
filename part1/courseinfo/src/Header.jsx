const Header = ({ course }) => {
    return (
      <header>
        <h1>{course}</h1>
      </header>
    )
  }
  export default Header
  
  //the function destructured the course directly from the props object 