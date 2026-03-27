import Navigation from "../elements/Navigation/Navigation";
import "../../styles/layout.css";

export function Header() {
  return (
    <>
      <header id="header-bar" className="b3-layout-page-item b3-header-sticky inactive">
        <Navigation />
      </header>
    </>
  );
}

export function HeaderWithCrumbs() {
  return (
    <>
      <header></header>
    </>
  );
}

export function HeaderWithBanner() {
  return (
    <>
      <header></header>
    </>
  );
}

export function HeaderWithCrumbsAndBanner() {
  return (
    <>
      <header></header>
    </>
  );
}
