import React from 'react';

const TableRow = ({ coin }) => {
  return (
    <tr>
      <td>{coin.name}</td>
      <td>{coin.id}</td>
      <td>
        <img src={coin.image} alt={coin.name} style={{ width: '30px', height: '30px' }} />
      </td>
      <td>{coin.symbol}</td>
      <td>{coin.current_price}</td>
      <td>{coin.total_volume}</td>
    </tr>
  );
};

export default TableRow;
