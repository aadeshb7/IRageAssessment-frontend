import axios from 'axios';
import { useEffect, useState } from 'react';
import BootstrapTable from 'react-bootstrap-table-next';
import paginationFactory from 'react-bootstrap-table2-paginator';
import filterFactory, { numberFilter } from 'react-bootstrap-table2-filter';
import 'react-bootstrap-table-next/dist/react-bootstrap-table2.min.css';


function DataTableComponent() {
    const [data, setData] = useState([]);

    const numberFormatter = (cell) => {
        return cell.toFixed(2)
    }

    const columns = [
        {
            dataField: "tag1",
            text: "Tag1",
            sort: true
        },
        {
            dataField: "tag2",
            text: "Tag2",
            sort: true
        },
        {
            dataField: "tag3",
            text: "Tag3",
            sort: true
        },
        {
            dataField: "metric1",
            text: "Metric1",
            sort: true,
            filter: numberFilter({ style: { display: 'inline-grid' } }),
            formatter: numberFormatter
        },
        {
            dataField: "metric2",
            text: "Metric2",
            sort: true,
            filter: numberFilter({ style: { display: 'inline-grid' } }),
            formatter: numberFormatter
        }]

    const defaultSorted = [{
        dataField: 'tag1',
        order: 'asc'
    }]

    const getData = () => {
        axios("http://localhost:5050").then(res => {
            // console.log(res.data)
            setData(res.data['data'])
            data.forEach((object, index) => {
                object.id = index
            });
        });
    }

    useEffect(() => {
        getData()
    }, {});

    return (
        <div>
            <BootstrapTable
                bootstrap4
                bordered
                keyField='id'
                data={data}
                columns={columns}
                striped
                hover
                defaultSorted={defaultSorted}
                pagination={paginationFactory({ showTotal: true })}
                filter={filterFactory()}
            />
        </div>
    );
}

export default DataTableComponent;