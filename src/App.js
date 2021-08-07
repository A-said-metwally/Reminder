import React , { Component } from 'react';
import { add_Reminder ,remove_Reminder , clear_Reminder } from './actions/Index';
import {connect} from 'react-redux';
import moment from 'moment';
import DatePicker from "react-datepicker"
import "react-datepicker/dist/react-datepicker.css"

import './App.css';

class App extends Component{

  state={
    text: "",
    date:new Date()
  }

  render_Reminders = () =>{
    const {reminders} = this.props
    return (
      <ul className="list-group">
       { reminders.map((reminder) => {
          return (
            <li key={reminder.text.id} className="list-group-item">
              <div className="reminder-data">
                  <h2>{reminder.text}</h2>
                  <p>{moment(new Date(reminder.date)).fromNow()}</p>
              </div>
              <div className="remove btn btn-danger" onClick={() => this.props.remove_Reminder(reminder.id)}>X</div>
            </li>
          )
        })}
      </ul>
    )
  }

  render(){
    return (
      <div className="App">
        <img src="reminder.jpg"/>
        <div className="reminder-title">
          <h2>What Should U Do ?</h2>
        </div>

        <input 
            className="input" 
            type="text" 
            value = {this.state.text}
            placeholder="Enter What You Think .... ?"
            onChange={(e) => this.setState({text:e.target.value})}
        />
          <DatePicker
            selected={this.state.date}
            showTimeSelect
            dateFormat="Pp"
            value={this.state.date}
            className="input" 
            onChange={(date) => this.setState({date})} //only when value has changed
        />

       
        <button 
            style={{display:'block', width:'100%'}} 
            className="btn btn-primary "
            onClick={ () => {
                  this.props.add_Reminder(this.state.text , this.state.date)
                  this.setState({text:"" , date:""})
              }
            }
            >
            Add Reminder..
        </button>

        {this.render_Reminders()}

        {this.props.reminders.length > 0 && 
          <button 
              style={{display:'block', width:'100%'}} 
              className="btn btn-danger "
              onClick={ () => this.props.clear_Reminder()}
              >
              Clear All
          </button>
        }


      </div>
    );
    }
}

// function mapDispatchtoProps(dispatch){
//   return {
//     add_Reminder:() => dispatch(add_Reminder())
//   }
// }

// function mapStateToProps(state){
//   return {
//     reminders :state
//   }
// }

export default connect( (state) => {return {reminders:state}} , {add_Reminder , remove_Reminder , clear_Reminder})(App);
