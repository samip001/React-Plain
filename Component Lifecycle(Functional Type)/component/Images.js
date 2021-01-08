
import React from 'react'

function Images() {

    // Not used for unmounted like Class Component
    // const [myInterval, setMyInterval] = useState(null);

    // Component Mounted only
    useEffect(() => {
        console.log("Images Component Mounted");
        // clear in return() as ComponentWillUnmount()
        const interval =
            setInterval(() => {
                console.log("Hello Image");
            }, 1000);


        // it will unmount the componnet
        // when return function is used
        return () => {
            console.log("Images Component Unmount");
            clearInterval(interval);
        }
    }, []);
    return (
        <section>
            <img src="https://images.unsplash.com/photo-1609757992359-4b93ee52defd?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1055&q=80" alt="img " />
        </section>
    )
}

export default Images