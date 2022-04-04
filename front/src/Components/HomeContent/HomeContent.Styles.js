import styled from "styled-components";

export const HomeContentContainer = styled.div`
  width: 100%;
  height: 95%;
  display: flex;
  flex-direction: column;
  margin-top: 1%;
  align-items: center;

  .title-container {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width: 90%;
    margin-top: 2%;

    h1 {
      display: flex;
      font-weight: bold;
      font-size: 35px;
      margin-bottom: 0%;
    }

    h2 {
      display: flex;
      font-weight: lighter;
      font-size: 17px;
    }
  }

  .home-content {
    display: flex;
    flex-direction: row-reverse;
    justify-content: right;
    align-items: center;
    margin-top: 3%;
   

    .home-image {
      align-items: right;
      height: 100%;
      margin-bottom: 0;
    }

    .text-content {
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: flex-start;

      h2 {
        font-size: 25px;
        display: flex;
        font-weight: lighter;
        justify-content: right;
        font-weight: lighter;
      }

      li {
        margin-left: 25%;
      }
    }
  }
`;
