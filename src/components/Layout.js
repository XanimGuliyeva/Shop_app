import React from 'react'
import { Outlet,Link } from 'react-router-dom';

const Layout = ({categories}) => {

    const renderCategory = () => {
        // const categories = [];
        // for(let i=0; i<results.length; i++){
        //   categories.push(<Category key={results[i].id} id={results[i].id} title={results[i].title}/>)
        // }
        // return categories;
    
        return categories.data.map(d => 
            // <Category key={d.id} id={d.id} title={d.title} onCategoryClick={()=>handlecategoryClick(d.id)}/>
            <li key={d.id}>
              <Link to={`/categories/${d.id}`}>{d.title}</Link>
            </li>
        )
      }

  return (
    <React.Fragment>
      <header style={{display:'flex', justifyContent:'space-between', fontSize:'20px'}}>
        <Link  to='/'><span>Home</span></Link>
        <span>Our Store</span>
        <Link to='/basket'><span>Cart: </span></Link>
      </header>
      <section>
          <nav>
            {categories.errorMessage && <div>Error: {categories.errorMessage}</div>}
              <ul>
              {
                categories.data && renderCategory()
              }
              </ul>
          </nav>
          <main>
            <Outlet/>
          </main>
        </section>
        <footer>
              <Link to={"/"}>Home</Link> | <Link to={"/basket"}>Basket</Link>
        </footer>
    </React.Fragment>
  )
}

export default Layout