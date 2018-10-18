import React from 'react';
import $ from "jquery";
//import moment from 'moment';
import CalendarObjectMapper from './CalenderObjectMapper.js';

export default class FullCalendar extends React.Component{
	constructor(){
		super();
		this.jq = $.noConflict();
		this.CalendarObjectMapper = new CalendarObjectMapper();
		this.root = 'min';
		this.instance = null;
		this.date = new Date();
	}

	componentDidMount(){
		const objectMapperSettings = this.CalendarObjectMapper.getSettings(this.props);
		this.instance = this.jq(`#${this.root}`).fullCalendar(objectMapperSettings);
	}

  	componentWillReceiveProps(nextProps){
  		this.jq(`#${this.root}`).fullCalendar('destroy');
  		const objectMapperSettings = this.CalendarObjectMapper.getSettings(nextProps);
    	this.instance = this.jq(`#${this.root}`).fullCalendar(objectMapperSettings);
  	}

	render(){
		this.root = this.props.id || 'ID' + this.date.getTime(); 
		return(
			<div id={this.root}></div>
		)
	}
}