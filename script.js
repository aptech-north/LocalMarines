// Booking Form Validation
document.addEventListener('DOMContentLoaded', function() {
    // Check if booking form exists on the page
    const bookingForm = document.getElementById('bookingForm');
    
    if (bookingForm) {
        bookingForm.addEventListener('submit', function(e) {
            e.preventDefault();
            
            let isValid = true;
            const name = document.getElementById('name').value.trim();
            const email = document.getElementById('email').value.trim();
            const phone = document.getElementById('phone').value.trim();
            
            // Name validation
            if(name === '' || name.length < 3) {
                document.getElementById('nameError').textContent = 'Please enter a valid name (min 3 characters)';
                isValid = false;
            } else {
                document.getElementById('nameError').textContent = '';
            }
            
            // Email validation
            const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
            if(!emailRegex.test(email)) {
                document.getElementById('emailError').textContent = 'Please enter a valid email address';
                isValid = false;
            } else {
                document.getElementById('emailError').textContent = '';
            }
            
            // Phone validation (Pakistani format)
            const phoneRegex = /^03[0-9]{9}$/;
            if(!phoneRegex.test(phone)) {
                document.getElementById('phoneError').textContent = 'Please enter valid Pakistani number (03XXXXXXXXX)';
                isValid = false;
            } else {
                document.getElementById('phoneError').textContent = '';
            }
            
            if(isValid) {
                alert('Booking submitted successfully! We will contact you soon.');
                this.reset();
            }
        });
    }
    
    // Auto-hide alerts after 5 seconds
    setTimeout(function() {
        const alerts = document.querySelectorAll('.alert');
        alerts.forEach(alert => {
            const bsAlert = new bootstrap.Alert(alert);
            bsAlert.close();
        });
    }, 5000);
});



  // Video Control Script
  document.addEventListener('DOMContentLoaded', function() {
    const video = document.getElementById('bg-video');
    
    // Video load ensure karein
    video.load();
    
    // Mobile devices ke liye autoplay support
    document.addEventListener('touchstart', function() {
      if (video.paused) {
        video.play();
      }
    }, { once: true });
    
    // Agar video load na ho to fallback
    video.addEventListener('error', function() {
      console.log("Video load nahi hua, fallback background dikhaya ja raha hai");
      document.getElementById('video-background').style.background = "#000";
      video.style.display = "none";
    });
    
    // Resize par video maintain karein
    window.addEventListener('resize', function() {
      if (video.paused) {
        video.play();
      }
    });
  });


  