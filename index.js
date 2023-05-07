const OrderPage = document.getElementById('orderPage');
const MainPage = document.getElementById('MainPage');

document.getElementById('btn-order').onclick = function () {
    OrderPage.style.display = 'flex';
    MainPage.style.display = 'none';
};
document.getElementById('back_1').onclick = function () {
    OrderPage.style.display = 'none';
    MainPage.style.display = 'flex';
};

// Get all radio buttons with name "gender"
const radios = document.getElementsByName('colors');
let product_color = '';

// Loop through all radio buttons
for (let i = 0; i < radios.length; i++) {
    radios[i].addEventListener('click', function () {
        for (let j = 0; j < radios.length; j++) {
            if (radios[j] !== this) {
                radios[j].checked = false;
            } else if (radios[j] === this && radios[j].checked) {
                product_color = radios[j].value;
            }
        }
    });
}
const myForm = document.getElementById('myForm');
myForm.addEventListener('submit', function (event) {
    event.preventDefault(); // prevent page from reloading
    // code to execute when form is submitted
    try {
        const product_name = document.getElementById('Title').innerHTML;
        const name = document.getElementById('Name').value;
        const Email = document.getElementById('Email').value;
        const tel = document.getElementById('P-number').value;
        const Quantitys = document.getElementById('count');
        const Quantity = Quantitys.value;

        if (product_color == '') {
            alert('Please enter your data');
        } else {
            let sendToYounes = {
                name: name,
                from_name: name,
                email_id: Email,
                product_name: product_name,
                product_color: product_color,
                tel: '+213 ' + tel,
                Quantity: Quantity
            };
            emailjs.send('service_tbwherh', 'template_gpwghsv', sendToYounes);
            console.log(sendToYounes);
        }
        console.log('Form submitted!');
        alert('Order submitted!');
    } catch (error) {
        console.log(error);
        alert('something went wrong, please try again');
    }
});
document.getElementById('btn-order2').onclick = function () {};
