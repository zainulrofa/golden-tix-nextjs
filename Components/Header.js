import React, { useEffect, useState } from "react";
import Image from "next/image";
import styles from "../styles/Header.module.css";
// import logo from "../assets/golden-logo.png";
import defaultImg from "../assets/avatar.webp";
import { useRouter } from "next/router";
import { useDispatch, useSelector } from "react-redux";
import profileActions from "../redux/actions/profile";

function Header() {
  const dispatch = useDispatch();
  const router = useRouter();
  const image = useSelector((state) => state.user.profile.image);
  const token = useSelector((state) => state.auth.userData.token);
  const role = useSelector((state) => state.auth.userData.role);
  const [toggle, setToggle] = useState(false);
  // const [search, setSearch] = useState({
  //   search: "",
  // });
  const link = process.env.NEXT_PUBLIC_CLOUDINARY_LINK;
  // console.log(image);
  // console.log(role);
  const showHamburger = () => {
    setToggle(!toggle);
  };
  // console.log(search);

  // const changeHandler = (e) => {
  //   setSearch({
  //     ...search,
  //     [e.target.name]: e.target.value,
  //   });
  // };

  const searchMovies = (e) => {
    e.preventDefault();
    const search = e.target.search.value;
    console.log(router.pathname);
    // if(router.pathname )
    // setQuery({ ...queryProps });
    router.push({
      pathname: "/showingAllMovies",
      query: {
        page: 1,
        limit: 10,
        search: search,
      },
    });
  };

  useEffect(() => {
    dispatch(profileActions.userThunk(token));
  }, [dispatch]);
  return (
    <header>
      <div className="container">
        <div className={`row ${styles["container"]}`}>
          <div className="col-lg-2 col-md-2 col-10">
            <div
              className={styles["logo-container"]}
              onClick={() => {
                router.push("/");
              }}
            >
              <div className={styles["golden"]}>
                <p>GOLDEN</p>
              </div>
              <div className={styles["tix"]}>
                <p>TIX</p>
              </div>
            </div>
          </div>
          <div className="col-lg-10 col-md-10 col-2">
            <div className={styles["navbar"]}>
              {role === "user" ? (
                <div className={styles["left-content"]}>
                  <ol>
                    <li>Movies</li>
                    <li>Cinemas</li>
                    <li>Buy Ticket</li>
                  </ol>
                </div>
              ) : (
                <div className={styles["left-content"]}>
                  <ol>
                    <li>Movies</li>
                    <li>Cinemas</li>
                    <li
                      onClick={() => {
                        router.push("/admin");
                      }}
                    >
                      Create Movies
                    </li>
                  </ol>
                </div>
              )}

              <div className={styles["right-content"]}>
                <div className={styles["location"]}>
                  <p>Location</p>
                  <i className="fa-sharp fa-solid fa-chevron-down"></i>
                </div>
                <form className={styles["search"]} onSubmit={searchMovies}>
                  <input
                    type="text"
                    name="search"
                    // value={search.search}
                    // onChange={changeHandler}
                    placeholder="Search here..."
                  />
                  <i
                    className="fa-solid fa-magnifying-glass"
                    onClick={() => {
                      // setQuery();
                      router.push("/showingAllMovies");
                    }}
                  ></i>
                </form>
                <div className={styles["btn-container"]}>
                  {token ? (
                    <div
                      className={styles["image-container"]}
                      onClick={() => {
                        router.push("/profile");
                      }}
                    >
                      <Image
                        src={!image ? defaultImg : `${link}/${image}`}
                        alt="profile"
                        layout="fill"
                        objectFit="cover"
                      />
                    </div>
                  ) : (
                    <div className={styles["right-btn"]}>
                      <button
                        onClick={() => {
                          router.push("/auth/signup");
                        }}
                      >
                        Sign Up
                      </button>
                      <button
                        onClick={() => {
                          router.push("/auth/signin");
                        }}
                      >
                        Sign In
                      </button>
                    </div>
                  )}
                </div>
              </div>
            </div>
            <div
              className={`${styles["menu-toggle"]} ${styles["right-none"]}`}
              onClick={showHamburger}
            >
              <input type="checkbox" />
              <span></span>
              <span></span>
              <span></span>
            </div>
          </div>
        </div>
      </div>
      <div className={`${styles["overlay"]} ${!toggle && styles["show"]}`}>
        <div className={styles["toggle-list"]}>
          <div className="container">
            <div className={styles["search"]}>
              <i
                className="fa-solid fa-magnifying-glass"
                onClick={() => {
                  setQuery(search);
                  router.push("/showingAllMovies");
                }}
              ></i>
              <input
                // type="text"
                // name="search"
                // value={search.search}
                // onChange={changeHandler}
                placeholder="Search.."
              />
            </div>
          </div>
          <div className={styles["location"]}>
            <p>Location</p>
            <i className="fa-sharp fa-solid fa-chevron-down"></i>
          </div>
          <div className={styles["toggle-content"]}>
            <p>Movies</p>
          </div>
          <div className={styles["toggle-content"]}>
            <p>Cinemas</p>
          </div>
          <div className={styles["toggle-content"]}>
            <p>Buy Ticket</p>
          </div>
          <div className={styles["copyright"]}>
            <p>&copy;2020 Golden-Tix. All Rights Reserved</p>
          </div>
        </div>
      </div>
    </header>
  );
}

export default Header;
