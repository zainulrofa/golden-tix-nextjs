import React, { useState } from "react";
import Image from "next/image";
import styles from "../styles/CardTicket.module.css";
import cinema from "../assets/sponsor-1.png";
import { Router, useRouter } from "next/router";

function CardTicket(props) {
  const [time, setTime] = useState();
  const [id, setId] = useState();
  console.log(props.movie_name);

  const router = useRouter();
  console.log(`time: ${time}, id"${id}`);

  const handleSubmit = (event) => {
    event.preventDefault();
    localStorage.setItem("id", id);
    router.push(
      {
        pathname: "/order",
        query: { showtime_id: id, movies_name: props.movie_name },
      },
      "/order"
    );
  };

  return (
    <>
      <div className={styles["card-ticket"]}>
        <div className={styles["top-container"]}>
          <div className={styles["image-container"]}>
            <Image
              src={`https://res.cloudinary.com/dedmbkp9a/image/upload/v1669990442/${props.image}`}
              alt="logo"
              layout="fill"
              objectFit="contain"
            />
          </div>
          <div className={styles["details"]}>
            <h1>
              {props.cinemaone21 ? "CinemaOne21" : ""}
              {props.hiflix ? "hiflix" : ""}
            </h1>
            <p>Downcare street No. 21, East Purwokerto</p>
          </div>
        </div>
        <div className={styles["schedule"]}>
          {props.cinemaone21?.map((schedule) => {
            const time = `${schedule.schedule}`.slice(0, 5);
            return (
              <div
                className={
                  id === schedule.showtime_id
                    ? styles["time-red"]
                    : styles["time"]
                }
              >
                <p
                  onClick={() => {
                    setTime(schedule.schedule);
                    setId(schedule.showtime_id);
                  }}
                >
                  {time}
                </p>
              </div>
            );
          })}
          {props.hiflix?.map((schedule) => {
            const time = `${schedule.schedule}`.slice(0, 5);
            return (
              <div className={styles["time"]}>
                <p
                  onClick={() => {
                    setTime(schedule.schedule);
                    setId(schedule.showtime_id);
                  }}
                >
                  {time}
                </p>
              </div>
            );
          })}
        </div>
        <div className={styles["price-container"]}>
          <div className={styles["title"]}>
            <p>Price</p>
          </div>
          <div className={styles["price"]}>
            <p>Rp. {props.price}/seat</p>
          </div>
        </div>
        <div className={styles["button-container"]}>
          <form onSubmit={handleSubmit}>
            <div typeof="submit" className={styles["book-btn"]}>
              <button>Book now</button>
            </div>
          </form>
          <div className={styles["add-btn"]}>
            <button>Add to cart</button>
          </div>
        </div>
      </div>
    </>
  );
}

export default CardTicket;
