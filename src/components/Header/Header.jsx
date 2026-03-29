import Navigation from "../Navigation/Navigation";

export function Header() {
  return (
    <>
      <header id="header-bar" className="b3-layout-page-item b3-header-sticky inactive">
        <Navigation />
      </header>
    </>
  );
}
