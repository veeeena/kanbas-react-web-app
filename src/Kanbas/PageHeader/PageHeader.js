import { FaBars } from "react-icons/fa6";
import "./index.css";

function PageHeader({name, number, date}) {
    return(
        <div class="row">
            <div class="page-header mt-2">
                <FaBars className="mx-1 text-danger"/>
                <div className="header-text">
                    <nav className="header-text mx-1">
                        <ol className="breadcrumb">
                            <li className="breadcrumb-item active text-danger"> {number}.{date}.823784 </li>
                            <li className="text-secondary"> &nbsp; {'>'} Home </li>
                        </ol>
                    </nav>                
                </div>
            </div>
        </div>
        
    )
}

export default PageHeader;