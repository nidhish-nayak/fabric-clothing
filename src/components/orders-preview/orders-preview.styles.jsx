import styled from "styled-components";

export const OrdersPreviewContainer = styled.div`
  margin-top: 4em;
  // text-align: center;
`

export const OrderTable = styled.table`
  margin-top: 1em;
  border-collapse: collapse;
  width: 100%;
  
  td, th {
    border: 1px solid #ddd;
    padding: 8px;
  }

  tr:nth-child(even) {
    background-color: white;
  }

  tr:hover {
    background-color: #ececec;
  }

  th {
    padding-top: 12px;
    padding-bottom: 12px;
    text-align: left;
    background-color: #374151;
    color: white;
  }
`