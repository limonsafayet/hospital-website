import Reac from 'react'
import img from "../../assets/images/notfound.jpg"

function NotFound() {
    return (
        <div className="mt-5 mb-5 text-center">
            <img src={img} alt="not found" />
        </div>
    )
}

export default NotFound
