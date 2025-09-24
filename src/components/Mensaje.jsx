import React from 'react'

export const Mensaje = () => {
    return (
        <center>
            <div className='container' style={{width:"70%", marginTop:20}}>
                <form action="" id="miFormulario">
                    <h1 className='h1'>mensajes</h1>
                    <input type="text" className='form-control form-control-lg' />
                    <input type="email" className='form-control form-control-lg' />
                    <textarea className="fomr-control form-control-lg" id="">
                    
                    </textarea>
                        <button className='btn btn-primary btn-lg'>enviar mensaje</button>

                </form>
            </div>
        </center>

    )
}
