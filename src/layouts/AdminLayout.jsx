import { Outlet } from "react-router";
import Header from "../components/Header";
import Menu from "../components/Menu";

const AdminLayout = () => {
    return ( 
        <div>
         <Header/>
         <div>
            <Outlet/>
         </div>
         <Menu/>    
        </div>
     );
}
 
export default AdminLayout;