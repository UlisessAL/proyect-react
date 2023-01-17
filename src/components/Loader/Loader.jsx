import { MrMiyagi } from '@uiball/loaders'
import "../../css/Loader.css"


const Loader = () => {


  return (
    <div className='loader-div'>
    <MrMiyagi 
        size={100}
        lineWeight={3.5}
        speed={1} 
        color="black" 
    />
    <h2 className='h2-loader'>Cargando...</h2>
    </div>
  )
}
export default Loader