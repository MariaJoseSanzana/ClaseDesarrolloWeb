console.log('Server is running on port 3000');


const clickButton = () => {
    document.getElementById('main-button').innerHTML = 'Clicked!';
    console.log('Button clicked');
}

clickButton();