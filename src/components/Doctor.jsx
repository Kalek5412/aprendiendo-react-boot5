import React from 'react'
import ada from "../images/ada_lizbeth.jpeg"
import adri from "../images/adriana_vecino.jpg"
import ander from "../images/anderson_tognon.jpeg"

export const Doctor = () => {
    return (
        <>
            <center>
                <div className="container" style={{ marginTop: 20 }}>
                    <div class="row">
                        <div class="col-lg-4">
                            <img src={ada} className="rounded-circle" alt="..." width="140" height="140" />
                            <h2>Heading</h2>
                            <p>Some representative placeholder content for the three columns of text below the carousel. This is the first column.</p>
                            <p><a class="btn btn-secondary" href="#">View details &raquo;</a></p>
                        </div>
                        <div class="col-lg-4">
                            <img src={adri} className="rounded-circle" alt="..." width="140" height="140" />
                            <h2>Heading</h2>
                            <p>Another exciting bit of representative placeholder content. This time, we've moved on to the second column.</p>
                            <p><a class="btn btn-secondary" href="#">View details &raquo;</a></p>
                        </div>
                        <div class="col-lg-4">
                            <img src={ander} className="rounded-circle" alt="..." width="140" height="140" />
                            <h2>Heading</h2>
                            <p>And lastly this, the third column of representative placeholder content.</p>
                            <p><a class="btn btn-secondary" href="#">View details &raquo;</a></p>
                        </div>
                    </div>

                </div>
            </center>
        </>
    )
}
