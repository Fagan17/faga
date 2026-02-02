let images = [
            "./WhatsApp Image 2026-02-02 at 04.44.57.jpeg",
            "./WhatsApp Image 2026-02-02 at 04.44.58.jpeg",
            "./WhatsApp Image 2026-02-02 at 04.44.58 (1).jpeg",
            "./WhatsApp Image 2026-02-02 at 04.44.58 (2).jpeg"
        ];

        let index = 0;
        let img = document.getElementById("myImage");

        function changeImage() {
            
            img.classList.remove("grow");
            img.classList.add("shrink");

            setTimeout(() => {
    
                index = (index + 1) % images.length;
                img.src = images[index];
                img.classList.remove("shrink");
                img.classList.add("grow");
            }, 400);
        }