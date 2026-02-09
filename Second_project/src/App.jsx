import { UserCard } from "./UserCard"
import { Wrapper } from "./Wrapper"

export default function App(){

  const users = [
    {name: "Virat Kohli",
      role: "BatsMan",
      country: "India"
    },
    {name: "Ms. Dhoni",
      role: "WK-Batsman",
      country: "India"
    },
    {name: "Rohit sharma",
      role: "BatsMan",
      country: "India"
    },
    
  ]
  return(
    <div>
      <h1>User DashBoard</h1>

      <Wrapper title="User list">
        {
          users.map((data) => (<UserCard data={data}/>))
        }
        
      </Wrapper>
      
    </div>
  )
}
