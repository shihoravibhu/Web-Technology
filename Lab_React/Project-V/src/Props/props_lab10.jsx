// 1. Demonstrate the ReactJS props. (A)

    // function Abc(props){

    //     return(
    //         <>

    //         <h1>heyy {props.name}</h1>
    //         <h2>what {props.age}</h2>
            
    //         </>
    //     )
    // }

    // export default Abc

                     // or

    // function Abc2({name , age}){

    //     return(
    //         <>

    //         <h1>heyy {name}</h1>
    //         <h2>what {age}</h2>
            
    //         </>
    //     )
    // }

    // export default Abc2


            // or (perent child)


    function GrandParent(props){
        
        return(
            <>
            <Parent name = {props.name}  age = {props.age} />
            </>
        )
    }

    function Parent(props){
        
        return(
            <>
            <Child name = {props.name}  age = {props.age} />
            </>
        )
    }

    function Child(props){

        return(
            <>
            <h1>heyyy {props.name}</h1>
            <h2>heyyy {props.age}</h2>
            </>
        )
    }

    export {GrandParent}

//  2. Demonstrate the Event Handling in ReactJS. (A)

//    main ma che


//  3. WAP in ReactJS to display the element if it has attribute called isDisplay to be true (using 
// conditional rendering) (A)

// main ma 