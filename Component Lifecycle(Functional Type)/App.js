import React, { useEffect, useRef, useState } from 'react'
import "./assets/css/style.css"
import Images from "./component/Images"
function App() {
    // In functional method
    // no constructor, render method
    
    // state can be defined as following type
    const [title, setTitle] = useState("Hello Title State");
    const [isShowing, setIsShowing] = useState(false);
    // const [didMount, setDidMount] = useState(false); //still problem, since it will re-rendered 2 times

    const mountRef = useRef(false);

    
    // NOTE: ComponentDidMount only
    // all the lifecycle is handled using useEffect
    useEffect(() => {
        // setDidMount(true);
        console.log("App Mounted");
    }, []); // if "[]" is not included, it runs on both mounted and update.
    // After adding "[]", it will runs only mounted


    // ComponentWillUpdate only when "isShowing" value is changed
    useEffect(() => {
        // hack for not running update: 
        // make isShowing value null. since, isShowing value is set false while loading for the first time
        // if (isShowing != null) {
        //     console.log("App Updated");
        // }

        // if (didMount) {
        //     console.log("App Updated");
        // }
        if (mountRef.current) {
            console.log("App Updated");
            setTitle(isShowing ? "Image Clicked" : "Hello Title State");
        } else {
            mountRef.current = true;
        }
    }, [isShowing]);

    // NOTE: Component Unmount shown in Images Component

    // Toogle Click: handle click
    function handleClick() {
        setIsShowing(!isShowing);
    }

    return (
        <section className="flex justify-center">
            {console.log("App Re-rendered")}
            <div className="w-1/2">

                <div className="text-center">
                    <div className="my-4">
                        {title}
                    </div>
                    <div className="my-3">
                        See Console for LifeCycle Activity
                         </div>
                    <button className="my-2 p-1 bg-blue-600 text-white" onClick={handleClick}>
                        Toogle Image
                         </button>
                    {
                        isShowing ?
                            <Images /> : null
                    }
                </div>
            </div>
        </section>
    )
}

export default App;