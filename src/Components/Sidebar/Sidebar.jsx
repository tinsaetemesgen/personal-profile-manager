import './Sidebar.css'


function Sidebar() {
    return (
        <>
            <div className="sidebar">

                <div className="title">
                    <h1>Profile Manager</h1>
                </div>
                <hr />

                <ul>
                    <li>
                        <a href="#">
        
                            Dashboard
                        </a>
                    </li>
                    <li>
                        <a href="#">
                            
                            Profile</a>
                    </li>
                    <li>
                        <a href="#">Skills</a>
                    </li>
                    <li>
                        <a href="#">Projects</a>
                    </li>
                    <li>
                        <a href="#">Settings</a>
                    </li>
                </ul>

            </div>


            


        </>

    )
}   

export default Sidebar