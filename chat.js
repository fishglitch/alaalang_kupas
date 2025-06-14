/* sends a POST request with our wish to the server when
 * the submit button is pressed, or the user presses the enter
 * key in the text input box.
 */

const form = document.getElementById('feelingForm');
const wish = document.getElementById('feeling');

/*
 * listen for events on the form, rather than the button,
 * so that both the button press and pressing enter work to
 * submit the form.
 */
form.addEventListener('submit', async event => {
  
  // do this first so the page doesn't refresh!
  event.preventDefault();

  // these are are Request options:
  // - the type of request is POST because we want to send data to the server
  // - the data we are sending is JSON, so we need to add a content-type header
  // - and encode the relevant data as JSON
  const options = {
    method: "POST",
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify({
      feeling: feeling.value
    })
  };
  
  // send the request and await a response
  const response = await fetch("/feeling", options);
  
  // parse the response into JSON
  const json = await response.json();
  console.log(json);

  // clear the feeling value!
  feeling.value = "";
});