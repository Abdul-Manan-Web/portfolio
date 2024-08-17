    // JavaScript Function to open specific tab content
    function openTab(event) {
        var tabLinks = document.querySelectorAll('.tab-links');
        var tabContents = document.querySelectorAll('.tab-content');

        tabLinks.forEach(function(link, index) {
            console.log('link'+link, 'index'+index);
            if (link === event.target) {
                tabContents.forEach(function(content) {
                    content.style.display = 'none';
                });
                tabContents[index].style.display = 'block';

                link.classList.add('active-link');
            } else {
                link.classList.remove('active-link');
            }
        });
    }

    var tabLinks = document.querySelectorAll('.tab-links');
    tabLinks.forEach(function(link) {
        link.addEventListener('click', openTab);
    });


    // close open Menu
    document.addEventListener('DOMContentLoaded', function () {
        const menuIcon = document.querySelector('.menu-icon');
        const closeIcon = document.querySelector('.close-icon');
        const sideMenu = document.getElementById('side-menu');
    
        // Show menu when menu icon is clicked
        menuIcon.addEventListener('click', function () {
            sideMenu.style.right="0";
        });
    
        // Hide menu when close icon is clicked
        closeIcon.addEventListener('click', function () {
            sideMenu.style.right="-200px";;
        });
    });

    // Message

    // Contact Form 


  const scriptURL = 'https://script.google.com/macros/s/AKfycbyJ3B_--EYXtHUo-z052gV5Ya0Uv5BL5fEvZ4J831eTkK1-DfDtuhn8wbJgT9l9MgkxBA/exec'
  const form = document.forms['submit-to-google-sheet']
  const msg=document.getElementById('msg')
  form.addEventListener('submit', e => {
    e.preventDefault();
    msg.innerHTML = "Submitting your form..."
    msg.style.color = "#f68038"
    fetch(scriptURL, { method: 'POST', body: new FormData(form)})
      .then(response =>{
        msg.innerHTML = "Thank you for contacting us. We will get back to you soon."
        msg.style.color = "#61b752"
        setTimeout(() => {
            msg.innerHTML = ""
        }, 5000);
         form.reset()
      })
      .catch(error => {
        msg.innerHTML = "Error submitting the form. Please try again later.";
        msg.style.color = "#d9534f";
        console.error('Error!', error.message);
    });
  })
