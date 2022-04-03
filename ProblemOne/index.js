var arr = [
  {
    'guest_type': 'crew',
    'first_name': 'Marco',
    'last_name': 'Burns',
    'guest_booking': {
        'room_no': 'A0073',
        'some_array': [7,2,4]
    },
  },
  {
    'guest_type': 'guest',
    'first_name': 'John',
    'last_name': 'Doe',
    'guest_booking': {
        'room_no': 'C73',
        'some_array': [1,3,5,2,4,3]
    },
  },
  {
    'guest_type': 'guest',
    'first_name': 'Jane',
    'last_name': 'Doe',
    'guest_booking': {
        'room_no': 'C73',
        'some_array': [1,3,5,2,4,3]
    },
  },
  {
    'guest_type': 'guest',
    'first_name': 'Albert',
    'last_name': 'Einstein',
    'guest_booking': {
        'room_no': 'B15',
        'some_array': [2,5,6,3]
    },
  },
  {
    'guest_type': 'crew',
    'first_name': 'Jack',
    'last_name': 'Daniels',
    'guest_booking': {
        'room_no': 'B15',
        'some_array': [2,5,6,3]
    },
  },
  {
    'guest_type': 'guest',
    'first_name': 'Alan',
    'last_name': 'Turing',
    'guest_booking': {
        'room_no': 'B15',
        'some_array': [2,5,6,3]
    },
  },
];

function mutateArray(a) {
    var sum = 0

    a.forEach(element => {
      element.some_array = element.guest_booking.some_array
      delete element.guest_booking
      
      element.some_array.forEach(element => {
        sum = sum + element
      })

      element.some_total = sum
      delete element.some_array

    });
    
    b = a.filter(element => element.guest_type == 'guest')


    c = b.sort(function(a, b) {
      var lastNameA = a.last_name.toUpperCase(); // ignore upper and lowercase
      var lastNameB = b.last_name.toUpperCase();
      var firstNameA = a.first_name.toUpperCase();
      var firstNameB = b.first_name.toUpperCase();
      
      // ignore upper and lowercase
      if (lastNameA <= lastNameB && firstNameA < firstNameB) {
        return -1;
      }
      if (lastNameA > lastNameB && firstNameA > firstNameB) {
        return 1;
      }
    
      // names must be equal
      return 0;
    });


    return c;
}

$(document).ready(function() {
    $('#originalArray').html(JSON.stringify(arr, null, 2));
    $('#resultsArray').html(JSON.stringify(mutateArray(arr), null, 2));
});
