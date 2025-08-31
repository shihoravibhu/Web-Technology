// Lab 11

// 3. Display Students stored in array using ReactJS. (B)
function MapFac(){

    const faculty = [
        {id: 1, name: "Dr. Smith", department: "Computer Science"},
        {id: 2, name: "Prof. Johnson", department: "Mathematics"},
        {id: 3, name: "Dr. Lee", department: "Physics"},
        {id: 4, name: "Prof. Brown", department: "Chemistry"},
        {id: 5, name: "Dr. Taylor", department: "Biology"}
    ];

    return (
        <>
        {
            faculty.map((fac)=>{
                return (
                <tr>
                    <td>{ fac.id }</td>  
                    <td>{ fac.name }</td>  
                    <td>{ fac.department }</td>
                </tr>
                )
            })
        }
        </>
    )
}

export default MapFac;