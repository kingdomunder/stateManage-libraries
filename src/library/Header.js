import { Link } from "react-router-dom"

function Header() {
  return (
    <>
      <Link to={'/constate'}>Constate</Link>
      &nbsp;
      <Link to={'/jotai'}>Jotai</Link>
      &nbsp;
      <Link to={'/recoil'}>Reocil</Link>
      &nbsp;
      <Link to={'/RTK'}>RTK</Link>
    </>
  )
}

export default Header