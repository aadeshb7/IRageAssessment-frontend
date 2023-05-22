import { useState } from 'react';
import './ComponentStyles/InsertDataComponent.css'
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';
import Button from 'react-bootstrap/Button';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';


function InsertMultipleDataComponent() {
    const defaultNumber = 0;
    const [inputs, setInputs] = useState({});

    const navigate = useNavigate();

    const handleChange = (event) => {
        const { name, value, type } = event.target;
        setInputs(values => ({ ...values, [name]: type === 'number' ? parseFloat(value) : value }))
    }

    // const validateEnd = () => {
    // }

    const submit = (event) => {
        console.log(inputs)
        // const form = event.currentTarget;
        // if (form.checkValidity() === false) {
        event.preventDefault();
        // event.stopPropagation();
        // }
        console.log(inputs["start"])
        if (inputs["start"] < inputs["end"]) {
            insertData(inputs);
        }
        else (
            alert("End cannot be less than or equal to start. Please make end greater than start")
        )
        // setValidated(true);
    }

    const navigateToHomepage = () => {
        console.log("hi")
        navigate("/")
    }

    const insertData = (inputs) => {
        axios.post("http://localhost:5050/insertMultipleData", {
            'method': 'POST',
            body: inputs,
            headers: {
                'Content-Type': 'application/json'
            },
        }).then(res => {
            if (res.data["data"].length > 0) {
                alert("Data Inserted successfully.");
                navigateToHomepage()
            }
        });
    }

    return (
        <div>
            <Button className="Button-back" variant="primary" type="submit" onClick={navigateToHomepage}>
                Go Back
            </Button>
            <Form >
                <Row>
                    <Col>Start value
                        <Form.Control
                            required
                            type="number"
                            name="start"
                            defaultValue={defaultNumber}
                            onChange={handleChange}
                        />
                    </Col>
                    <Col>End value
                        <Form.Control
                            required
                            type="number"
                            name="end"
                            defaultValue={defaultNumber}
                            onChange={handleChange}
                        />
                    </Col>
                </Row>
                <Button className="Button-submit" variant="primary" type="submit" onClick={submit}>
                    Submit
                </Button>
            </Form>
        </div>
    );
}

export default InsertMultipleDataComponent;