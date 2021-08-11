import React from "react";
import { Column } from 'react-table';
import { Container } from './styles';
import Table from "../src/Table";
import axios from "axios";
import { PersonData } from '../src/makeData';


function ReactTableList() {
  const columns: Column<PersonData>[] = React.useMemo(
    () => [
      {
        Header: "ID",
        accessor: "id"
      },
      {
        Header: "Email",
        accessor: "email"
      },
      {
        Header: "First Name",
        accessor: "first_name"
      },
      {
        Header: "Last Name",
        accessor: "last_name"
      }
    ],
    []
  );

  const [data, setData] = React.useState([]);
  const [loading, setLoading] = React.useState(false);
  const [pageCount, setPageCount] = React.useState(0);
  const [pageSize, setPageSize] = React.useState(0);

  // const fetchIdRef = React.useRef(0);

  const fetchData = React.useCallback(({ pageSize, pageIndex }) => {
    setLoading(true);

    axios.get(`https://reqres.in/api/users?page=${pageIndex + 1}`).then(res => {
      setTimeout(() => {
        setData(res.data.data);
        setPageCount(res.data.total_pages);
        setLoading(false);
        setPageSize(res.data.per_page);
        console.log(res.data.data);
        console.log(res.headers.data);
       
      }, 1000);
    });
  }, []);

  return (
    <Container>
      <Table
        columns={columns}
        data={data}
        fetchData={fetchData}
        loading={loading}
        pageCount={pageCount}
        pageSize={pageSize}
      />
    </Container>
  );
}

export default ReactTableList;
