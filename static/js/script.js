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
        <div class="container-fluid px-5">
            <div class="sidebar-toggler" type="button">
                <span class="sidebar-toggler-icon"><i class="fas fa-bars"></i></span>
            </div>

            <div class="d-flex align-items-center justify-content-between">
                <div class="d-flex align-items-center">
                    <a class="navbar-brand" href="/index.html">
                        <img src="static/images/logo/logo.png" alt="Picabay's logo" class="brand-logo">
                    </a>
    
                    <div class="search-box d-flex align-items-center justify-content-between rounded-4 me-5">
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


    //   CART
      const cartItems = document.querySelectorAll(".cart-item");
      const subTotal  = document.querySelector("#subTotal");
      const numOfCartItems = document.querySelectorAll(".numOfCartItems")
      const cartPage = document.getElementById("cartPage")
      const emptyCartPage = document.getElementById("emptyCartPage")

      cartItems.forEach(cartItem => {
          var priceElem = cartItem.querySelector(".price");
          var price = parseInt(priceElem.getAttribute("data-price"));
          var qtyElem = cartItem.querySelector(".qty-input");
          var qty = parseInt(qtyElem.value);
          var limit = parseInt(qtyElem.getAttribute("data-available"));
          var minusBtn  = cartItem.querySelector(".sub-qty");
          var plusBtn   = cartItem.querySelector(".add-qty");
          var deleteBtn = cartItem.querySelector(".delete-btn")
          priceElem.innerHTML = priceElem.getAttribute("data-price")
          
          
          //calculate total
          getTotal(price, qty, cartItem);

          //minus button
          minusBtn.addEventListener("click", () => {
              qty -= 1
              qtyElem.value = qty
              plusBtn.disabled  = false
              if(qty === 1){
                 minusBtn.disabled = true
              }
              updateItems(cartItem, qty);
      });

          //plus button
           plusBtn.addEventListener("click", () => {
              minusBtn.disabled = false
              if(qty < limit){
                  qty += 1
                  qtyElem.value = qty
              }
              else{
                  plusBtn.disabled  = true
              }
              updateItems(cartItem, qty);
          }); 
           
        //   delete button
          deleteBtn.addEventListener("click", () => {
              let qty = 0
              qtyElem.value = qty
              updateItems(cartItem, qty);
              cartItem.remove()
          }); 
          
      });

      function getTotal(price, qty, parentEl){
          const totalEl = parentEl.querySelector(".total");
          const total   = price * qty;
          totalEl.setAttribute("data-total", total);
          totalEl.innerHTML = `${formatAsCurrency(total)}`;
          getSubTotal();
      }
      
      function getSubTotal(){
          let totalPrice = 0
          let numOfItems = 0
          cartItems.forEach(cartItem => {
               const qty = cartItem.querySelector(".qty-input")
               numOfItems += parseInt(qty.value)
               const total = cartItem.querySelector(".total");
               totalPrice += parseInt(total.getAttribute("data-total"));
          });
          subTotal.innerHTML = `${formatAsCurrency(totalPrice)}`;
          numOfCartItems.forEach(numOfCartItem => {
          numOfCartItem.innerHTML = `${numOfItems}`
        })

        if(numOfItems === 0){
           cartPage.style.display = "none"
           emptyCartPage.style.display = "block"
        }
      }
      
      function updateItems(parentEl, qty){
          qty = qty;
          const price = parseInt(parentEl.querySelector(".price").getAttribute("data-price"));
          getTotal(price, qty, parentEl);
      }
      
      function formatAsCurrency(amount){
          amount = parseFloat(amount);
          const new_price = Intl.NumberFormat("en-NG", {
          style: 'currency',
          currency: 'USD',
          }).format(amount);
          return `${new_price.substring(2, new_price.length)}`;
      }

      

   

    
     


  