import { use } from "react"
import { AuthContext } from "../contexts/AuthContext"
import TasksContainer from "../components/tasks/TasksContainer";

const HomePage = () => {
    const {user} = use(AuthContext);

    return user ? 
    <div>
         <TasksContainer />
         <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Doloribus atque corporis mollitia similique laboriosam voluptas asperiores quisquam exercitationem maiores sint!</p>
    </div>
    :
        <div>
            <div style={{textAlign: "center", padding: "10px"}}>
                <h2>Welcome to My React Practice Club</h2>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Numquam voluptate vel minus natus! Dolores aspernatur explicabo ea iusto aliquam autem beatae amet saepe error, doloremque, adipisci et dolore odio voluptatem!</p>
            </div>
        </div>
}

export default HomePage