import React, { useEffect, useState } from 'react'

export const Mensaje = () => {

    const obtenerRegistros = () =>{
        var datos = localStorage.getItem("registros");
        if(datos){
            return JSON.parse(datos)
        }else{
            return []
        }
    }

    const [registros, setRegistros] = useState(obtenerRegistros())

    const [nombre, setNombre] = useState("")
    const [correo, setCorreo] = useState("")
    const [mensaje, setMensaje] = useState("")

    const botonGuardar = (e) => {
        e.preventDefault();
        var obj={nombre,correo,mensaje};
        setRegistros([...registros,obj]);
        limpiarFormulario();

    }

/*     function botonGuardarAux() {

    }
 */

    const limpiarFormulario = () => {
        setNombre("");
        setCorreo("");
        setMensaje("");
        document.getElementById("miFormulario").reset();
    }

    useEffect(()=>{
        localStorage.setItem("registros",JSON.stringify(registros));
    },[registros])

    return (
        <center>
            <div className='container' style={{ width: "70%", marginTop: 20 }}>
                <form action="" id="miFormulario" onSubmit={botonGuardar}>
                    <h1 className='h1'>mensajes</h1>
                    <input onChange={(e)=>setNombre(e.target.value)} type="text" className='form-control form-control-lg' />
                    <input onChange={(e)=>setCorreo(e.target.value)} type="email" className='form-control form-control-lg' />
                    <textarea onChange={(e)=>setMensaje(e.target.value)} className="fomr-control form-control-lg" id="">

                    </textarea>
                    <button className='btn btn-primary btn-lg'>enviar mensaje</button>

                </form>
            </div>
        </center>

    )
}
