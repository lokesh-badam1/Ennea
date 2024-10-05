import { Link } from "react-router-dom"
import { styled } from 'styled-components'

const Header = styled.header`
  max-width: 60rem;
  margin: 1rem auto;
  padding: 2rem;
  display: flex;
  justify-content: center;
  text-transform:uppercase;

  ul{
  list-style:none;
  display: flex;
  gap: 1rem;
  }

  
`

export default function Navigation(){
    return(
        <Header>
            <ul>
                <li>
                    <Link to='/'>Homepage</Link>
                </li>
                <li>
                    <Link to='/sendform'>Form</Link>
                </li>
            </ul>
        </Header>
    )

}