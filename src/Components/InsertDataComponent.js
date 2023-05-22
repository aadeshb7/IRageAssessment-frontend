import { useState } from 'react';
import './ComponentStyles/InsertDataComponent.css'
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';
import Button from 'react-bootstrap/Button';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';


function InsertDataComponent() {
    const [inputs, setInputs] = useState({});

    const navigate = useNavigate();

    const handleChange = (event) => {
        const { name, value, type } = event.target;
        setInputs(values => ({ ...values, [name]: type === 'number' ? parseFloat(value) : value }))
    }

    const submit = (event) => {
        console.log(inputs)
        // const form = event.currentTarget;
        // if (form.checkValidity() === false) {
        event.preventDefault();
        //     event.stopPropagation();
        // }
        if (inputs.hasOwnProperty("tag1") && inputs.hasOwnProperty("tag2") && inputs.hasOwnProperty("tag3")
            && inputs.hasOwnProperty("metric2") && inputs.hasOwnProperty("metric1")) {
            insertData([inputs]);
        }
        // setValidated(true);
    }

    const navigateToHomepage = () => {
        console.log("hi")
        navigate("/")
    }

    const insertData = (inputs) => {
        axios.post("http://localhost:5050/insertData", {
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
                    <Col>Tag1
                        <Form.Control
                            required
                            type="text"
                            name="tag1"
                            onChange={handleChange}
                        />
                    </Col>
                    <Col>Tag2
                        <Form.Control
                            required
                            type="text"
                            name="tag2"
                            onChange={handleChange}
                        />
                    </Col>
                    <Col>Tag3
                        <Form.Control
                            required
                            type="text"
                            name="tag3"
                            onChange={handleChange}
                        />
                    </Col>
                    <Col>Metric1
                        <Form.Control
                            required
                            type="number"
                            step='0.01'
                            name="metric1"
                            onChange={handleChange}
                        />
                    </Col>
                    <Col>Metric2
                        <Form.Control
                            required
                            type="number"
                            step='0.01'
                            name="metric2"
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

export default InsertDataComponent;