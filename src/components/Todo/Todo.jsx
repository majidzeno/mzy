import "./styles.css";
import React, { useState } from "react";
// import CloseIcon from "../../assets/closeIcon.js";
import { Link, Route } from "react-router-dom";

// function Todo() {
//   const [Todos, setTodos] = useState([]);
//   const [Todo, setTodo] = useState("");

//   const HandleSubmit = (e) => {
//     e.preventDefault();
//     if (Todo !== "") {
//       const newTodo = {
//         text: Todo,
//         completed: false,
//         id: Todos.length + 1,
//       };
//       setTodos([...Todos].concat(newTodo));
//       setTodo("");
//     }
//   };

//   const HandleDelete = (index) => {
//     const newArr = [...Todos];
//     newArr.splice(index, 1);
//     setTodos([...newArr]);
//   };

//   const HandleCheck = (index) => {
//     const newArr = [...Todos];
//     let checkedObj = newArr[index];
//     checkedObj = { ...checkedObj, completed: !checkedObj.completed };
//     newArr.splice(index, 1, checkedObj);
//     setTodos([...newArr]);
//   };

//   return (
//     <div>
//       <form onSubmit={HandleSubmit}>
//         <input
//           type="text"
//           className="Todo-Input"
//           onChange={(e) => setTodo(e.target.value)}
//           value={Todo}
//         />
//         <button type="submit" className="Todo-Button Todo-Add-Button">
//           Add
//         </button>
//       </form>

//       {Todos.map((Todo, todoIndex) => (
//         <div key={Todo.id} className="instruction">
//           <h3 className={`${Todo.completed ? "completed" : ""}`}>
//             {Todo.text}
//           </h3>
//           <div>
//             <input type="checkBox" onInput={(e) => HandleCheck(todoIndex)} />
//             <button
//               type="button"
//               className="Todo-Button Todo-Delete-Button"
//               onClick={(e) => HandleDelete(todoIndex)}
//             >
//               delete
//             </button>
//           </div>
//         </div>
//       ))}
//     </div>
//   );
// }


const Products = ({ match }) => {

  const productsData = [
    {
      id: 1,
      name: 'NIKE Liteforce Blue Sneakers',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin molestie.',
      status: 'Available'
    
    },
    {
      id: 2,
      name: 'Stylised Flip Flops and Slippers',
      description: 'Mauris finibus, massa eu tempor volutpat, magna dolor euismod dolor.',
      status: 'Out of Stock'
    
    },
    {
      id: 3,
      name: 'ADIDAS Adispree Running Shoes',
      description: 'Maecenas condimentum porttitor auctor. Maecenas viverra fringilla felis, eu pretium.',
      status: 'Available'
    },
    {
      id: 4,
      name: 'ADIDAS Mid Sneakers',
      description: 'Ut hendrerit venenatis lacus, vel lacinia ipsum fermentum vel. Cras.',
      status: 'Out of Stock'
    }

   //The rest of the data has been left out for code brevity.

];
/* Create an array of `<li>` items for each product */
 var linkList = productsData.map( (product) => {
   return(
     <li key={product.id}>
       <Link to={`${match.url}/${product.id}`}>
         {product.name}
       </Link>
     </li>
     )

   })

 return(
   <div>
       <div>
        <div>
          <h3> Products</h3>
          <ul> {linkList} </ul>
        </div>
       </div>

       <Route path={`${match.url}/:productId`}
           render={ (props) => <Product data={productsData} {...props} />}/>
       <Route exact path={match.url}
           render={() => (
           <div>Please select a product.</div>
           )}
       />
   </div>
 )
}

const Product = ({match,data}) => {
  let product= data.find(p => p.id === Number(match.params.productId));
  let productData;

  if(product)
    productData = <div>
      <h3> {product.name} </h3>
      <p>{product.description}</p>
      <hr/>
      <h4>{product.status}</h4>  </div>;
  else
    productData = <h2> Sorry. Product doesnt exist </h2>;

  return (
    <div>
      <div>
         {productData}
      </div>
    </div>
  )    
}

export default Products;
