import React, { useState, useEffect } from "react";
import Card from 'react-bootstrap/Card'
import Row from 'react-bootstrap/Row'
import { useNavigate } from 'react-router-dom';




function AdminProductCard(props) {
    const navigate = useNavigate();
    const [stock, setStockCount] = useState(props.stock)

    function handleSubmit(event) {
        event.preventDefault();
        setStockCount(event.target.value)
        fetch(`https://clarks-backend.herokuapp.com/${props.id}`, {
            method: "PATCH",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({ stock }),
        });
        alert("Stock updated");   
        navigate('/admin-tools');

    }



        return (
        <Card className="ms-3 mt-5 p-1 mobile-cards">
            <Row>
                <Card.Body>
                    <div>{props.name}</div>

                    <form onSubmit={handleSubmit}>
                        <div class="mb-3">
                            <label htmlfor="stock" class="form-label">Stock Count</label>
                            <input 
                                type="stockCount" 
                                class="form-control" 
                                id="stock-count"
                                value={stock}
                                onChange={(event) => setStockCount(event.target.value)}
                                
                            />
                        </div> 
                        <button type="submit" className="btn btn-dark">Update Stock</button>
                    </form>
                </Card.Body>
            </Row>
        </Card>
    )
}

export default AdminProductCard;


