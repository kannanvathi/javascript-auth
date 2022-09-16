
if (JSON.parse(localStorage.getItem('users')) === null) {
    localStorage.setItem('users', JSON.stringify([]))
}
if (JSON.parse(localStorage.getItem('isAuthenticated')) === null)
    localStorage.setItem('isAuthenticated', JSON.stringify(false));

if (JSON.parse(localStorage.getItem('currentUser')) === null)
    localStorage.setItem('currentUser', JSON.stringify({}));

if (JSON.parse(localStorage.getItem('flights')) === null)
    localStorage.setItem('flights', JSON.stringify(flights));

/*var authGuard =  function() {
    let isAuthenticated = JSON.parse(localStorage.getItem('isAuthenticated'));
    let href = window.location.href;
    href = href.split('/');
    let url = href.pop();
    console.log(!url.includes('index.html'))
    if(!isAuthenticated && !url.includes('index.html')){
        navigate('/login.html');
    }
};
window.onload = authGuard;*/

/* Registration */
function registerForm() {
    var user;
    let register_form = document.getElementById('register_form');
    let email = register_form.elements[0].value;
    console.log(email);
    let password = register_form.elements[1].value;
    let confirm_password = register_form.elements[2].value;
    //validation
    if (email === '') {
        alert('Enter Email');
        return;
    }
    else if (password === '') {
        alert('Enter password');
        return;
    }
    else if (confirm_password === '') {
        alert('Enter Confirm password');
        return;
    }
    else if (password !== confirm_password) {
        alert('Confirm password match with password');
        return;
    }

    console.log(user);
    let users = JSON.parse(localStorage.getItem('users'));
    let usersLength = users.length;
    user = {
        id: usersLength + 1,
        email: email,
        password: password
    }
    let isAlreadyExist = false;
    if (users.length) {
        users.forEach(u => {
            if (u.email === user.email) {
                isAlreadyExist = true
                alert('User is already exists');
            }
        })
        if (isAlreadyExist) {
            return;
        }
    }

    users.push(user);
    localStorage.setItem('users', JSON.stringify(users));
    //reset
    register_form.reset();
}

//Navigate
function navigate(url) {
    let isAuthenticated = JSON.parse(localStorage.getItem('isAuthenticated'));

    let href = window.location.href;
    href = href.split('/');
    href.pop();
    if (isAuthenticated) {
        href = href.join('/') + url
        window.location.href = href;
    }
    else if (url === '/index.html') {
        href = href.join('/') + '/index.html'
        window.location.href = href;
    }
    else {
        href = href.join('/') + '/login.html'
        window.location.href = href;
    }

}

//login
function login() {
    let login_form = document.getElementById('login_form');
    let email = login_form.elements[0].value;
    let password = login_form.elements[1].value;
    let users = JSON.parse(localStorage.getItem('users'));
    var isAuthenticatedUser = users.find(user => {
        return (user.email === email && user.password === password)
    });
    if (isAuthenticatedUser) {
        localStorage.setItem('isAuthenticated', JSON.stringify(true));
        localStorage.setItem('currentUser', JSON.stringify(isAuthenticatedUser));
        navigate('/home.html')
    }
    else {
        alert('Unauthorized user accessed');
        navigate('/login.html');
    }
}

function userProfile() {
    let user = JSON.parse(localStorage.getItem('currentUser'));
    let html = document.getElementById('profile_card');
    html.innerHTML = '';
    if (user.fName) {
        let contentHeader = document.createElement('h1');
        contentHeader.className = 'card-header text-center';
        contentHeader.textContent = user.fName + ' ' + user.lName;

        html.appendChild(contentHeader);
    }

    let bodyContent = document.createElement('ul');
    bodyContent.className = 'ul-class'
    for (key in user) {
        if (key != 'flights') {
            let liContent = document.createElement('li');
            liContent.innerHTML = `<b style="min-width: 160px;">${key}:</b> ${user[key]}`;
            liContent.className = 'text-left';
            bodyContent.appendChild(liContent)
        }
    }
    let cardBody = document.createElement('div');
    cardBody.className = 'card-body';
    cardBody.appendChild(bodyContent);
    html.appendChild(cardBody);
    if (user.flights) {
        let flights = user.flights;
        let pastFlights = [];
        let upcomingFlights = [];
        flights.forEach(flight => {
            let date = new Date();
            let pDate = date.getMonth();
            pDate = (/^\d$/.test(pDate)) === true ? '0' + pDate : pDate
            let day = date.getFullYear() + '-' + pDate + '-' + date.getDate();
            let arrivalDate = flight.ArrivalDateTime;
            arrivalDate = arrivalDate.split('T')[0];
            if (arrivalDate < day) {
                pastFlights.push(flight)
            }
            else {
                upcomingFlights.push(flight)
            }

        });


        loadTable(pastFlights, 'Previous Journey', cardBody, html);
        loadTable(upcomingFlights, 'Upcoming Journey', cardBody, html);
    }

}
function loadTable(flights, status, cardBody, html) {
    let table = document.createElement('table');
    table.className = 'table table-bordered';
    let thead = document.createElement('thead');
    let tr = document.createElement('tr');

    let td1 = document.createElement('th');
    td1.textContent = 'Origin Station';
    tr.appendChild(td1);
    let td2 = document.createElement('th');
    td2.textContent = 'Destination Station';
    tr.appendChild(td2);
    let td3 = document.createElement('th');
    td3.textContent = 'Depature';
    tr.appendChild(td3);
    let td4 = document.createElement('th');
    td4.textContent = 'Arrival';
    tr.appendChild(td4);
    let td5 = document.createElement('th');
    td5.textContent = 'Action';
    tr.appendChild(td5);
    thead.appendChild(tr);
    table.appendChild(thead);
    let tbody = document.createElement('tbody');


    flights.forEach((flight, index) => {
        var row = tbody.insertRow(index);
        var cell1 = row.insertCell(0);
        cell1.innerHTML = flight.OriginStation.Name;
        var cell2 = row.insertCell(1);
        cell2.innerHTML = flight.DestinationStation.Name;
        var cell3 = row.insertCell(2);
        cell3.innerHTML = flight.DepartureDateTime;
        var cell4 = row.insertCell(3);
        cell4.innerHTML = flight.ArrivalDateTime;
        if (status === 'Upcoming Journey') {
            var cell5 = row.insertCell(4);
            var btn = document.createElement('button');
            btn.className = 'btn btn-primary';
            btn.textContent = 'Cancel Ticket'
            btn.id = flight.Id;
            btn.addEventListener('click', function () {
                let id = this.id;
                let flights = JSON.parse(localStorage.getItem('flights'));
                let currentUser = JSON.parse(localStorage.getItem('currentUser'));
                let users = JSON.parse(localStorage.getItem('users'));

                currentUser.flights = currentUser.flights.filter(flight => {
                    return id != flight.Id;
                });
                localStorage.setItem('currentUser', JSON.stringify(currentUser));
                userProfile();

            })
            cell5.appendChild(btn);
        }

    })

    table.appendChild(tbody);


    let header = document.createElement('h3');
    header.textContent = status;
    header.className = 'text-center w-100'
    cardBody.appendChild(header);
    cardBody.appendChild(table);
    html.appendChild(cardBody);
}

function loadEditProfile() {
    let editForm = document.getElementById('edit_profile_form');
    let user = JSON.parse(localStorage.getItem('currentUser'));
    editForm.elements[0].value = user.email;
    editForm.elements[1].value = user.password;
    if (user.fName) {
        editForm.elements[2].value = user.fName;
        editForm.elements[3].value = user.lName;
        editForm.elements[4].value = user.dob;
    }
}

function updateProfileForm() {
    let editForm = document.getElementById('edit_profile_form');
    let editedEmail = editForm.elements[0].value;
    let currentUser = JSON.parse(localStorage.getItem('currentUser'));
    let selectedFlights = currentUser.flights;
    let editedUser = {
        id: currentUser.id,
        email: editedEmail,
        password: editForm.elements[1].value,
        fName: editForm.elements[2].value,
        lName: editForm.elements[3].value,
        dob: editForm.elements[4].value,
        flights: selectedFlights
    }
    let users = JSON.parse(localStorage.getItem('users'));
    users.forEach((user, index) => {
        if (user.email === editedEmail) {
            users[index] = editedUser
            return;
        }
    })
    localStorage.setItem('users', JSON.stringify(users));
    localStorage.setItem('currentUser', JSON.stringify(editedUser));
    navigate('/profile.html');
}

function logout(url) {
    localStorage.removeItem('currentUser');
    localStorage.setItem('isAuthenticated', JSON.stringify(false));
    navigate(url);
}

//flights search
function searchQuery() {
    let start_from = document.getElementById('place_from').value;
    let start_to = document.getElementById('place_to').value;
    let date = document.getElementById('date').value;
    let time_from = document.getElementById('time_from').value;
    let time_to = document.getElementById('time_to').value;

    let data = flights.Segments;
    let searchedData = [];
    console.log(start_from, start_to, date, time_from, time_to);
    data.forEach(flight => {
        let depatureDateTime = flight.DepartureDateTime;
        depatureDateTime = depatureDateTime.split('T');
        depatureDate = depatureDateTime[0];
        depatureTime = depatureDateTime[1];

        if (flight.OriginStation.Name.toLowerCase().includes(start_from.toLowerCase()) && flight.DestinationStation.Name.toLowerCase().includes(start_to.toLowerCase()) && depatureTime > time_from && depatureTime < time_to) {
            searchedData.push(flight);
        }
    })
    loadFlights(searchedData)
}

//fetch flights
function loadFlights(searchedData = null) {
    let data = flights.Segments;
    if (searchedData !== null)
        data = searchedData;
    console.log(data);
    let html = document.getElementById('load_data');
    html.innerHTML = '';
    data.forEach(flight => {
        let column = document.createElement('div');
        column.className = "col-lg-4 col-md-6 col-sm-12 mb-3"
        let card = document.createElement('div');
        card.className = "card";

        let cardHeader = document.createElement('div');
        cardHeader.className = "card-header text-center font-size-18";
        cardHeader.textContent = flight.OperatingCarrier.Name;
        card.appendChild(cardHeader);

        let image = document.createElement('img');
        image.className = 'card-img-top';
        image.src = flight.OperatingCarrier.ImageUrl;
        card.appendChild(image);

        let cardBody = document.createElement('div');
        cardBody.className = 'card-body';
        let arrivalDateTime = flight.ArrivalDateTime
        arrivalDateTime = arrivalDateTime.split('T');
        arrivalDate = arrivalDateTime[0];
        arrivalTime = arrivalDateTime[1];

        let depatureDateTime = flight.DepartureDateTime;
        depatureDateTime = depatureDateTime.split('T');
        depatureDate = depatureDateTime[0];
        depatureTime = depatureDateTime[1];

        let txtCon = `* Depature Date: <b>${depatureDate}</b> <br> * Depature Time: <b>${depatureTime}</b> <br> *Arrival Date: <b>${arrivalDate}</b> <br> * Arrival Time: <b>${arrivalTime}</b> <br> * OriginName: <b>${flight.OriginStation.Name}</b> <br> * Destination Name: <b>${flight.DestinationStation.Name}</b>`
        cardBody.innerHTML = txtCon;
        card.appendChild(cardBody);

        let cardFooter = document.createElement('div');
        cardFooter.className = 'card-footer';
        let button = document.createElement('BUTTON');
        button.className = 'btn btn-primary book-flight-' + flight.Id;
        button.textContent = 'Book ticket'
        button.id = flight.Id;
        button.addEventListener('click', function () {
            let currentUser = JSON.parse(localStorage.getItem('currentUser'));
            console.log(this.id);
            let data = flights.Segments;
            let bookedFlights = currentUser.flights || [];
            data.forEach(flight => {
                if (this.id == flight.Id) {
                    bookedFlights.push(flight);
                }
            })
            currentUser = {
                id: currentUser.id,
                fName: currentUser.fName,
                lName: currentUser.lName,
                dob: currentUser.dob,
                email: currentUser.email,
                password: currentUser.password,
                flights: bookedFlights
            }
            localStorage.setItem('currentUser', JSON.stringify(currentUser));
            let users = JSON.parse(localStorage.getItem('users'))
            users.forEach((user, index) => {
                users[index] = currentUser;
            })
            localStorage.setItem('users', JSON.stringify(users));
            navigate('/profile.html');
        })
        cardFooter.appendChild(button);
        card.appendChild(cardFooter);
        column.appendChild(card);
        html.appendChild(column);
    })

}
