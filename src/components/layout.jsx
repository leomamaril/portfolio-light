function Layout({ children, footer }) {
    return (
      <div className="position-relative">
        <main className="layout-content">{children}</main>
        {footer && <footer className="layout-footer">{footer}</footer>}
      </div>
    );
  }



  export {Layout}