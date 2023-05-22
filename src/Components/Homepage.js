import { Link } from 'react-router-dom';
import DataTableComponent from './DataTableComponent';
import Button from 'react-bootstrap/Button';
import './ComponentStyles/Homepage.css';

function Homepage() {

    const routeChange = () => {
    }

    return (
        <div>
            <Link to='/insertData' className='Button'>
                <Button
                    variant="primary" size="lg"
                    onClick={routeChange}>
                    Insert Data
                </Button>
            </Link>
            <Link to='/insertMultipleData' className='Button'>
                <Button
                    variant="primary" size="lg"
                    onClick={routeChange}>
                    Insert Multiple Data
                </Button>
            </Link>
            <div style={{ 'margin-top': '20px' }} >
                <DataTableComponent />
            </div>
        </div >
    );
}

export default Homepage;