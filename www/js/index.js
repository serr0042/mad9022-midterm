document.addEventListener("deviceready", function() {
    console.log("deviceready");
    findContact();
});

function findContact()
{
    var options = new ContactFindOptions();
    options.filter = "";
    options.multiple = true;
    var fields = [ "displayName", "name" ];
    navigator.contacts.find( fields, onSuccess, onError, options );
};

function onSuccess(contacts)
{
    var c = Math.floor(Math.random() * contacts.length);
    var newPerson = document.getElementById("newPerson");
    newPerson.innerHTML = "Name: " + contacts[c].name.formatted + "<br>" + "Phone: " + contacts[c].phoneNumbers[0].value;
};

function onError (contactError)
{
    console.log( "Could not retrieve contacts" );
};

