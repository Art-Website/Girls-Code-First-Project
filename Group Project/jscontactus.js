// added this listener, to wait for the page to be ready before running your javascript
// you could also move the '<script src="jscontactus.js"></script>' line in your html down to the bottom of the body
// to achieve the same thing, either works
window.addEventListener('load', () => {
    function username() {
        // changed all the `document.getElementsByClassName` to `querySelector`
        // getElementsByClassName returns an array (list) of elements, not one element
        // so you have to add `[0]` to the end to select the first element, like this:
        // document.getElementsByClassName("nameform")[0]
        // this can be a little confusing, so I'd recommend you use querySelector like below
        // just note with querySelector, you have to include the `.` before your class name
        var nameinput = document.querySelector(".nameform").value;
        var emailinput = document.querySelector(".emailform").value;
        var commnetinput = document.querySelector(".commentform").value;

        console.log(`${nameinput} ${emailinput} ${commnetinput}`);
    }

    var subButton = document.querySelector('.signupform');
    // changed 'signupform' to 'subButton' - subButton is the variable, so we add the event listener to it
    subButton.addEventListener('click', username, false)
    } );
