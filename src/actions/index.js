
export const FETCH_USER = 'FETCH_USER'

export function fetchUser() {

    var request = new XMLHttpRequest();
    
    request.open('GET', 'https://aerolab-challenge.now.sh/user/me');
    
    request.setRequestHeader('Content-Type', 'application/json');
    request.setRequestHeader('Accept', 'application/json');
    request.setRequestHeader('Authorization', 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI1YTBkOTk4MTUyZGQ5NjAwN2I2ZWIyYTQiLCJpYXQiOjE1MTA4NDA3MDV9.-XHsjWBC0i1u6zyo00TUIHVLCKxx2mvFcW9GLB_kGU0');
    
    request.onreadystatechange = function () {
      if (this.readyState === 4) {
        console.log('Status:', this.status);
        console.log('Headers:', this.getAllResponseHeaders());
        console.log('Body:', this.responseText);
        console.log('Body:', JSON.parse(this.responseText));
        JSON.parse(this.responseText)
      }
    };
    
    
    console.log('Request: ', requestContent)
    request.send();
    
    return {
        type: FETCH_USER,
        payload: requestContent
    }
}