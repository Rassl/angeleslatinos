import styled from "styled-components"
import arley from '../../images/arley-3.jpg';

export const CreatorStyles = styled.section`
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
    align-items: center;
    justify-content: flex-start;
    position: relative;
    overflow: hidden;
    i{
  position: absolute;
  width: 120px;
  height: 120px;
  border-radius: 50%;
  -webkit-animation: 'screen'  infinite;
  animation: 'screen'  infinite;
  opacity: 0.5;
}


i:nth-child(1){
  top:20px;
  left:30px;
    background: -webkit-radial-gradient(center, ellipse cover,  rgba(2,226,252,0.15) 0%,rgba(0,0,0,0) 100%);
  /* box-shadow:0px 0px 5px 0px #02e2fc; */
  animation-duration: 5s;
}

i:nth-child(2){
  top:420px;
  left:30px;
  background: -webkit-radial-gradient(center, ellipse cover,  rgba(250,160,2,0.15) 0%,rgba(0,0,0,0) 100%);
  /* box-shadow:0px 0px 5px 0px #faa002; */
  animation-duration: 21s;
}

i:nth-child(3){
  top:550px;
  left:880px;
  background: -webkit-radial-gradient(center, ellipse cover,  rgba(20,252,2,0.15) 0%,rgba(0,0,0,0) 100%);
  /* box-shadow:0px 0px 5px 0px #14fc02; */
  animation-duration: 5s;
}

i:nth-child(4){
  top:5px;
  left:1030px;
  background: -webkit-radial-gradient(center, ellipse cover,  rgba(252,2,196,0.15) 0%,rgba(0,0,0,0) 100%);
  /* box-shadow:0px 0px 5px 0px #fc02c4; */
  animation-duration: 4s;
}

i:nth-child(5){
  top:280px;
  left:12px;
  background: -webkit-radial-gradient(center, ellipse cover,  rgba(139,44,148,0.15) 0%,rgba(0,0,0,0) 100%);
  /* box-shadow:0px 0px 5px 0px #8b2c94; */
  animation-duration: 5s;
}

i:nth-child(6){
  top:550px;
  left:30px;
background: -webkit-radial-gradient(center, ellipse cover,  rgba(251,184,41,0.15) 0%,rgba(0,0,0,0) 100%);
/* box-shadow:0px 0px 5px 0px #FBB829;  */
  animation-duration: 6s;
}

i:nth-child(7){
  top:650px;
  left:50px;
  background: -webkit-radial-gradient(center, ellipse cover,  rgba(195,255,104,0.15) 0%,rgba(0,0,0,0) 100%);
  /* box-shadow:0px 0px 5px 0px #C3FF68;  */
  animation-duration: 15s;
}

i:nth-child(8){
  top:20px;
  left:860px;
  background: -webkit-radial-gradient(center, ellipse cover,  rgba(255,0,102,0.15) 0%,rgba(0,0,0,0) 100%);
  /* box-shadow:0px 0px 5px 0px #FF0066;  */
  animation-duration: 5s;
}
i:nth-child(9){
  top:896px;
  left:132px;
  background: -webkit-radial-gradient(center, ellipse cover,  rgba(255,255,0,0.15) 0%,rgba(0,0,0,0) 100%);
  /* box-shadow:0px 0px 5px 0px #FFFF00;  */
  animation-duration: 13s;
}

i:nth-child(10){
  top:578px;
  left:357px;
  background: -webkit-radial-gradient(center, ellipse cover,  rgba(127,175,27,0.15) 0%,rgba(0,0,0,0) 100%);
  /* box-shadow:0px 0px 5px 0px #7FAF1B;  */
  animation-duration: 4s;
}

i:nth-child(11){
  top:380px;
  left:230px;
  background: -webkit-radial-gradient(center, ellipse cover,  rgba(1,210,255,0.15) 0%,rgba(0,0,0,0) 100%);
  /* box-shadow:0px 0px 5px 0px #01D2FF;  */
  animation-duration: 5s;
}

i:nth-child(12){
  top:570px;
  left:1100px;
  background: -webkit-radial-gradient(center, ellipse cover,  rgba(237,247,255,0.15) 0%,rgba(0,0,0,0) 100%);
  /* box-shadow:0px 0px 5px 0px #EDF7FF;  */
  animation-duration: 6s;
}

i:nth-child(13){
  top:600px;
  left:600px;
  background: -webkit-radial-gradient(center, ellipse cover,  rgba(0,255,255,0.15) 0%,rgba(0,0,0,0) 100%);
  /* box-shadow:0px 0px 5px 0px #00FFFF;  */
  animation-duration: 7s;
}

i:nth-child(14){
  top:200px;
  left:520px;
  background: -webkit-radial-gradient(center, ellipse cover,  rgba(0,0,255,0.15) 0%,rgba(0,0,0,0) 100%);
  /* box-shadow:0px 0px 5px 0px #0000FF;  */
  animation-duration: 14s;
}

i:nth-child(15){
  top:370px;
  left:500px;
  background: -webkit-radial-gradient(center, ellipse cover,  rgba(16,225,228,0.15) 0%,rgba(0,0,0,0) 100%);
  /* box-shadow:0px 0px 5px 0px #10e1e4;  */
  animation-duration: 9s;
}

i:nth-child(16){
  top:620px;
  left:730px;
  background: -webkit-radial-gradient(center, ellipse cover,  rgba(255,51,0,0.15) 0%,rgba(0,0,0,0) 100%);
  /* box-shadow:0px 0px 5px 0px #FF3300;  */
  animation-duration: 3s;
}
i:nth-child(17){
  top:62px;
  left:330px;
  background: -webkit-radial-gradient(center, ellipse cover,  rgba(255,234,232,0.15) 0%,rgba(0,0,0,0) 100%);
  /* box-shadow: 0px 0px 5px 0px #FFEAE8; */
  animation-duration: 4s;
}

i:nth-child(18){
  top:0px;
  left:250px;
  background: -webkit-radial-gradient(center, ellipse cover,  rgba(255,229,0,0.15) 0%,rgba(0,0,0,0) 100%);
  /* box-shadow: 0px 0px 5px 0px #FFE500; */
  animation-duration: 5s;
}

i:nth-child(19){
  top:600px;
  left:180px;
  background: -webkit-radial-gradient(center, ellipse cover,  rgba(255,102,153,0.15) 0%,rgba(0,0,0,0) 100%);
  /* box-shadow: 0px 0px 5px 0px #FF6699; */
  animation-duration: 6s;
}

i:nth-child(20){
  top:987px;
  left:13px;
  background: -webkit-radial-gradient(center, ellipse cover,  rgba(84,156,204,0.15) 0%,rgba(0,0,0,0) 100%);
  /* box-shadow: 0px 0px 5px 0px #549CCC; */
  animation-duration: 7s;
}

i:nth-child(21){
  top:120px;
  left:930px;
  background: -webkit-radial-gradient(center, ellipse cover,  rgba(184,175,3,0.15) 0%,rgba(0,0,0,0) 100%);
  /* box-shadow: 0px 0px 5px 0px #B8AF03; */
  animation-duration: 8s;
}

i:nth-child(22){
  top:80px;
  left:700px;
  background: -webkit-radial-gradient(center, ellipse cover,  rgba(171,250,249,0.15) 0%,rgba(0,0,0,0) 100%);
  /* box-shadow: 0px 0px 5px 0px #ABFAF9; */
  animation-duration: 5s;
}

i:nth-child(23){
  top:350px;
  left:720px;
  background: -webkit-radial-gradient(center, ellipse cover,  rgba(127,15,255,0.15) 0%,rgba(0,0,0,0) 100%);
  /* box-shadow: 0px 0px 5px 0px #7F0FFF; */
  animation-duration: 2s;
}

i:nth-child(24){
  top:997px;
  left:678px;
  background: -webkit-radial-gradient(center, ellipse cover,  rgba(48,128,0,0.15) 0%,rgba(0,0,0,0) 100%);
  /* box-shadow: 0px 0px 5px 0px #308000; */
  animation-duration: 3s;
}

i:nth-child(25){
  top:714px;
  left:246px;
  background: -webkit-radial-gradient(center, ellipse cover,  rgba(255,38,38,0.15) 0%,rgba(0,0,0,0) 100%);
  /* box-shadow: 0px 0px 5px 0px #FF2626; */
  animation-duration: 4s;
}

i:nth-child(26){
  top:0px;
  left:480px;
  background: -webkit-radial-gradient(center, ellipse cover,  rgba(15,29,215,0.15) 0%,rgba(0,0,0,0) 100%);
/* box-shadow: 0px 0px 5px 0px #0F1DD7; */
  animation-duration: 5s;
}

i:nth-child(27){
  top:456px;
  left:1000px;
  background: -webkit-radial-gradient(center, ellipse cover,  rgba(51,102,153,0.15) 0%,rgba(0,0,0,0) 100%);
  /* box-shadow: 0px 0px 5px 0px #336699; */
  animation-duration: 6s;
}

i:nth-child(28){
  top:350px;
  left:865px;
  background: -webkit-radial-gradient(center, ellipse cover,  rgba(70,172,255,0.15) 0%,rgba(0,0,0,0) 100%);
  /* box-shadow: 0px 0px 5px 0px #46ACFF; */
  animation-duration: 7s;
}

i:nth-child(29){
  top:100px;
  left:100px;
  background: -webkit-radial-gradient(center, ellipse cover,  rgba(222,4,5,0.15) 0%,rgba(0,0,0,0) 100%);
/* box-shadow: 0px 0px 5px 0px #DE0405; */
  animation-duration: 8s;
}

i:nth-child(30){
  top:1087px;
  left:722px;
  background: -webkit-radial-gradient(center, ellipse cover,  rgba(77,254,21,0.15) 0%,rgba(0,0,0,0) 100%);
  /* box-shadow: 0px 0px 5px 0px #4DFE15; */
  animation-duration: 9s;
}

i:nth-child(31){
  width:200px;
  height:200px;
  top:795px;
  left:605px;
  background: -webkit-radial-gradient(center, ellipse cover,  rgba(243,10,70,0.15) 0%,rgba(0,0,0,0) 100%);
  /* box-shadow: 0px 0px 5px 0px #F30A46; */
  animation-duration: 1s;
}

i:nth-child(32){
  top:234px;
  left:678px;
  background: -webkit-radial-gradient(center, ellipse cover,  rgba(245,253,45,0.15) 0%,rgba(0,0,0,0) 100%);
  /* box-shadow: 0px 0px 5px 0px #F5FD2D; */
  animation-duration: 2s;
}

i:nth-child(33){
  top:270px;
  left:1230px;
  background: -webkit-radial-gradient(center, ellipse cover,  rgba(178,0,255,0.15) 0%,rgba(0,0,0,0) 100%);
  /* box-shadow: 0px 0px 5px 0px #B200FF; */
  animation-duration: 3s;
}
i:nth-child(34){
  width:200px;
  height:200px;
  top:1126px;
  left:332px;
  background: -webkit-radial-gradient(center, ellipse cover,  rgba(102,204,255,0.15) 0%,rgba(0,0,0,0) 100%);
  /* box-shadow: 0px 0px 5px 0px #66CCFF; */
  webkit-animation-duration: 4s;
}

i:nth-child(35){
  top:407px;
  left:83px;
  background: -webkit-radial-gradient(center, ellipse cover,  rgba(20,243,175,0.15) 0%,rgba(0,0,0,0) 100%);
  /* box-shadow: 0px 0px 5px 0px #14F3AF; */
  animation-duration: 5s;
}

i:nth-child(36){
  width:200px;
  height:200px;
  top:176px;
  left:297px;
  background: -webkit-radial-gradient(center, ellipse cover,  rgba(100,245,102,0.15) 0%,rgba(0,0,0,0) 100%);
  /* box-shadow: 0px 0px 5px 0px #64F566; */
  animation-duration: 6s;
}

i:nth-child(37){
  width:300px;
  height:300px;
  top:820px;
  right:10px;
  background: -webkit-radial-gradient(center, ellipse cover,  rgba(236,218,65,0.15) 0%,rgba(0,0,0,0) 100%);
  /* box-shadow: 0px 0px 5px 0px #ECDA41; */
  animation-duration: 7s;
}

i:nth-child(38){
  top:500px;
  left:500px;
  background: -webkit-radial-gradient(center, ellipse cover,  rgba(255,61,45,0.15) 0%,rgba(0,0,0,0) 100%);
  /* box-shadow: 0px 0px 5px 0px #FF3D2D; */
  animation-duration: 8s;
}


i:nth-child(39){
  top:20px;
  right:26px;
  background: -webkit-radial-gradient(center, ellipse cover,  rgba(74,73,235,0.15) 0%,rgba(0,0,0,0) 100%);
  /* box-shadow: 0px 0px 5px 0px #4A49EB; */
  animation-duration: 9s;
}

i:nth-child(40){
  width:200px;
  height:200px;
  top:251px;
  left:1053px;
  background: -webkit-radial-gradient(center, ellipse cover,  rgba(255,72,0,0.15) 0%,rgba(0,0,0,0) 100%);
  /* box-shadow: 0px 0px 5px 0px #FF4800; */
  animation-duration: 10s;
}


@keyframes screen {
  from {
    opacity: 0;
  }

  25%{
    opacity: 0.3;
    transform: scale3d(3, 3, 4);
  }

  50%{
    opacity: 0.75;
  }

  75%{
    opacity: 1;

  }

  to{
    opacity: 0;
  }
}
  }

  .typo {
    list-style: none;
    position: absolute;
    padding: 0;
    right: 10%;
    li {
      text-transform: uppercase;
      font-size: 200px;
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
