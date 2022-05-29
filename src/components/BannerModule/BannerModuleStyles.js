import styled from "styled-components"
import arley from '../../images/arley-3.jpg';

export const BannerModuleStyles = styled.section`
  height: 100vh;
  position: relative;
  padding: 30px var(--borderSpacing);
  background: #1b1b1b;
  /* background: url(${arley}); */
  background-image: repeat;
  &:before{
      /* z-index:-1; */
      position:absolute;
      left:0;
      top:0;
      right: 0;
      bottom: 0;
      content: '';
      background: url(${arley});
      opacity: 0.1;
      background-repeat: no-repeat;
      background-size: cover;
}
  }

  .container {
    height: 100%;
    display: flex;
    align-items: flex-end;
    justify-content: flex-start;
  }

  @media(max-width:414px) {
      height: 50vh;
      .container {
        height: 100%;
        display: flex;
        align-items: center;
        justify-content: center;
      }
    }

  .typo {
    list-style: none;
    position: absolute;
    padding: 0;
    right: 10%;
    li {
      text-transform: uppercase;
      font-size: 150px;
      margin: 0;
      opacity: 0.2;
      line-height: 1.2;
      & + li {
        margin-left: 150px;
        & + li {
          margin-left: 300px;
        }
      }
    }
  }

    @media(max-width:414px) {
      .typo {
        display: none;
        li {
          font-size: 50px;
          & + li {
            margin-left: 25px;
            & + li {
              margin-left: 30px;
            }
          }
        }
      }
    }

  .gradient,
  .banner__image {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    z-index: 1;
  }

  .gradient {
    background: radial-gradient(
      at bottom left,
      rgba(0, 0, 0, 0.5),
      rgba(0, 0, 0, 0)
    );
  }

  .banner__content {
    position: relative;
    z-index: 2;
    min-height: 33vh;
    width: 100%;
    max-width: 700px;

    @media (min-width: 768px) {
      width: 66vw;
    }

    h1,
    h2 {
      text-shadow: var(--textShadow);
    }

    h1 {
      border-bottom: 2px solid rgba(255, 255, 255, 0.15);
      display: inline-block;
      color: #ffc400;
    }

    h2 {
      font-size: var(--bannerSubTitle);
      font-weight: 400;
      letter-spacing: 2px;
      span {
        color: #ffc400;
      }
    }

    h1,
    .price {
      margin-top: 0;
      font-size: var(--bannerTitle);
    }
  }

  .banner__btns {
    display: flex;
    gap: var(--gap);
  }
`
