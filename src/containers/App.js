import React, {useState, useEffect} from "react";
import {connect} from "react-redux";
import CardList from "../components/CardList";
import  SearchBox from "../components/SearchBox";
import "./App.css";
import Scroll from "../components/Scroll";
import ErrorBoundry from "../components/ErrorBoundry";

import {requestRobots, SetSearchField } from "../actions";

const mapStateToProps =  state => {
    //console.log(state.searchField)
    return {
        //searchField: state.searchRobots.searchField
        searchField: state.searchRobots.searchField,
        robots : state.requestRobots.robots,
        isPending: state.requestRobots.isPending,
        error: state.requestRobots.error
    }
}

const mapDispatchToProps = (dispatch) =>{
    //console.log(dispatch)
    return {
        onSearchChange: (event) => dispatch(SetSearchField (event.target.value)), 
        // onRequestRobots: () => requestRobots(dispatch)
        onRequestRobots: () => dispatch(requestRobots())
    }
}


function App (props){
  
    // constructor(){
    //     super();
    //     this.state ={
    //         robots: [],
    //         searchfield:""
    //     }
    // }
    //const [robot, setRobots] = useState([]);
   // const [searchfield, SetSearchField ] = useState('')
    //const {searchField, onSearchChange} = props;

    // componentDidMount(){
    //     fetch("https://jsonplaceholder.typicode.com/users")
    //     .then(response=>  response.json())
    //     .then(users=>{
    //         this.setState({robots: users})
    //     })
       
    // }
    useEffect(()=>{
       // console.log(props.store.getState())
        // fetch("https://jsonplaceholder.typicode.com/users")
        //     .then(response=>  response.json())
        //     .then(users=>{
        //         setRobots( users)
        //     }) 
       
         onRequestRobots()
    },[])

//    const onSearchChange = (e)=>{
//         SetSearchField ( e.target.value);   
//     }
console.log(props)
        const {searchField, onSearchChange, onRequestRobots, robots, isPending} = props;
        const filteredRobots = robots.filter(robot=>{
            return robot.name.toLocaleLowerCase().includes(searchField.toLocaleLowerCase());
        })
     return isPending ?
        <h1 className="tc">loading</h1>:
      (
            <div className="tc">
                <h1 className="f2">RoboFriends</h1>
                <SearchBox searchChange={onSearchChange}/>
               <Scroll>
                   <ErrorBoundry>
                        <CardList robots={filteredRobots}/>
                    </ErrorBoundry>
               </Scroll>
            </div>
        );

}
export default connect(mapStateToProps, mapDispatchToProps)(App);