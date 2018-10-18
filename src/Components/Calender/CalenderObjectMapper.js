

class CalendarObjectMapper {
	
	getSettings(properties){
		let newSettings = {};
		for (const key in properties) {
      		if (properties.hasOwnProperty(key)) {
        		newSettings[key] = properties[key];
      		}
    	}
    	return newSettings;
	}
}

export default CalendarObjectMapper;