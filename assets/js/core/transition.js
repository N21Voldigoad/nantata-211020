function showVerification() {

    gsap.to("#loading-screen", {
        duration: 0.8,
        opacity: 0,
        scale: 0.96,
        filter: "blur(10px)",
        ease: "power2.inOut",
        onComplete: () => {

            loadingScreen.classList.remove("active");

            verificationScreen.classList.add("active");

            gsap.fromTo(
                "#verification-screen",
                {
                    opacity: 0,
                    scale: 0.92,
                    filter: "blur(10px)"
                },
                {
                    opacity: 1,
                    scale: 1,
                    filter: "blur(0px)",
                    duration: 0.8,
                    ease: "power3.out"
                }
            );

        }
    });

}