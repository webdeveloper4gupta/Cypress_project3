class productsPage {
    checkOutButton() {
        return cy.get('#navbarResponsive > .navbar-nav > .nav-item > .nav-link');
    }
}

export default productsPage;