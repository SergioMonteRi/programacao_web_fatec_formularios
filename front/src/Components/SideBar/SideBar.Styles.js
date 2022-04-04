import styled from "styled-components";

export const SideBarContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: #2b2929;
  height: 100vh;
  width: 7%;
  border-top-right-radius: 15px;
  border-bottom-right-radius: 15px;


  .config-icon {
    display: flex;
    align-items: center;
    justify-content: center;
  }

  .home-icon {
    margin-bottom: 70%;
    padding: 15px;
    height: 15%;
    cursor: pointer;
    border-radius: 25px;
    width: 85%;
    height: 10%;
    margin-top: 15%;
    transition: 1s ease;
    justify-content: center;

    :hover {
      background-color: white;
    }
  }

  .option-icon {
    margin-bottom: 25%;
    padding: 10px;
    width: 80%;
    height: 9%;
    border-radius: 25px;
    opacity: 1;
    transition: 1s ease;
    cursor: pointer;

    :hover {
      background-color: white;
    }
  }
`;
