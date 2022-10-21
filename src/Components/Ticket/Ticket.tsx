import React, { useEffect, useState } from "react";

function Ticket() {
  const [data, setData] = useState([]);
  useEffect(() => {
    fetch("https://5tsahowkw4.execute-api.eu-west-2.amazonaws.com/Prod/routebaggage")
      .then((response) => response.json())
      .then((data) => setData(data))
      .catch((e) => console.log(e));
  }, []);

  return (
    <div>
      {data.map((ticket) => (
        <p>{ticket}</p>
      ))}
    </div>
  );
}

export default Ticket;
