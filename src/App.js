import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";
import "./layoutStyle.css";
import Logo from "./assets/images/logo.webp";
import { FaShoppingBag } from "react-icons/fa";
import { CiHeart } from "react-icons/ci";
import { MdAccountCircle } from "react-icons/md";
import Slider from "./components/Slider";
import ProductItem from "./components/ProductItem";
import ChinhSachItem from "./components/ChinhSachItem";
import Database from "./data_fake.json";
function App() {
  const listproduct = Database.products;
  return (
    <>
      <header className="bg-white">
        <div className="container">
          <div className="row">
            <div className="col-md-3">
              <img src={Logo} alt="logo" />
            </div>
            <div className="col-md-7">
              <nav class="navbar navbar-expand-lg bg-body-tertiary">
                <div class="container-fluid">
                  <a class="navbar-brand" href="#">
                    Trang chủ
                  </a>
                  <button
                    class="navbar-toggler"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#navbarSupportedContent"
                    aria-controls="navbarSupportedContent"
                    aria-expanded="false"
                    aria-label="Toggle navigation"
                  >
                    <span class="navbar-toggler-icon"></span>
                  </button>
                  <div
                    class="collapse navbar-collapse"
                    id="navbarSupportedContent"
                  >
                    <ul class="navbar-nav me-auto mb-2 mb-lg-0">
                      <li class="nav-item">
                        <a class="nav-link active" aria-current="page" href="#">
                          Tin tức
                        </a>
                      </li>
                      <li class="nav-item">
                        <a class="nav-link" href="#">
                          Link
                        </a>
                      </li>
                      <li class="nav-item dropdown">
                        <a
                          class="nav-link dropdown-toggle"
                          href="#"
                          role="button"
                          data-bs-toggle="dropdown"
                          aria-expanded="false"
                        >
                          Sản Phẩm
                        </a>
                        <ul class="dropdown-menu">
                          <li>
                            <a class="dropdown-item" href="#">
                              Đèn Trang Trí
                            </a>
                          </li>
                          <li>
                            <a class="dropdown-item" href="#">
                              Đồ Trang Trí
                            </a>
                          </li>
                          <li>
                            <a class="dropdown-divider"></a>
                          </li>
                          <li>
                            <a class="dropdown-item" href="#">
                              Đồ Nội Thất
                            </a>
                          </li>
                          <li>
                            <a class="dropdown-item" href="#">
                              Thiết Bị Vệ Sinh
                            </a>
                          </li>
                        </ul>
                      </li>
                      <li class="nav-item">
                        <a class="nav-link active" aria-current="page" href="#">
                          Liên hệ
                        </a>
                      </li>
                    </ul>
                    <form class="d-flex" role="search">
                      <input
                        class="form-control me-2"
                        type="search"
                        placeholder="Nhập sản phẩm"
                        aria-label="Search"
                      ></input>
                      <button class="btn btn-outline-success" type="submit">
                        Search
                      </button>
                    </form>
                  </div>
                </div>
              </nav>
            </div>
            <div className="col-md-2">
              <FaShoppingBag />
              <CiHeart />
              <MdAccountCircle />
            </div>
          </div>
        </div>
      </header>
      <main>
        <div className="slider">
          <Slider />
        </div>
        <div className="section_chinhsach">
          <div className="container py-5">
            <div className="row">
              <div className="col-md-3">
                <ChinhSachItem
                  image="https://bizweb.dktcdn.net/100/493/370/themes/940719/assets/home_policy_item_image_1.png?1713464283843"
                  title="Giao hàng nhanh, miễn phí"
                  des="Đơn hàng >900k hoặc đăng ký tài khoản được giao hàng miễn phí"
                />
              </div>
              <div className="col-md-3">
                <ChinhSachItem
                  image="https://bizweb.dktcdn.net/100/493/370/themes/940719/assets/home_policy_item_image_2.png?1713464283843"
                  title="Trả hàng, bảo hành"
                  des="Không thích? Trả lại hoặc đổi hàng của bạn miễn phí trong vòng 30 ngày"
                />
              </div>
              <div className="col-md-3">
                <ChinhSachItem
                  image="https://bizweb.dktcdn.net/100/493/370/themes/940719/assets/home_policy_item_image_3.png?1713464283843"
                  title="Thành viên"
                  des="Ưu đãi theo từng cấp bậc hạng thành viên.Sinh nhật quà tặng thành viên"
                />
              </div>
              <div className="col-md-3">
                <ChinhSachItem
                  image="https://bizweb.dktcdn.net/100/493/370/themes/940719/assets/home_policy_item_image_4.png?1713464283843"
                  title="Chính hãng"
                  des="Sản phẩm chính hãng. Được nhập khẩu 100% từ hãng"
                />
              </div>
            </div>
            <hr />
          </div>
        </div>
        <div className="section_flash_sale">
          <div className="container">
            <div className="row">
              {listproduct.map((pt, index) => {
                return (
                  <div className="col-md" key={index}>
                    <ProductItem product={pt} />
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </main>
      <footer className="bg-dark">thuytien</footer>
    </>
  );
}
export default App;
