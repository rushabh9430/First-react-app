const data = {
  name: "riyush",
};
function Home(props) {
  return (
    <div>
      name is {data.name} and parents object name is {props.data2[0].firstName}
      <table border={1}>
        <tbody>
            <tr>
                <th>firstName</th>
                <th>lastName</th>
                <th>Age</th>
            </tr>
            {
                props.data2.filter((i)=> i.age > 25).map( (i) => {
                    return(
                        <tr key={Math.random()}>
                            <td>{i.firstName}</td>
                            <td>{i.lastName}</td>
                            <td>{i.age}</td>
                        </tr>
                    )
                })
            }
        </tbody>
      </table>
    </div>
    
  );
}
export default Home;
