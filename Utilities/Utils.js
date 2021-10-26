export var Months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 
            'Aug', 'Sep','Oct', 'Nov', 'Dec']

export var currentDay = new Date();
export var month = Months[currentDay.getMonth()];
export var day = currentDay.getUTCDate(); 