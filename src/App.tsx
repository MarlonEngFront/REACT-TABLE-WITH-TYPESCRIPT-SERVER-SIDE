import React, { useEffect, useState } from "react";
import axios from "axios";


interface TableMib {
  show: any;
  name: string;
  id: number;
}


function App() {
  const [ListTable, setFilmes] = useState<TableMib[]>([]);

  
    useEffect(() => { 
      axios.get("http://mib-services.uuxinternal.com:9666/DmmApi/api/v1/agent/details")
      .then((response) => {
          setFilmes(response.data);
          
          console.log(response.data);
          console.log(response.status);
          console.log(response.statusText);
          console.log(response.headers);
          console.log(response.config);
          console.log(response.request);
        });
    }, []);
  
    return (
      <div>
        <h1>Filme</h1>
        <table>
          <tr>
            <th>ID</th>
            <th>Name</th>
          </tr>
          {ListTable.map((content) => (
            <tr>
              <td>{content.id}</td>
              <td>{content.name}</td>
            </tr>
          ))}
        </table>
      </div>
    );
  }

export default App;
