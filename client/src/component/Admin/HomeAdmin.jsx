import React from 'react'
import CategoryHome from '../CategoryHome/CategoryHome'
import style from '../Home/Home.module.css'
import { Link } from 'react-router-dom'
import { Navigate } from 'react-router-dom';




const HomeAdmin = () => {
   const user = localStorage.getItem("role")
    if(user !== "admin" ){
        return <Navigate to="/"/>
    } 

  return (
    <div>
      <div>
        
          <div className={style.cardcontainer}>
            <Link to="/HAdmin/products">
              <CategoryHome
                title='PRODUCTOS'
                image={"https://firebasestorage.googleapis.com/v0/b/henry-pf.appspot.com/o/tablas.jpg?alt=media&token=132524b4-d106-4c37-a888-d771bdc26f75"}
                
              />
            </Link>
            <Link to="/create">
              <CategoryHome
                title='CREAR PRODUCTO'
                image={"https://firebasestorage.googleapis.com/v0/b/henry-pf.appspot.com/o/c783c958-59a6-4e7c-838a-95632efeea9a.jfif?alt=media&token=dc09c0ea-7333-42b8-bc6f-46dc1e544b1f"}
                desc='Crear un producto'
              />
            </Link>
            <Link to="/recipes">
              <CategoryHome
                title='RECETAS'
                image={"https://firebasestorage.googleapis.com/v0/b/henry-pf.appspot.com/o/8e6d317e-d194-48dc-aeae-50c3d2d65262.jpg?alt=media&token=249c7c6d-8b58-4598-94de-f20c38ef39e9"}
                
              />
            </Link>
            <Link to="/createRecipe">
              <CategoryHome
                title='CREAR RECETA'
                image={"https://firebasestorage.googleapis.com/v0/b/new-proyect-44e15.appspot.com/o/9dbeb4c8-719f-4de4-9d83-30fa41003d7d?alt=media&token=5b8a2ea2-afc3-47f4-80de-cbf26164340c"}
                desc='Crear una receta'
              />
            </Link>
            <Link to="/getAdmin">
              <CategoryHome
                title='CREAR ADMIN'
                image={"https://firebasestorage.googleapis.com/v0/b/new-proyect-44e15.appspot.com/o/9dbeb4c8-719f-4de4-9d83-30fa41003d7d?alt=media&token=5b8a2ea2-afc3-47f4-80de-cbf26164340c"}
                desc='Crear un nuevo administrador'
              />
            </Link>

          
          </div>
        </div>
      </div>
   
  )
}

export default HomeAdmin