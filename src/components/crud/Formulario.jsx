import React from 'react'

export const Formulario = () => {
    return (
        <>
            <div className="container">
                <div className="row"><div className="col-6"><h1>Formulario Con Bootstrap</h1></div></div>
                <form id="miFormulario" onSubmit={botonGuardar}>
                    <div className="row">
                        <div className="col-6">
                            <div className="form-floating mb-3">
                                <input type="text" className="form-control" id="txtnom" placeholder=" " required onChange={(e) => setNombre(e.target.value)} />
                                <label htmlFor="txtnom">Digite El Nombre</label>
                            </div>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-6">
                            <div className="form-floating mb-3">
                                <input type="number" min={1} max={150} className="form-control" id="txteda" placeholder=" " required onChange={(e) => setEdad(e.target.value)} />
                                <label htmlFor="txteda">Digite La Edad</label>
                            </div>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-2">
                            <div className="form-check">
                                <input className="form-check-input" type="radio" name="opsex" id="op1" value="Masculino" required onChange={(e) => setSexo(e.target.value)} />
                                <label className="form-check-label" htmlFor="op1">Masculino</label>
                            </div>
                            <div className="form-check">
                                <input className="form-check-input" type="radio" name="opsex" id="op2" value="Femenino" onChange={(e) => setSexo(e.target.value)} />
                                <label className="form-check-label" htmlFor="op2">Femenino</label>
                            </div>
                            <div className="form-check">
                                <input className="form-check-input" type="radio" name="opsex" id="op3" value="No Especifica" onChange={(e) => setSexo(e.target.value)} />
                                <label className="form-check-label" htmlFor="op3">No Especifica</label>
                            </div>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-6">
                            <select className="form-select" id="cboest" name="cboest" defaultValue="" required onChange={(e) => setEstudios(e.target.value)} >
                                <option value="">Seleccione Nivel De Estudios</option>
                                <option id="cboop1" value="Sin Estudios">Sin Estudios</option>
                                <option id="cboop2" value="Basica">Basica</option>
                                <option id="cboop3" value="Media">Media</option>
                                <option id="cboop4" value="Superior">Superior</option>
                            </select>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-4">
                            <div className="form-check">
                                <input className="form-check-input" type="checkbox" value="" id="chk1" name="chk1" required onChange={(e) => setTerminos(e.target.checked)} />
                                <label className="form-check-label" htmlFor="chk1">Acepto Los Términos y Condiciones</label>
                            </div>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-6">
                            <input type="submit" id="btnsave" value="Guardar" className="btn btn-primary" />
                            &nbsp;
                            <input type="reset" id="btnclean" value="Limpiar Campos" className="btn btn-primary" onClick={() => limpiarCampos()} />

                        </div>
                    </div>
                </form>

                <br />

                <div className="table-responsive col-10">

                    {registros.length > 0 &&

                        <>
                            <table className="table table-bordered table-hover">
                                <thead className="table-primary text-center">
                                    <tr>
                                        <th>#</th>
                                        <th>Nombre</th>
                                        <th>Edad</th>
                                        <th>Sexo</th>
                                        <th>Estudios</th>
                                        <th>Terminos</th>
                                        <th>Eliminar</th>
                                    </tr>
                                </thead>
                                <tbody className="text-center align-baseline">

                                    {
                                        registros.map((x, index) => (
                                            <tr key={index}>
                                                <td>{index + 1}</td>
                                                <td>{x.nombre}</td>
                                                <td>{x.edad}</td>
                                                <td>{x.sexo}</td>
                                                <td>{x.estudios}</td>
                                                <td>{x.terminos ? "Aceptados" : "Rechazados"}</td>
                                                <td className="text-center">
                                                    <button type="button" className="btn btn-outline-danger" onClick={() => botonEliminar(index)}>
                                                        <i className="bi bi-trash3-fill"></i>
                                                    </button>
                                                </td>
                                            </tr>
                                        ))
                                    }

                                </tbody>
                            </table>

                            <button type="button" className="btn btn-danger btn-md col-12" onClick={() => botonEliminarTodos()}  >
                                <h5>Borrar Todos Los Elementos!!</h5>
                            </button>
                        </>

                    }

                </div>

                <div className="row">
                    <div className="col-6">
                        {registros.length === 0 &&
                            <>
                                <h2 className="text-danger">No Hay Registros Para Listar!!</h2>
                            </>
                        }
                    </div>
                </div>

            </div>

        </>
    )
}
