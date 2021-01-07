import React from 'react'
import Images from './component/Images';

class App extends React.Component {
    constructor(props) {
        console.log("App Constructor");
        super(props);
        console.log(props);
        this.state = { title: "Hello REACT 2", isShowing: false }
        // this.handleClick = this.handleClick.bind(this);
    }

    // states are objects and immutable i.e. cannot be changed

    // work correctly i.e. most prefered
    handleClick = () => {
        this.setState({ isShowing: !this.state.isShowing });

    }

    // TypeError: Cannot read property 'setState' of undefined. Since, "this" is unknown and needs to bind in constructor
    // handleClick() {
    //     this.setState({ isShowing: !this.state.isShowing })
    // }

    componentDidMount() {
        console.log("App Component Mounted");
        // since "title" state is changed. render() will run again 
        // this.setState({ title: "React LifeCycle Practice" })

    }

    componentDidUpdate() {
        // any state is changed, it updates
        console.log("App Component Updated");
    }
    // this function won't run unless App component unmounted
    componentWillUnmount() {
        console.log("App Component Unmounted");
    }
    render() {
        console.log("App Component render()");
        return (
            <section className="flex justify-center">
                <div className="w-1/2">

                    <div className="text-center">
                        <div className="my-4">
                            {this.state.title}
                        </div>
                        <div className="my-3">
                            See Console for LifeCycle Activity
                        </div>
                        <button className="my-2 p-1 bg-blue-600 text-white" onClick={this.handleClick}>
                            Toogle Image
                        </button>
                        {
                            this.state.isShowing ?
                                <Images /> : null
                        }
                    </div>
                </div>
            </section>
        )
    }
}

// function App({ title }) {
//     return <div>
//         <div
//             // style={{
//             //     padding: "2rem",
//             //     border: "1px solid black",
//             //     backgroundColor: "gray",
//             //     color: "white"
//             // }}

//             // className="box"
//             className="bg-gray-600 text-white p-5 border"
//         >
//             {title}
//         </div>
//     </div>;
// }

export default App;