var ElementNavBar = `<nav class="navbar glass3">
<div>
    <a href="./index.html"><img src="img/20220728_083028.png" alt="" width="140px"></a>
</div>
<div>
<div class="mobile-nav">
<button class="mobile-btn" onclick="toggleMenu(1)">Menu</button>
</div>
<ul class="nav" id="main-nav">
<li class="close-item">
<button class="mobile-btn" onclick="toggleMenu(0)">Close &times;</button>
</li>
<li class="nav-item">
<a href="index.html" class="nav-link">Accueil</a>
</li>
<li class="nav-item">
<a href="#!" class="nav-link">
  Départements <i class="fa fa-caret-down"></i>
</a>
<ul class="dp-menu level-1">
  <li class="dp-item">
    <a href="#!" class="dp-link">
      Numérique <i class="fa fa-caret-right"></i>
    </a>
    <ul class="dp-menu level-2">
      <li class="dp-item">
        <a href="Ingenieur_logiciel.html" class="dp-link">Ingénieur Logiciel</a>
      </li>
      <li class="dp-item">
        <a href="Ingenieur_Cloud.html" class="dp-link">Ingénieur Google Cloud</a>
      </li>
      <li class="dp-item">
        <a href="Ingenieur_FullStack.html" class="dp-link">Développeur Full Stack</a>
      </li>
      <li class="dp-item">
        <a href="Meta.html" class="dp-link">Métaverse</a>
      </li>
    </ul>
  </li>
  <li class="dp-item">
    <a href="E-commerce.html" class="dp-link">E-commerce</a>
  </li>
  <li class="dp-item">
    <a href="Transport.html" class="dp-link">Transport</a>
  </li>
  <li class="dp-item">
    <a href="Agritech.html" class="dp-link">Agritech</a>
  </li>
  <li class="dp-item">
    <a href="Service_Client.html" class="dp-link">Service Client</a>
  </li>
  <li class="dp-item">
    <a href="Industrie_Culturelle_Creative.html" class="dp-link">Industrie Culturelle et Créative</a>
  </li>
  <li class="dp-item">
    <a href="Management_projet.html" class="dp-link">Management de projet</a>
  </li>
</ul>
</li>
<li class="nav-item">
<a href="A_propos.html" class="nav-link">A propos</a>
</li>
<li class="nav-item" id="contact">
<a href="#!" class="nav-link">Contact</a>
</li>
</ul>
</div>
</nav>`;

var ElementFooter = `<footer>
    <div class="container pt-5 pb-4">
        <div class="row text-center">
            <div class="col-lg-3">
                <h5>Nos coordonnées</h5>
                <a href="tel:+24177323211" style="color: #FFF;">
                    <p><strong>Tel: </strong>077 32 32 11</p>
                </a>
                <a href="mailto:contact.pro@ecole241.org " style="color: white !important;">
                    <p><strong>Email: </strong>contact.pro@ecole241.org</p>
                </a>
                <p><strong>Adresse: </strong>Ancien SOBRAGA, Libreville, Gabon</p>
            </div>
            <div class="col-lg-3">
                <h5>Liens rapides</h5>
                <p><a href="Ingenieur_logiciel.html">Ingénieur Logiciel</a></p>
                <p><a href="Ingenieur_Cloud.html">Ingénieur Google Cloud</a></p>
                <p><a href="Ingenieur_FullStack.html">Développeur Full Stack</a></p>
            </div>
            <div class="col-lg-3">
                <h5>Départements</h5>
                <p><a href="Ingenieur_logiciel.html">Numérique</a></p>
                <p><a href="Meta.html">Metaverse</a></p>
                <p><a href="E-commerce.html">E-commerce</a></p>
                <p><a href="Transport.html">Transport</a></p>
                <p><a href="Agritech.html">Agritech</a></p>
                <p><a href="Service_Client.html">Service client</a></p>
                <p><a href="Management_projet.html">Management de projet</a></p>
                <p><a href="Industrie_Culturelle_Creative.html">Industrie culturelle créative</a></p>
            </div>
            <div class="col-lg-3">
                <h5>Suivez nous!</h5>
                <a href="https://www.facebook.com/ecole241business"><img src="img/9189029_facebook_icon.png" alt=""
                        width="80px"></a>
                <a href="https://ga.linkedin.com/company/business-ecole241"><img src="img/9189040_linkedin_icon.png"
                        alt="" width="80px"></a>
            </div>
        </div>
    </div>
    <div class="copy" style="margin: 0px !important;">
        <p style="text-align:center;" class="cop">Copyright &COPY; <span id="annee"></span> Tous droits reservés par <br> Ecole 241 </p>
    </div>
</footer>`;

var ElementPop = `<div class="over" id="over">

    <!-- ----------------------formulaire---------------------------------------------- -->

    <div class="tout">
        <img src="./img/giphy.gif" alt="" srcset="" class="img-fluid" id="imgf">
        <h1 id="pat" style="color: white;"></h1>

        <form action="" method="post" role="form" id="form" style="padding: 30px;">
            <h6 id="croix">&#9587;</h6>

            <h3>Laissez nous un message</h3>
            <div class="row">
                <div class="form-group">
                    <input type="text" name="from_name" class="form-control" id="from_name" placeholder="Votre nom"
                        required>
                </div>
                <div class="form-group">
                    <input type="email" class="form-control" name="email_id" id="email_id" placeholder="Votre Email"
                        required>
                </div>
            </div>

            <div class="form-group">
                <textarea class="form-control" name="message" rows="5" placeholder="Message" required
                    id="message"></textarea>
            </div>

            <br>
            <div class="text-center" style="width: 100%;"><button type="submit" class="btn bouton" id="button"
                    style="width: 100%; border-radius: 8px ;">Envoyer</button></div>
        </form>
    </div>


</div>`;

var ElementPart = `
<div class="container mt-5 ">
    <div class="container mt-5 ">
        <h2 class="text-center fw-bold mb-5 section-title">Nos partenaires</h2>

    </div>
    <div class="owl-carousel owl-theme container">

        <div class="card glass item" data-aos="flip-left" data-aos-easing="ease-out-cubic">
            <div class="card-img" style="background-color: white;border-radius:15px; padding:1rem;">
                <img src="img/Ogooue-Labs-1-1024x421.png" alt="" class="img-fluid">
            </div>
        </div>

        <div class="card glass item" data-aos="flip-left" data-aos-easing="ease-out-cubic">
            <div class="card-img" style="background-color: white;border-radius:15px; padding:1rem;">
                <img src="img/20220728_012439.jpg" alt="" class="img-fluid">
            </div>
        </div>




        <div class="card glass item" data-aos="flip-left" data-aos-easing="ease-out-cubic">
            <div class="card-img" style="background-color: white;border-radius:15px; padding:1rem;">
                <img src="img/Qwasar-Logo-07.png" alt="" class="img-fluid">
            </div>
        </div>

        <div class="card glass item" data-aos="flip-left" data-aos-easing="ease-out-cubic">
            <div class="card-img" style="background-color: white;border-radius:15px; padding:1rem;">
                <img src="img/kisspng-google-logo-googleplex-google-search-5b2cd7fd2d3570.5263877415296655331852-removebg-preview.png"
                    alt="" class="img-fluid">
            </div>
        </div>

        <div class="card glass item" data-aos="flip-left" data-aos-easing="ease-out-cubic">
            <div class="card-img" style="background-color: white;border-radius:15px; padding:1rem;">
                <img src="./img/logo/1.png" alt="" class="img-fluid">
            </div>
        </div>

        <div class="card glass item" data-aos="flip-left" data-aos-easing="ease-out-cubic">
            <div class="card-img" style="background-color: white;border-radius:15px; padding:1rem;">
                <img src="./img/logo/AIC.png" alt="" class="img-fluid">
            </div>
        </div>

        <div class="card glass item" data-aos="flip-left" data-aos-easing="ease-out-cubic">
            <div class="card-img" style="background-color: white;border-radius:15px; padding:1rem;">
                <img src="./img/logo/AUTO.png" alt="" class="img-fluid">
            </div>
        </div>

        <div class="card glass item" data-aos="flip-left" data-aos-easing="ease-out-cubic">
            <div class="card-img" style="background-color: white;border-radius:15px; padding:1rem;">
                <img src="./img/logo/Cercle.png" alt="" class="img-fluid">
            </div>
        </div>

        <div class="card glass item" data-aos="flip-left" data-aos-easing="ease-out-cubic">
            <div class="card-img" style="background-color: white;border-radius:15px; padding:1rem;">
                <img src="./img/logo/DAL.png" alt="" class="img-fluid">
            </div>
        </div>

        <div class="card glass item" data-aos="flip-left" data-aos-easing="ease-out-cubic">
            <div class="card-img" style="background-color: white;border-radius:15px; padding:1rem;">
                <img src="./img/logo/ENoLL.jpg" alt="" class="img-fluid">
            </div>
        </div>

        <div class="card glass item" data-aos="flip-left" data-aos-easing="ease-out-cubic">
            <div class="card-img" style="background-color: white;border-radius:15px; padding:1rem;">
                <img src="./img/logo/EPIC.jpg" alt="" class="img-fluid">
            </div>
        </div>

        <div class="card glass item" data-aos="flip-left" data-aos-easing="ease-out-cubic">
            <div class="card-img" style="background-color: white;border-radius:15px; padding:1rem;">
                <img src="./img/logo/Net.png" alt="" class="img-fluid">
            </div>
        </div>

        <div class="card glass item" data-aos="flip-left" data-aos-easing="ease-out-cubic">
            <div class="card-img" style="background-color: white;border-radius:15px; padding:1rem;">
                <img src="./img/logo/NVIDIA.png" alt="" class="img-fluid">
            </div>
        </div>


    </div>
</div>`;


// ---------------------Variable de déploiment------------------------------------
var navig = document.getElementById('navig');
var Footer = document.getElementById('footer');
var Pop = document.getElementById('pop');
var part = document.getElementById('partenaire');

// ----------------------------------------------------------------------------------


// -----------------------------------Partie de deploiment-------------------------------------------------
Pop.innerHTML = ElementPop;
navig.innerHTML = ElementNavBar;
Footer.innerHTML = ElementFooter;
part.innerHTML = ElementPart;

console.log(Footer)