// Wait until the page has loaded
document.addEventListener("DOMContentLoaded", function () {

    // =================================
    // SHOPPING CART
    // =================================

    let total = 0;

    const buttons = document.querySelectorAll(".cart-button[data-name]");
    const cartItems = document.getElementById("cart-items");
    const cartTotal = document.getElementById("cart-total");
    const clearCart = document.getElementById("clear-cart");

    // Add products to the cart
    buttons.forEach(function (button) {
        button.addEventListener("click", function () {

            const name = button.dataset.name;
            const price = Number(button.dataset.price);

            if (total === 0 && cartItems) {
                cartItems.innerHTML = "";
            }

            const item = document.createElement("li");
            item.textContent = name + " - R" + price;

            if (cartItems) {
                cartItems.appendChild(item);
            }

            total += price;

            if (cartTotal) {
                cartTotal.textContent = total;
            }
        });
    });

    // Clear the cart
    if (clearCart && cartItems && cartTotal) {
        clearCart.addEventListener("click", function () {
            cartItems.innerHTML = "<li>Your cart is empty.</li>";
            total = 0;
            cartTotal.textContent = total;
        });
    }


    // =================================
    // AUTOMATIC FOOTER YEAR
    // =================================

    const yearSpan = document.getElementById("year");

    if (yearSpan) {
        yearSpan.textContent = new Date().getFullYear();
    }


    // =================================
    // FAQ ACCORDION
    // =================================

    const faqQuestions = document.querySelectorAll(".faq-question");

    faqQuestions.forEach(function (question) {
        question.addEventListener("click", function () {

            const answer = question.nextElementSibling;
            answer.hidden = !answer.hidden;

        });
    });


    // =================================
    // LIVE PRODUCT SEARCH
    // =================================

    const searchInput = document.getElementById("product-search");
    const productCards = document.querySelectorAll(".product-card");
    const noResults = document.getElementById("no-results");

    if (searchInput) {
        searchInput.addEventListener("input", function () {

            const searchText = searchInput.value.toLowerCase();
            let visibleProducts = 0;

            productCards.forEach(function (card) {

                const productName = card.textContent.toLowerCase();

                if (productName.includes(searchText)) {
                    card.style.display = "";
                    visibleProducts++;
                } else {
                    card.style.display = "none";
                }

            });

            if (noResults) {
                noResults.hidden = visibleProducts > 0;
            }

        });
    }


    // =================================
    // ENQUIRY REASON HINT
    // =================================

    const reasonSelect = document.querySelector(".enquiry-section select");
    const typeHint = document.getElementById("type-hint");

    if (reasonSelect && typeHint) {

        reasonSelect.addEventListener("change", function () {

            switch (reasonSelect.value) {

                case "Birthday Cake":
                    typeHint.textContent =
                        "Tell us about the birthday cake you would like.";
                    break;

                case "Wedding Cake":
                    typeHint.textContent =
                        "Tell us about your wedding cake requirements.";
                    break;

                case "Cupcakes":
                    typeHint.textContent =
                        "Tell us how many cupcakes you need.";
                    break;

                case "Other":
                    typeHint.textContent =
                        "Please explain how we can help you.";
                    break;

                default:
                    typeHint.textContent = "";
            }

        });
    }


    // =================================
    // ENQUIRY FORM VALIDATION
    // =================================


    const enquiryForm = document.getElementById("enquiryForm");

    if (enquiryForm) {
        enquiryForm.addEventListener("submit", function (event) {
            event.preventDefault();

            const fields = [
                document.getElementById("name"),
                document.getElementById("email"),
                document.getElementById("service"),
                document.getElementById("message")
            ];

            const errorMessages = enquiryForm.querySelectorAll(".error-message");
            const success = document.getElementById("form-success");
            let isValid = true;

            fields.forEach(function (field, index) {
                const error = errorMessages[index];

                error.textContent = "";
                field.style.borderColor = "";

                if (field.value.trim() === "") {
                    error.textContent = "This field is required.";
                    field.style.borderColor = "red";
                    isValid = false;
                }
            });

            const email = document.getElementById("email");

            if (email.value.trim() !== "" &&
                !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email.value.trim())) {
                errorMessages[1].textContent = "Please enter a valid email address.";
                email.style.borderColor = "red";
                isValid = false;
            }

            if (success) {
                success.hidden = !isValid;
            }

            if (isValid) {
                enquiryForm.reset();
            }
        });
    }

    // CONTACT FORM VALIDATION
    const contactForm = document.getElementById("contactForm");

    if (contactForm) {
        contactForm.addEventListener("submit", function (event) {
            event.preventDefault();

            const fields = [
                document.getElementById("contact-name"),
                document.getElementById("contact-email"),
                document.getElementById("contact-message")
            ];

            const errorMessages = contactForm.querySelectorAll(".error-message");
            const success = document.getElementById("contact-success");
            let isValid = true;

            fields.forEach(function (field, index) {
                const error = errorMessages[index];

                error.textContent = "";
                field.style.borderColor = "";

                if (field.value.trim() === "") {
                    error.textContent = "This field is required.";
                    field.style.borderColor = "red";
                    isValid = false;
                }
            });

            const email = document.getElementById("contact-email");

            if (email.value.trim() !== "" &&
                !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email.value.trim())) {
                errorMessages[1].textContent = "Please enter a valid email address.";
                email.style.borderColor = "red";
                isValid = false;
            }

            if (success) {
                success.hidden = !isValid;
            }

            if (isValid) {
                contactForm.reset();
            }
        });
    }
});