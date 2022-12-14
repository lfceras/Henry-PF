import React, {useEffect, useState} from 'react'
import style from './Felicidades.module.css'
import img from '../../assets/dosdagas-png-transparente.png'
import check from '../../assets/pngegg.png'
import {userPayments} from '../../redux/actions/actions'
import { useDispatch } from 'react-redux'
 
const Felicidades = () => {
    const dispatch = useDispatch();
    const [total, setTotal] = useState(0);
    let userProduct = JSON.parse(window.localStorage.getItem('userProduct'));
    console.log(userProduct);
    const products = userProduct.products

    useEffect(() => {
        dispatch(userPayments(userProduct))
    }, [dispatch]);
    window.localStorage.setItem("carrito", "vacio");

    let suma = 0;
        for (let i = 0; i < products.length; i++) {
            suma = suma + (products[i].precioUnitario * products[i].cantidad)
        }
     
  return (
    <div className={style.Felicidades}>
        <div className={style.Conteiner}>
            <div className={style.logo}>
                <img src={img} alt="" />
            </div>
            <div className={style.agradecimiento}>
                <h1>Felicidades {userProduct.name} por tu compra, ha salido todo correcto.</h1> 
            </div>
            <div className={style.recibo}>
                <div className={style.title}>
                    <h1>Recibo de Venta</h1>
                </div>
                <div className={style.grilla}>
                    <div className={style.grid}>
                        <div>Producto</div>
                        <div>Cantidad</div>
                        <div>Precio por Unidad</div>
                        <div>Precio Total</div>
                    </div>
                    <div >
                       {
                          products.map((p)=>{
                            //let count = total + p.price
                            //setTotal(count)
                            console.log(products);
                            return(
                                <div className={style.grid} key={p.name}>
                                    <div className={style.elemento}>{p.name}</div> 
                                    <div className={style.elemento}>{p.cantidad}</div> 
                                    <div className={style.elemento}>${p.precioUnitario}</div> 
                                </div>    
                                )
                                    
                            })
                       } 
                        <div className={style.grid}>
                            <div className={style.elemento}></div>
                            <div className={style.elemento}></div>
                            <div className={style.elemento}></div>
                        <div className={style.elemento}>${suma}</div></div>
                    </div>
                </div>
            </div>
            <div className={style.contacto}>
                <div className={style.contacto1}>
                    <div className={style.contactoConUsted}>
                       <h1>En breve no estaremos contactando con Ustes.</h1> 
                    </div>
                    <div className={style.contactoAgradesco}>
                        <h1>Machas Gracias por Confiar en Nosotro.</h1>
                    </div>
                </div>
                <div className={style.check}>
                    <img src={check} alt="" />
                </div>
            </div>
            
        </div>
    </div>
  )
}

export default Felicidades