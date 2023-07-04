import styled from "styled-components";
import Bg from "../assets/website.png";

export const Container = styled.div`
  .section-1 {
    background-image: url(${Bg});
    background-size: cover;

    header {
      padding: 30px 80px 0 80px;

      div {
        display: flex;
        align-items: center;
        justify-content: space-between;

        .div-links {
          display: flex;
          gap: 40px;
        }

        .div-btn {
          display: flex;
          gap: 15px;

          button {
            border-radius: 40px;
            padding: 12px 32px;
            background: #fff;
            font-size: 18px;
            font-weight: 400;
            cursor: pointer;

            &:hover {
              opacity: 0.8;
            }
          }
        }

        a {
          text-decoration: none;
          color: #fff;
          font-size: 18px;
          font-weight: 400;
        }
      }
    }
  }

  .text-section1 {
    display: flex;
    flex-direction: column;
    align-items: center;
    text-align: center;
    color: #fff;
    margin-top: 100px;

    h1 {
      font-size: 72px;
      font-weight: 900;
    }

    p {
      color: #8b8b8b;
      font-size: 18px;
      font-weight: 400;
      line-height: 150%;
      margin-top: 25px;
    }

    button {
      border-radius: 40px;
      background: #a8ff35;
      padding: 16px 32px;
      margin-top: 50px;
      border: none;
      font-size: 18px;
      font-weight: 700;
      cursor: pointer;
    }

    img {
      margin-top: 90px;
      margin-bottom: 90px;
    }
  }

  .section-2 {
    background-color: #a8ff35;
    width: 100%;
    padding-top: 140px;

    div {
      display: flex;
      justify-content: center;
      align-items: center;
      flex-direction: column;

      h1 {
        font-size: 72px;
        font-weight: 700;
        margin-bottom: 60px;
      }

      p {
        font-size: 18px;
        font-weight: 400;
        line-height: 150%;
        text-align: center;
        margin-top: 60px;
        margin-bottom: 140px;
      }

      .div-group {
        display: flex;
        flex-direction: row;
        gap: 25px;

        .div-find {
          background-color: #fff;
          width: 502px;
          height: 202px;
          border-radius: 15px;
        }
      }
    }
  }

  .section-3 {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    padding: 140px;

    .text-findtrend {
      h1 {
        font-size: 65px;
        color: #000;
        font-weight: 700;
        margin-bottom: 350px;
      }

      span {
        color: #adadad;
      }
    }

    .div-brands {
      text-align: center;
      margin-bottom: 280px;
      display: flex;
      flex-direction: column;
      align-items: center;

      div {
        display: grid;
        grid-template-columns: repeat(4, 1fr);
        grid-gap: 100px;
        align-items: center;
        justify-content: center;
      }

      h1 {
        font-size: 64px;
        font-weight: 700;
        margin-bottom: 80px;
      }
    }

    .div-platform {
      text-align: center;

      div {
        display: flex;
        justify-content: center;
        margin-bottom: 100px;
        gap: 80px;
      }

      h1 {
        font-size: 64px;
        margin-bottom: 80px;
        font-weight: 700;
      }
    }

    .div-tweets {
      display: flex;
      flex-direction: column;
      align-items: center;
    }
  }

  .section-4 {
    background-color: #000;

    .main-section-4 {
      text-align: center;

      .h1-get {
        font-size: 64px;
        font-weight: 700;
        padding-top: 120px;
        color: #fff;
      }
    }

    .div-prices {
      display: flex;
      height: 100%;
      justify-content: center;
      margin-top: 120px;
      gap: 40px;
    }

    .price {
      background-color: #fff;
      padding: 30px 0px 30px 30px;
      border-radius: 15px;
      color: #000;
      display: flex;
      margin-bottom: 120px;
      flex-direction: column;
      width: 360px;
      text-align: start;

      &:hover {
        background-color: #a8ff35;

        button {
          background-color: #000;
          color: #fff;
        }
      }

      h1 {
        font-size: 36px;
        font-style: normal;
        font-weight: 400;
      }

      p {
        font-size: 18px;
        font-style: normal;
        font-weight: 400;
        line-height: 100%;
        margin-bottom: 60px;
      }

      h2 {
        font-size: 64px;
        font-style: normal;
        font-weight: 400;
        margin-bottom: 40px;

        span {
          font-size: 18px;
          font-weight: 400;
        }
      }

      button {
        width: 296px;
        height: 58px;
        border-radius: 29px;
        background: #a8ff35;
        font-size: 18px;
        font-weight: 700;
        margin-top: auto;
        border: none;
        cursor: pointer;

        &:hover {
          opacity: 0.8;
        }
      }
    }

    .advantages {
      display: flex;
      flex-direction: column;

      div {
        display: flex;
        height: 50px;
        gap: 5px;

        .icon-check {
          font-size: 18px;
        }

        p {
          font-size: 18px;
          font-weight: 400;
        }
      }
    }
  }

  .section-5 {
    background-color: #a8ff35;
    width: 100%;
    height: 539px;
    padding-top: 140px;
    padding-bottom: 140px;
    display: flex;
    flex-direction: column;
    text-align: center;
    align-items: center;

    h1 {
      font-size: 72px;
      font-weight: 900;

      span {
        color: #87d322;
        font-size: 72px;
        font-weight: 900;
      }
    }

    button {
      width: 180px;
      padding: 16px 32px;
      border-radius: 40px;
      background: #000;
      color: #fff;
      font-size: 18px;
      border: none;
      font-weight: 700;
      margin-top: 50px;
      cursor: pointer;

      &:hover {
        opacity: 0.8;
      }
    }
  }

  footer {
    display: flex;
    align-items: center;
    justify-content: space-between;
    width: 100%;
    height: 100px;
    img {
      padding-left: 80px;
    }

    div {
      display: flex;
      gap: 40px;
      padding-right: 50px;

      a {
        font-size: 18px;
        cursor: pointer;
        font-weight: 400;
      }
    }
  }

  /* RESPONSÍVEL */ /* RESPONSÍVEL */ /* RESPONSÍVEL */

  @media (max-width: 1225px) {
    .section-1 {
      .logo {
        width: 13%;
      }

      .four-socials {
        width: 75%;
      }
      .div-links {
        a {
          font-size: 15px;
        }
      }
    }

    .section-3 {
      .div-brands {
        div {
          grid-gap: 60px;
        }
      }
      .div-platform {
        .images-socials {
          gap: 30px;
          img {
            width: 40px;
          }
        }
      }
    }
    .section-4 {
      .price {
        width: 28%;

        button {
          width: 90%;
        }
      }
    }
  }

  @media (max-width: 1060px) {
    .section-4 {
      .price {
        width: 25%;

        h1 {
          font-size: 25px;
        }

        h2 {
          font-size: 40px;
        }

        p {
          font-size: 13px;
        }

        button {
          width: 85%;
        }
      }
      .advantages {
        div {
          padding-right: 10px;
          gap: 2px;
          p {
            font-size: 13px;
          }
        }
      }
    }
  }

  @media (max-width: 970px) {
    .section-1 {
      .div-links a {
        display: none;
      }
    }

    .section-2 {
      div {
        .div-group {
          display: flex;
          flex-direction: column;

          .image-group1 {
            transform: rotate(35deg);
            margin-right: 98%;
          }

          .image-group2 {
            transform: rotate(35deg);
            margin-left: 70%;
          }

          .div-find {
            width: 400px;
            height: 130px;
          }
        }
        h1 {
          font-size: 60px;
        }
      }
    }

    .section-3 {
      .div-platform {
        .div-tweets {
          margin-bottom: 10px;
          gap: 0;
          img {
            width: 85%;
          }
        }
      }
      .div-brands {
        display: flex;
        flex-direction: column;
        align-items: center;

        div {
          grid-template-columns: repeat(2, 1fr);
          grid-gap: 80px;
        }
      }
    }

    .section-4 {
      .div-prices {
        flex-direction: column;
        align-items: center;
        gap: 20px;
      }

      .price {
        width: 50%;

        h1 {
          font-size: 30px;
        }

        h2 {
          font-size: 60px;
        }

        p {
          font-size: 18px;
        }

        button {
          width: 93%;
        }
      }

      .advantages {
        margin-bottom: 100px;

        div {
          p {
            font-size: 18px;
          }
        }
      }
    }

    footer {
      flex-direction: column;
      text-align: center;

      padding-top: 80px;

      img {
        padding-left: 0px;
      }

      div {
        flex-direction: column;
        padding-right: 0px;
        margin-top: 50px;
        a {
          font-size: 13px;
        }
      }
    }
  }

  @media (max-width: 730px) {
    .text-section1 {
      h1 {
        font-size: 35px;
      }

      p {
        font-size: 15px;
      }
    }

    .section-2 {
      div {
        h1 {
          font-size: 38px;
        }

        p {
          font-size: 13px;
        }
      }
    }

    .section-5 {
      h1 {
        font-size: 50px;

        span {
          font-size: 50px;
        }
      }
    }
  }

  @media (max-width: 600px) {
    .section-1 {
      .text-section1 {
        h1 {
          font-size: 20px;
        }

        p {
          font-size: 8px;
        }
      }
      header {
        div {
          flex-direction: column;
        }
      }
      .logo {
        width: 50%;
        margin-bottom: 30px;
      }
    }
    .section-2 {
      div {
        h1 {
          font-size: 20px;
        }

        p{
          font-size: 8px;
        }
        .div-group {
          width: 200px;

          .div-find {
            width: 300px;
            height: 100px;
            img {
              width: 200px;
            }
          }
        }
      }
    }
    .section-4 {
      .main-section-4 {
        .h1-get {
          font-size: 35px;
        }
      }

      .price {
        width: 80%;
        button {
          width: 87%;
        }
      }
    }

    .section-3 {
      .text-findtrend {
        h1 {
          font-size: 40px;
        }
      }

      .div-brands {
        h1 {
          font-size: 30px;
        }
        img {
          width: 100px;
        }
      }
      .div-platform {
        h1 {
          font-size: 30px;
        }
        .images-socials {
          gap: 5px;
          img {
            width: 20px;
          }
        }
      }
    }
  }
`;
