import React, {useState} from 'react';
import { useDispatch, useSelector } from "react-redux";
import style from '../AdminRecipe/AdminRecipe.module.css'
import { adminDeleteRecipe, getAllRecipes } from '../../../redux/actions/recipesActions'



const AdminRecipe = (props) => {

    const dispatch = useDispatch();
    const AllRecipes = useSelector((state) => state.recipes.docs)


     const deleteRecipe = (id) => {
           // console.log(id);
        dispatch(adminDeleteRecipe(id))
        dispatch(getAllRecipes())

    }

    return (
        <div className={style.oveflow}>
            <div className={style.container}>
                <div className={style.imgContainer}>
                    <img className={style.img} src={props.image} alt="" />
                    <h1 className={style.name}>{props.name}</h1>
                </div>
                
            
                    <div className={style.btnContainer}>
                        {/* <button className={style.btn}>Editar</button> */}
                        <button className={style.btn2} onClick={() => deleteRecipe(props.id)}>Borrar</button>
                    </div>
            </div>
        </div>
    );
};

export default AdminRecipe;