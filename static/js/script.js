const links = document.querySelectorAll("a.smooth-scroll");
      links.forEach(link => {
        link.addEventListener("click", (e) => {
          e.preventDefault();
          const href = link.getAttribute("href");
          const offsetTop = document.querySelector(href).offsetTop;
          scroll({
            top: offsetTop,
            behavior: "smooth"
          });
        });
      });

      const allHeaders = document.querySelectorAll(".header");
      const allFooters = document.querySelectorAll(".footer");
      const allRatings = document.querySelectorAll(".rating")

      allHeaders.forEach(header => {
        header.innerHTML = `
        <nav id="mainMenu" class="navbar bg-main-400 ">
        <div class="container-fluid">
            <div class="sidebar-toggler" type="button">
                <span class="sidebar-toggler-icon"><i class="fas fa-bars"></i></span>
            </div>

            <div class="d-flex align-items-center justify-content-between">
                <div class="d-flex align-items-center">
                    <a class="navbar-brand" href="/index.html">
                        <img src="static/images/logo/logo.png" alt="Picabay's logo">
                    </a>
    
                    <div class="search-box d-flex align-items-center justify-content-between">
                        <span class="input-box">
                            <input type="search" placeholder="Search for products, brands and categories...">
                        </span>
                        <button class="btn btn-main searchBtn">
                            <span class="search-icon"><i class="fa fa-search" aria-hidden="true"></i></span>
                        </button>
                    </div>    
                </div> 

                <div class="profile-section d-flex align-items-center me-5">
                    <span class="profile-img me-1">
                        <img src="./static/images/icons/avatar.png" alt="profile-img" class="profile-img">
                    </span>
                    <span class="dropdown-icon"><i class="fas fa-angle-down"></i></span>
                </div>

                <div class="d-flex align-items-center">
                    <div class="help-section d-flex align-items-center me-5">
                        <span class="help-icon">
                            <i class="fa-solid fa-question"></i>
                        </span>
                        <p class="me-1">Help</p>
                        <span class="dropdown-icon"><i class="fas fa-angle-down"></i></span>
                    </div>
    
                    <div class="cart-section bg-main" id="cart-section">
                        <span>
                            <i class="fa-solid fa-cart-shopping me-2"></i>
                        </span>
                        <span class="me-3">
                            <p class="my-cart">My <br> Cart</p>
                        </span>
                        <span class="items-num">
                            <p class="numOfCartItems"></p>
                        </span>
                    </div>
                </div>
            </div>
        </div>
      </nav>
        `
      });

      allFooters.forEach(footer => {
        footer.innerHTML = `
        <div class="container">
        <div class="row">
            <div class="col">
                <div>
                    <a href="#"><p class="mb-3">ABOUT PICABAY</p></a>
                    <a href="#" class="footer-sub-link"><p>Contact us</p></a>
                    <a href="#" class="footer-sub-link"><p>About us</p></a>
                    <a href="#" class="footer-sub-link"><p>Our Blog</p></a>
                    <a href="#" class="footer-sub-link"><p>Forum</p></a>
                    <a href="#" class="footer-sub-link"><p>Terms & Conditions</p></a>
                  </div>
            </div>
            <div class="col">
                <div>
                    <a href="#"><p class="mb-3">PAYMENT</p></a>
                    <a href="#" class="footer-sub-link"><p>Manage Cards</p></a>
                  </div>
            </div>
            <div class="col">
                <div>
                    <a href="#"><p class="mb-3">BUYING ON PICABAY</p></a>
                    <a href="#" class="footer-sub-link"><p>FAQs</p></a>
                    <a href="#" class="footer-sub-link"><p>Delivery</p></a>
                    <a href="#" class="footer-sub-link"><p>Return Policy</p></a>
                    <a href="#" class="footer-sub-link"><p>Digital Services</p></a>
                    <a href="#" class="footer-sub-link"><p>Bulk Purchase</p></a>
                  </div>
            </div>
            <div class="col">
                <div class="search-box d-flex align-items-center justify-content-between">
                    <span class="input-box">
                        <input type="email" placeholder="Email Address">
                    </span>
                    <button class="btn btn-main searchBtn">
                        <p>Subscribe</p>
                    </button>
                </div>    
                <div class="socials">
                    <span class="social">
                        <a href="#"><i class="fa-brands fa-facebook-f"></i></a>
                    </span>
                    <span class="social">
                        <a href="#"><i class="fa-brands fa-instagram"></i></a>
                    </span>
                    <span class="social">
                        <a href="#"><i class="fa-brands fa-whatsapp"></i></a>
                    </span>
                    <span class="social">
                        <a href="#"><i class="fa-brands fa-twitter"></i></a>
                    </span>
                </div>
            </div>
            <div class="col-12 text-center pt-5 pb-3">
                <div class="copyright">
                    <p class="copyright-text bg-brand-dark">Pica<span class="text-main">Bay</span> &copy; 2022</p>
                </div>
            </div>
        </div>
    </div>
        `
      });

      allRatings.forEach(rating => {
        rating.innerHTML = `
        <div>
          <i class="fas fa-star"></i>
          <i class="fas fa-star"></i>
          <i class="fas fa-star"></i>
          <i class="fas fa-star"></i>
          <i class="fas fa-star"></i>
       </div>
        `
      });


    //  CART MODIFICATIONS
      const numOfCartItems = document.querySelectorAll(".numOfCartItems")
      const cart = document.getElementById("cart-section");
      var numOfItems = 3;

      numOfCartItems.forEach(numOfCartItem => {
        numOfCartItem.innerText = numOfItems
      })

      cart.addEventListener("click", () => {
        if(numOfItems === 0){
            window.location.pathname = "/emptyCartPage.html"
        }
        else  if(numOfItems > 0){
            window.location.pathname = "/cartPage.html"
        }
      })

      

    //   const products = document.querySelectorAll(".item")
    //   const subTotal = document.getElementById("subTotal")

    //   window.onload = function() {
    //     getTotal()
    //   };

    //   products.forEach(product => {
    //     let price = product.querySelector(".price")
    //     let itemQty = product.querySelector(".itemQty")
    //     let total = product.querySelector(".total")
    //     let addQty = product.querySelector(".addQty")
    //     let subQty = product.querySelector(".subQty")
        
    //     addQty.addEventListener("click", () => {
    //       itemQty.value++
    //       total.value = price.value * itemQty.value
    //       subQty.disabled = false
    //       getTotal()
    //     })

    //     subQty.addEventListener("click", () => {
    //       itemQty.value--
    //       total.value = price.value * itemQty.value
    //       getTotal()
    //       if(itemQty.value == 1){
    //         subQty.disabled = true
    //       }
    //   })
    //   total.value = price.value * itemQty.value
    // })
      
    // function getTotal(){
    //   let totalPrice = 0
    //   products.forEach(product => {
    //     let total = product.querySelector(".total").value
    //     totalPrice += Math.floor(total)
    //   })
    //  subTotal.value = `${totalPrice}`
    // }


    
     


  