
import Item from './Item';



const Main = ({getData}) => {

 

  return (
    <div>
      {
        getData.length == 0 ? (<p>No data found</p>):
        ( <div className="grid gap-2 lg:grid-cols-2 ">
        {getData.map((cart) => (
          <Item key={cart.id}
          cart={cart}
          />
         ))} 
      </div> )
      } 
      
    
  </div>
  );
}

export default Main;