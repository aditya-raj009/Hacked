function showCredentials(event) {
    event.preventDefault(); // form reload hone se roko

    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;

    console.log("Username:", username);
    console.log("Password:", password);

    window.location.href="submit.html";

    setTimeout(()=>{
        window.location.href="submit.html"
    })
    
    // Optional: alert bhi de sakta hai
    // alert(`Username: ${username}\nPassword: ${password}`);
}