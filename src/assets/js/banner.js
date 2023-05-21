
(function() {
    const closeBanners = document.querySelectorAll(".c-banner__close");
    closeBanners.forEach( closeBanners => {
        closeBanners.addEventListener("click", event => {
            const banner= event.target.parentNode;
            banner.classList.add("collapse");

            // هذا الكود خاص بحذف الحاوية بعد الانتهاء من اخفاء العناصر 

            // في الكود التالي لم نستخدم الدوال السهمية لانها لا تستطيع الأستفادة من بعض الخصائص مثل this وغيرها 

            banner.addEventListener("transitionend", function(event) {
                if (event.target === this) {
                    this.remove();
                }
            })

        })
        })
})();