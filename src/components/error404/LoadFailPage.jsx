import { useNavigate } from "react-router-dom"
import "../../css/ItemDetail.css"

const LoadFailPage = () => {

  const redirection = useNavigate();

  setTimeout(() => {
    redirection("/")
  }, 5000);

  return (
    <>
    <div className="container-manga">
        <img className="img-one-manga" alt="error-404-gif" src="https://www.icegif.com/wp-content/uploads/2022/10/icegif-799.gif"/>
        <div>
          <h1 className="title-one-manga">Error 404</h1>
          <p>Te estamos redirigiendo...</p>
        </div>
    </div>
    </>
  )
}
export default LoadFailPage