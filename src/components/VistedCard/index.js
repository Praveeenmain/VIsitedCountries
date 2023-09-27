import './index.css'
const VistedCard=(props)=>{
     const{vistedimageDetails,removeVisitedCard}=props

     const{imageUrl,name,id}=vistedimageDetails
     const removeCard=()=>(
          removeVisitedCard(id)
     )
     return(
          <li className="visited-container">
            <img  className="country-image" src={imageUrl} alt="thumbnail"/>
             <div className="country-details">
              <div>
              <p>{name}</p>
              </div>
               <div>
              <button onClick={removeCard} className="remove"> remove</button>
              </div>
             </div>
          </li>
     )

}
export default VistedCard