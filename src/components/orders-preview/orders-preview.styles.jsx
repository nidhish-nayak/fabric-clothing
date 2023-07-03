import styled from "styled-components";

export const OrdersPreviewContainer = styled.div`
  margin-top: 6em;
`

export const OrderTable = styled.table`
  margin-top: 1em;
  border-collapse: collapse;
  width: 100%;
  
  td, th {
    border: 1px solid #cecece;
    padding: 8px;
  }

  th:nth-child(1), td:nth-child(1), td:nth-child(3), th:nth-child(3),
  td:nth-child(4), th:nth-child(4), td:nth-child(5), th:nth-child(5) {
    text-align: center;
  }

  td:nth-child(2), th:nth-child(2) {
    padding-left: 1em;
  }

  tr:nth-child(even) {
    background-color: white;
  }

  th {
    padding-top: 12px;
    padding-bottom: 12px;
    text-align: left;
    background-color: #ececec;
    color: black;
  }

  @media (max-width: 768px) {
    td:nth-child(2), th:nth-child(2) {
      padding-left: 8px;
    }
  }

  @media (max-width: 400px) {
    th:nth-child(1), td:nth-child(1) {
      display: none;
    } 
  }

  // styles for orders-row.component.jsx
  tr .successful {
    color:green;
  }

  tr .failed {
    color: red;
  }

`