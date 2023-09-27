import './index.css'
const VistedName=(props)=>{
    const{visteddetails,markVisited}=props
    const {name,isVisited,id}=visteddetails

    const onAddCard=()=>(
        markVisited(id)
    )

    return(
       <li className="name-details">
      <p className="country-name">{name}</p>
      {isVisited ? (
        <p className="visited">Visited</p>
      ) : (
        <button className="country-button" onClick={onAddCard} type="button">
          Visit
        </button>
      )}
    </li>
    )



}
export default VistedName