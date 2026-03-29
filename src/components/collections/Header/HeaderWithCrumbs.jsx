import Navigation from "../../elements/Navigation/Navigation";
import Breadcrumbs from "../../elements/Breadcrumbs/Breadcrumbs";

export default function HeaderWithCrumbs() {
  return (
    <>
      <header id="header-bar" className="b3-layout-page-item b3-header-sticky inactive">
        <Navigation />
        <Breadcrumbs />
      </header>
    </>
  );
}
