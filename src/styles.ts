import styled from 'styled-components';


export const Container = styled.div`
font-size:13px;
color: #676767;
table {
  border-spacing: 0;
  width:100%;
  background-color: #fff;

  thead{
  background-color: #f4f4f4;
  }


  tr:nth-child(even) {
  background-color: #f4f4f4;
}


  tr {
    :last-child {
      td {
        border-bottom: 0;
      }
    }
  }

  th,
  td {
    margin: 0;
    padding: 0.5rem;
    color:#333333;
    height: 25px;
    text-align:left;

    :last-child {
      border-right: 0;
    }
  }
}

.pagination {
  padding: 1rem;
  background-color: #D8D8D8;
}
`
