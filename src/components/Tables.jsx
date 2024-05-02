const Table = ({ transactions }) => {
    return (
      <>
      <table>
         
      <thead>
          <tr>
            <th>Category</th>
            <th>Description</th>
            <th>Amount</th>
          </tr>
        </thead>
          
       
       <tbody>
          {transactions.map((transaction, index) => (
            <tr key={index}>
                <td>{transaction.date}</td>
              <td>{transaction.category}</td>
              <td>{transaction.description}</td>
              <td>{transaction.amount}</td>
            </tr>
          ))}
       </tbody>
      </table>
      </>
    );
  };
  
  
  export default Table;
  