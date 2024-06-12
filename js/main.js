
class MyHeader extends HTMLElement{
    connectedCallback(){
        this.innerHTML = `<nav class="navbar navbar-expand-sm navbar-dark " >
        <div class="container-fluid" >
            <a class="navbar-brand" href="#">Welcome! </a>
            <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarID"
                aria-controls="navbarID" aria-expanded="false" aria-label="Toggle navigation">
                <span class="navbar-toggler-icon"></span>
            </button>
            <div class="collapse navbar-collapse" id="navbarID" >
                <div class="navbar-nav" >
                    <a class="nav-link"  href="index.html" style="color:white ;">Home</a>
                    <a class="nav-link   href="csswebpage2.html" style="color:white ;" >About China</a>
                    <a class="nav-link"  href="csswebpage3.html" style="color:white ;">Learn Hanzi</a>
                    <a class="nav-link"  href="csswebpage4.html" style="color:white ;">Grammar</a>
                    <a class="nav-link"  href="csswebpage5.html" style="color:white ;">Vocabulary</a>
                    <a class="nav-link"  href="csswebpage6.html" style="color:white ;">Popular Media</a>
                </div>
            </div>
        </div>
    </nav>`
    }
}

customElements.define('header1',MyHeader)